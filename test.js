var assume = require('assume');

describe('Platform specific', function () {
  [
    './index.js',
    './main.js',
    './index.android.js',
    './index.ios.js'
  ].forEach(function (what) {
    var env = require(what);

    describe(what, function () {
      it('exposes an object', function () {
        assume(env).is.a('object');

        assume(env.type).is.a('string');
        assume(env.platform).is.a('string');
      });
    });
  });
});
