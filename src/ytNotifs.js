const parse = new (require("rss-parser"))();
const db = require('quick.db')
module.exports = async (options) => {
  if (typeof options !== 'object') return;
  if (!options.interval) {
    options.interval = 10000;
  }
  if (typeof options.interval !== 'number') {
    throw new TypeError('Simply-rjs Error: interval oarameter must be an integer')
  }
  if (!options.ytChIds || !options.ytChUrls) {
    throw new Error('Simply-rjs Error: youtube channel ids/urls is a required parameter')
  }
  if (!Array.isArray(options.ytChIds) || !Array.isArray(options.ytChUrls)) {
    throw new TypeError('Simply-rjs Error: youtube channel ids/urls must be an array')
  }
  //wip, don't use
}