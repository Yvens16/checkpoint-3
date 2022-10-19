const { db } = require("../../../db")


module.exports = (req, res) => {
  // your code here !
  const { title, genre, picture, artist } = req.body;

    db
    .query("INSERT INTO album (title, genre, picture, artist) VALUES (?, ?, ?, ?)",
    [title, genre, picture, artist])
    .then(([result])=>{
        res.status(201).json({ title: title, genre: genre, picture: picture, artist: artist, id: result.insertId});
    //     res.location(`/album/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
        res.status(500).json(`Error in postAlbum ${err}`);
    });
};
