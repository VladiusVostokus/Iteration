'use strict';

const sum = (...args) => args.reduce((x1, x2) => x1 + x2, 0);

module.exports = { sum };
