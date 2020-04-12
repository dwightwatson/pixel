const sharp = require('sharp');
const fetch = require('node-fetch');

module.exports = (req, res) => {

  fetch(req.query.url)
    .then(response => {
      res.setHeader('Content-Type', 'image/jpeg');
      res.setHeader('Cache-Control', 'max-age=31536000, public');

      const transformation = sharp()
        .rotate()
        .resize(200, 200);

      response.body.pipe(transformation).pipe(res);
    });

}
