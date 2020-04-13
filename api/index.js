const fs = require('fs');
const sharp = require('sharp');

module.exports = async (req, res) => {
  const stream = fs.createReadStream(__dirname + '/example.jpg');

  const height = parseInt(req.query.height, 10) || 200;
  const width = parseInt(req.query.width, 10) || 200;

  const transformation = sharp()
    .rotate()
    .resize(width, height)
    .toFormat(getFormat(req));

  res.setHeader('Content-Type', getContentType(req));
  res.setHeader('Cache-Control', 'max-age=31536000, public');

  stream.pipe(transformation).pipe(res);
}

const getFormat = (req) => {
  const acceptHeader = req.headers['accept'];

  return acceptHeader && acceptHeader.includes('image/webp') ? 'webp' : 'jpg';
}

const getContentType = (req) => {
  const format = getFormat(req);

  return format === 'webp' ? 'image/webp' : 'image/jpeg';
}
