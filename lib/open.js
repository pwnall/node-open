var exec = require('child_process').exec;


/**
 * open a file or uri using the default application for the file type.
 * @return {ChildProcess} - the child process object.
 * @param {string} target - the file/uri to open.
 * @param {function(Error)} callback - null on success, or an error object
 *      that contains a property 'code' with the exit code of the process.
 */
module.exports = open;
function open(target, callback) {
  var opener;

  switch (process.platform) {
    case 'darwin':
      opener = 'open';
      break;
    case 'win32':
      opener = 'start';
      break;
    default:
      // use xdg open everywhere else
      throw Error('Platform "' + process.platform + '" is not supported yet');
      break;
  }

  // TODO: what are the implications of quoting target?
  // on windows things go wrong... 
  // for instance 'start "http://www.google.com"' fails by opening a new
  // instance of cmd.exe
  return exec(opener + ' ' + target + '', callback);
}
