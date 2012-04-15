var path = require('path');
var expect = require('expect.js');
var open = require('../');

describe('open', function() {
  function pathTo(asset) {
    return path.join(__dirname, 'support', asset);
  }

  it('should open html file in default browser', function(done) {
    open(pathTo('asset.html'), done);
  });

  it('should open https uris in default browser', function(done) {
    open('https://github.com/fixedset/open.js', done);
  });

  it('should open image file in default image viewer', function(done) {
    open(pathTo('asset.jpg'), done);
  });

  it('should open txt file in default text editor', function(done) {
    open(pathTo('asset.txt'), done);
  });

});

