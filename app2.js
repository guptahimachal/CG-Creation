'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('imgTitles.json');
let articles = JSON.parse(rawdata);
console.table(articles);
