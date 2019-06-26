const fs = require('fs');

const { getAnimal, createFiles } = require('./createFiles');

describe('create files', () => {
  afterEach(done => {
    fs.readdir('./fixtures', (err, files => {
      if(files.length === 0) done();
      let deleteSoFar = 0;
      files.forEach(file => {
        fs.unlink(`./fixtures/${file}`, () => {
          deleteSoFar += 1;
          if(deleteSoFar === files.length) done();
        });
      });
    }));
  });
  it('can get a randdom animal species', () => {
    const animal = getAnimal();
    expect(animal).toEqual(expect.any(String));
  });

  it('can write a bunch of files with animals in them', done => {
    createFiles('./fixtures', 100, err => {
      expect(err).toBeFalsy();

      fs.readdir('./fixtures', { encoding: 'utf8' }, (err, files) => {
        expect(files).toHaveLength(100);
        done();
      });
    });
  });
});

