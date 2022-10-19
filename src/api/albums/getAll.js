const database = require('../../database');

module.exports = (_, res) => {
  database
    .query(
      `
  select * from album
  `
    )
    .then(([albums]) => {
      res.status(200).json(albums);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error in getAll album query');
    });
};
