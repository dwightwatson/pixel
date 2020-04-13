const DEFAULT_HEIGHT = 1024;
const DEFAULT_WIDTH = 768;

module.exports = (request) => ({
  height: getHeight(request),
  width: getWidth(request),
  format: getFormat(request),
  contentType: getContentType(request),
});

const getHeight = (request) => parseInt(request.query.height, 10) || DEFAULT_HEIGHT;

const getWidth = (request) => parseInt(request.query.width, 10) || DEFAULT_WIDTH;

const getFormat = (request) => {
  const acceptHeader = request.headers['accept'];

  return acceptHeader && acceptHeader.includes('image/webp') ? 'webp' : 'jpg';
}

const getContentType = (request) => {
  const format = getFormat(request);

  return format === 'webp' ? 'image/webp' : 'image/jpeg';
}
