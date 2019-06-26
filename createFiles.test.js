const { getAnimal } = require('./createFiles');

describe('create files', => {
  it('can get a randdom animal species', () => {
    const animal =getAnimal();
  });
});

