const fs = require('fs');

const readDirecotry = (directory, callback) => {
  fs.readdir(directory, (err, files) => {
    callback(err, files);
  });
};

const rename = (path, newName, callback) => {
  fs.rename(path, newName, err => {
    callback(err);
  });
};

const getModifiedTime = (path, callback) => {
  fs.stat(path, (err, stats) => {
    callback(err, stats && stats.mtime.toISOString());
  });
};

module.exports = {
  readDirecotry,
  rename,
  getModifiedTime
};
