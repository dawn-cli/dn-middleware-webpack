const pkg = require('../package');
const log = require('./common/log');
const config = require('$config');

const styles1 = require('./assets/index.less');
const styles2 = require('./assets/test1.css');
const styles3 = require('./assets/test3.scss');

const test4 = require('./test4.vue');

log('这是 test1');
const x = { pkg };

const render = () => {
  return <div>
    {do {
      if(x){
      <span>A</span>
    } else {
      <span>B</span>
    }
    }}
  </div>
}