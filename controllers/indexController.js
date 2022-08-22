const queryConnect = require("../database/db")

exports.indexHome = function(req, res) {
  res.json("Not Found")
}


exports.testSequilze = function(req,res) {
  queryConnect.query("SELECT * FROM test", function(err, result) {
    if (err) throw err;

    res.json({
      "data" : result
    })
  })
}