const fs = require('fs');
const { join } = require('path');

describe('read a file', () => {
  it('will read file', done => {
    fs.readFile(join(__dirname, './files/0.txt'), { encoding: 'utf8' }, (err, data) => {
      done();
    });
  });
});

// describe('rename file', () => {
//   it('can rename file', done => {
//     fs.rename('./files/0.txt', './files/test.txt', err => {
//       if(err) console.log(err);
//       done;
//     });
//   });
// });
