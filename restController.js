var express = require('express');
var router = express.Router();

router.get('/test', function(req ,res) {
   res.json({rspCode : '200', rspMsg: 'test'});
});

module.exports = router;
