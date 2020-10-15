window._ = require('lodash');

require("./dom.check");

const { Wallet } = require('./typescript/wallet');

Wallet.init(window);