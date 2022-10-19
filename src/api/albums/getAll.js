const { albumKeys } = require("../../../test/testsData");
const { mydb } = require("../../../db");

module.exports =(_, res) => {
  // your code here !
  mydb
  .query('SELECT * FROM album')
    .then(([result])=>{
        res.json({result})
})
.catch((err) => {
    res.status(500).send(err)
});

};
