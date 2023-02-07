'use strict';

const ages = persons => {
  const result = {};
  let live = 0;
  for (const value in persons) {
    let num = [];
    let data = persons[value];
    for (const years in data) {
      num.push(data[years]);
    }
    live = num[1] - num[0];
    
  }
};

const asa = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};

ages(asa);
module.exports = { ages };
