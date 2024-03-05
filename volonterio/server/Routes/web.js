let express = require('express');
let app = express();
const router = express.Router();

router.get('/', function(req, res) {
  res.send('hello world');
});

//registry
router.get('/registry', function(req, res) {
});

router.post('/registry', function(req, res) {

});

router.get('/login', function(req, res) {
});

router.post('/login', function(req, res) {

});

module.exports = router;
