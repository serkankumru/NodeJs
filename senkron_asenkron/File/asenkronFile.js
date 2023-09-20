'use strict';

const fs = require('fs');

fs.readFile('dosya.txt', 'utf-8', function (err, data) {

  if (err) throw err;

  console.log(data);

});

console.log('Dosya okundu');