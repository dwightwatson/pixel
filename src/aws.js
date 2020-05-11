const util = require('util');
const s3 = require('aws-sdk/clients/s3');

const BUCKET = 'bucketname';

module.exports = await (key) => {
  const params = {
    bucket: BUCKET,
    key: key,
  };

  return util.promisify(s3.getObject(params));
}
