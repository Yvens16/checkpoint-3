const { db } = require('../../../db');

module.exports = (req, res) => {
  // your code here !
  const id = parseInt(req.params.id);
  db.query(`SELECT * FROM album WHERE id = ?`, [id])
    .then(([results]) => {
        console.log(results, "RESULTSSSSSSSSS");
      if (results.length === 0) {
        res.status(404);
      }
      res.json(results[0]);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving from database');
    });
};
