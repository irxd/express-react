constexpress = require('express');
constrouter = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  constusers = [
    {
      id: 1,
  	  username: "express"
    },
    {
      id: 2,
  	  username: "react"
    }
  ]
  res.send(users);
});

module.exports = router;
