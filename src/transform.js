const sharp = require('sharp');

module.exports = (options) => {
  return sharp()
    .rotate()
    .resize({
      width: options.width,
      height: options.height,
      fit: sharp.fit.cover,
      position: sharp.strategy.attention,
    })
    .toFormat(options.format);
}
