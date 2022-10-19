const { db } = require("../../../db")

module.exports = (req, res) => {
  // your code here !
  const { title, youtube_url, id_album} = req.body;

    db
    .query("INSERT INTO track (title, youtube_url, id_album) VALUES (?, ?, ?)",
    [title, youtube_url, id_album])
    .then(([result])=>{
        res.location(`/track/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
        res.status(500).send(`Error in postTrack ${err}`);
    });
};
