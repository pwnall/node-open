var path = require('path');
var expect = require('expect.js');
var open = require('../');

describe('open', function() {
  function pathTo(asset) {
    return path.join(__dirname, 'support', asset);
  }
  var html = pathTo('asset.html');
  var jpeg = pathTo('asset.jpg');
  var txt = pathTo('asset.txt');

  it('should open html file in default browser', function(done) {
    open(html, done);
  });

  it('should open image file in default image viewer', function(done) {
    open(jpeg, done);
  });

  it('should open txt file in default text editor', function(done) {
    open(txt, done);
  });

});

