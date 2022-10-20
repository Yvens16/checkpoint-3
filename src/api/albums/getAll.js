const { sqldb } = require('../../../db');
module.exports = (req, res) => {
  // your code here !
  sqldb.query('SELECT * FROM album').then(([allAlbum]) => res.json(allAlbum));
};
