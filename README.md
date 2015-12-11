[![Dependency Status](https://david-dm.org/dnode/dhttp-auth.svg)](https://david-dm.org/dnode/dhttp-auth)
[![devDependency Status](https://david-dm.org/dnode/dhttp-auth/dev-status.svg)](https://david-dm.org/dnode/dhttp-auth#info=devDependencies)

# dhttp-auth
Authentication depending on the environment variables ```DHTTP_AUTH_USER``` and ```DHTTP_AUTH_PASSWORD```

## Install
```
npm i dhttp-auth --save
```

## Example
```javascript
const dhttpAuth = require('dhttp-auth');
if (dhttpAuth) {
  app.use(dhttpAuth);
}
```
