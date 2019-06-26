//read a file

const fs = require('fs');
const { join } = require('path');

fs.readFile(join(__dirname, './files/0.txt'), { encoding: 'utf8' }, (err, data) => {
  if(err) throw err;
  console.log(data);
});
    
// rename a file

fs.rename('./files/test.txt', './files/0.txt', err => {
  if(err) throw err;
  console.log('success');
});


