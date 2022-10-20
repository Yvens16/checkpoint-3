const { sqlDb } = require('../../db');

const getAlbum = (req, res) => {
  sqlDb.query('select * from album').then(([result]) => {
    res.json(result);
  });
};

module.exports = {
  getAlbum,
};
