const fs = require('fs');
const sharp = require('sharp');

module.exports = async (req, res) => {
  const stream = fs.createReadStream(__dirname + '/example.jpg');

  res.setHeader('Content-Type', 'image/jpeg');
  res.setHeader('Cache-Control', 'max-age=31536000, public');

  const transformation = sharp()
    .rotate()
    .resize(200, 200);

  stream.pipe(transformation).pipe(res);
}
