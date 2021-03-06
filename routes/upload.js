var express = require('express');
var router = express.Router();
var multer = require('multer');
var storage = multer.diskStorage({
  destination: function(req, res, cb){
    cb(null, 'public/uploads')
  },
  filename: function(req, file, cb){
    cb(null, file.originalname)
  }
});
var upload = multer({ storage: storage });

router.get('/', function(req, res, next){
  res.render('index', {title: 'Express'})
});

router.post('/', upload.single('selected_file'), function(req,res){
  res.send('File upload sucessfully.');
});

module.exports = router;
