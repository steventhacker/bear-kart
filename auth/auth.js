const auth = require('basic-auth');

const bearUser = process.env.BEAR_USER;
const bearPass = process.env.BEAR_PASS;

module.exports = function (request, response, next) {
  var user = auth(request);
  if (!user || !bearUser || bearUser !== user.name || bearPass !== user.pass) {
    response.set('WWW-Authenticate', 'Basic realm="example"');
    return response.status(401).send();
  }
  return next();
};