const database = require('../../database');
module.exports = (_, res) => {
  database
    .query(
      `
  select * from track
  `
    )
    .then(([tracks]) => res.status(200).json(tracks))
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error in getAll track query');
    });
};
