/*global describe it */

var path = require('path');
var open = require('../');

// NOTE: this is not really an automated test suite.
// It does not check that the applications are actually opened. This needs
// to be verified manually.  It *does* ensure that the opener process
// does not return an error, and this is a good proxy for success for
// much less effort.
//
// this test should be run with both 'npm test' and 'sudo npm test' to make
// sure the application is opened in user context even during sudo
//
// the xdg-open script behaves differently than start and open in that
// it does not return after opening the process, it waits until the child
// process exits.  Because of this, the callback parameter is not documented
// in the readme at this time.
describe('open', function () {
  function pathTo(asset) {
    return path.join(__dirname, 'support', asset);
  }

  it('should open html file in default browser', function (done) {
    open(pathTo('asset.html'), done);
  });

  it('should open https uris in default browser', function (done) {
    open('https://github.com/jjrdn/node-open', done);
  });

  //it('should open image file in default image viewer', function (done) {
    //open(pathTo('asset.jpg'), done);
  //});

  it('should open txt file in default text editor', function (done) {
    open(pathTo('asset.txt'), function (error) {
      console.log('yep editor is open');
      done();
    });
  });

  it('should open files with spaces', function (done) {
    open(pathTo('with space.html'), done);
  });

  it('should open files with quotes', function (done) {
    open(pathTo('with"quote.html'), done);
  });

  it('should open files in the specified application', function (done) {
    open(pathTo('with space.html'), 'firefox', done);
  });
});

