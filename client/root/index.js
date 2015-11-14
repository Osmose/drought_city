/* globals process, require */
/* eslint-disable import/no-require */

let Root;

if (process.env.NODE_ENV === 'production') {
  Root = require('./prod');
} else {
  Root = require('./dev');
}

export default Root;
