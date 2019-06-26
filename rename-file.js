const fs = require('fs');

const readDirecotry = (directory, callback) => {
  fs.readdir(directory, callback);
};

const rename = (path, newName, callback) => {
  fs.rename(path, newName, callback);
};

const getModifiedTime = (path, callback) => {
  fs.stat(path, (err, stats) => {
    callback(err, stats && stats.mtime.toISOString());
  });
};

const readFile = (path, callback) => {
  fs.readFile(path, { encoding: 'utf8' }, callback);
};

module.exports = {
  readDirecotry,
  rename,
  getModifiedTime,
  readFile
};
