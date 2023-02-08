'use strict';

const max = (matrix) => {
  let value = matrix[0][0];
  for (const row of matrix) {
    for (const number of row) {
      if (number > value) value = number;
    }
  }
  return value;
};

module.exports = { max };

