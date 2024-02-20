const mongoose = require('mongoose');
const trangThai = [
  'Chờ Xác Nhận', 'Chờ Lấy Hàng', 'Chờ Giao Hàng', 'Đã Giao', 'Đã Hủy', 'Trả Hàng']
const donDatHangSchema = new mongoose.Schema({

  idSanpham: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SanPham' }],
  idGioHang: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'GioHang'
  },
  idShipper: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Shipper'
  },
 
  idNguoiMua: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account'
  },
  idPayment:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'thanhToan'
  },
  trangThai: {
    type: String, 
    enum: trangThai,
  },
  ThoiGian: Date.now,
  tongTien: Number,
  tienShip:Number,
  tongTien:Number,
}, {
  collection: 'DonDatHang_Table'
});

const DonDatHang = mongoose.model('DonDatHang', donDatHangSchema);

module.exports = DonDatHang;
