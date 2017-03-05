const runas = require('runas');

const setArg = process.argv[2].toLowerCase();

const LISTEN_ADDRESS = '127.0.0.1';
const LISTEN_PORT = 80;
const CONNECT_ADDRESS = '127.0.0.1';
const CONNECT_PORT = 3050;

const CMD_OPTS = {
  hide: true,
  admin: true,
  catchOutput: true,
  stdin: ''
};

/**
 * Get netsh command
 * 
 * @param {string} setType 'add' or 'delete'
 * @param {object} opts {
 *    listenPort: 'port'
 *    listenAddr: 'address'
 *    connectPort (optional): 'port'
 *    connectAddr (optional): 'address'
 * }
 */
const getCmdArgs = (setType, opts) => {
  if (setType != 'add' && setType != 'delete') {
    console.log('Set type not \'add\' or \'delete\'.');
    process.exit();
  }
  if (!opts.listenPort || !opts.listenAddr) {
    console.log('Listen Port or Listen Address not provided.');
    process.exit();
  }
  let cmdArgsStr = `interface portproxy ${setType} v4tov4`;
  cmdArgsStr += ` listenport=${opts.listenPort} listenaddress=${opts.listenAddr}`;
  if (opts.connectPort) {
    cmdArgsStr += ` connectport=${opts.connectPort}`;
  }
  if (opts.connectAddr) {
    cmdArgsStr += ` connectaddress=${opts.connectAddr}`;
  }
  return cmdArgsStr;
};

/**
 * 
 * @param {string} cmd runas command argument
 * @param {array} args runas args argument
 * @param {*} opts runas options argument
 */
const runCmd = (cmd, args, opts) => {
  const ret = runas(cmd, args, opts);
  if (!!ret.exitCode) {
    console.log(ret.stderr);
    console.log('Set portproxy Failed!');
  } else {
    console.log(ret.stdout);
    console.log('Set portproxy Done');
  }
};


if (setArg === undefined || setArg == 'set') {
  console.log('Set portproxy');
  const cmdArgs = getCmdArgs('add', {
    listenPort: LISTEN_PORT,
    listenAddr: LISTEN_ADDRESS,
    connectPort: CONNECT_PORT,
    connectAddr: CONNECT_ADDRESS
  });
  runCmd('netsh', cmdArgs.split(' '), CMD_OPTS);
} else if (setArg == 'unset') {
  console.log('Unset portproxy');
  const cmdArgs = getCmdArgs('delete', {
    listenPort: LISTEN_PORT,
    listenAddr: LISTEN_ADDRESS
  });
  runCmd('netsh', cmdArgs.split(' '), CMD_OPTS);
}
