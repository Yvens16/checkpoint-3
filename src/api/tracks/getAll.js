const {trackKeys}= require("../../../test/testsData");
const { mydb } = require("../../../db");

 module.exports =(req, res) => {
  // your code here !
  mydb
  .query('SELECT * FROM track')
  .then(([result])=>{
      res.json({result})
})
.catch((err) => {
  res.status(500).send(err)
});
};
