const fs = require('fs');
const sharp = require('sharp');

module.exports = async (req, res) => {
  const stream = fs.createReadStream(__dirname + '/example.jpg');

  const height = parseInt(req.query.height, 10) || 200;
  const width = parseInt(req.query.width, 10) || 200;

  res.setHeader('Content-Type', 'image/jpeg');
  res.setHeader('Cache-Control', 'max-age=31536000, public');

  const transformation = sharp()
    .rotate()
    .resize(height, width);

  stream.pipe(transformation).pipe(res);
}
