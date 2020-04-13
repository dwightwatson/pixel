const fs = require('fs');
const parseOptions = require('../src/options');
const createTransformation = require('../src/transform');

module.exports = async (request, response) => {
  const stream = fs.createReadStream(__dirname + '/example.jpg');

  const options = parseOptions(request);

  const transformation = createTransformation(options);

  response.setHeader('Content-Type', options.contentType);
  response.setHeader('Cache-Control', 'max-age=31536000, public');

  stream.pipe(transformation).pipe(response);
};
