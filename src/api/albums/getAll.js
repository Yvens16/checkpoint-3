const { check3 } = require('../../bd');

module.exports = (req, res) => {
  check3
    .query(`SELECT * FROM album`)
    .then(([albums]) => {
      res.json({ albums });
    })
    .catch((err) => {
      res.status(500).send(`Error in getAlbum : ${err}`);
    });
};
