const { db } = require('../../../db');

module.exports = (req, res) => {
  // your code here !
  const id = parseInt(req.params.id);
  let query = 'UPDATE album set ';
    const valuesArray = [];

  Object.keys(req.body).forEach((key, index) => {
    valuesArray.push(req.body[key]);
    if (index === Object.keys(req.body).length - 1) {
      query += `${key} = ?`;
    } else {
      query += `${key} = ?,`;
    }
  });
  query += ' WHERE id = ?';
  valuesArray.push(id);
  db.query(
    query,
   valuesArray
  )
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send('not found');
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error editing the album in database');
    });
};
