'use strict';

const httpAuth = require('http-auth');

if (process.env.DHTTP_AUTH_USER && process.env.DHTTP_AUTH_PASSWORD) {
  let basic = httpAuth.basic(
    { realm: require(process.cwd() + '/package.json').name },
    (user, password, callback) => {
      callback(user == process.env.DHTTP_AUTH_USER && password == process.env.DHTTP_AUTH_PASSWORD);
    }
  );
  module.exports = httpAuth.connect(basic);
} else {
  module.exports = (req, res, next) => { next(); };
}
