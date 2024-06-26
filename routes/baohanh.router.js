var express = require('express');
var router = express.Router();
var checkLogin = require('../middlewares/validation');
var baoHanhCtrl = require('../controllers/baohanh.controller');


// Vào trang home theo địa chỉ '/'
router.get('/',checkLogin.checkLogin,baoHanhCtrl.home);
router.get('/chi-tiet/:id',checkLogin.checkLogin,baoHanhCtrl.chitiet);
router.post('/chi-tiet/:id',checkLogin.checkLogin,baoHanhCtrl.updateStatus);

module.exports = router;