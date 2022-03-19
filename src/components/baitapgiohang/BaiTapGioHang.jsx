import React, { Component } from "react";
import ModalGioHang from "./ModalGioHang";
import DanhSachSanPham from "./DanhSachSanPham";
// import phoneData from "../../data/phoneData.json";
import  {dataBaiTapGioHang}  from "../../data/dataDT.js";
export default class BaiTapGioHang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gioHang: [],
    };
  }

  tangGiam = (maSP) => {
    let realmaSP = maSP > 0 ? maSP : maSP * -1;
    let gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === realmaSP);
    maSP > 0
      ? (gioHangCapNhat[index].soLuong += 1)
      : gioHangCapNhat[index].soLuong > 1
      ? (gioHangCapNhat[index].soLuong -= 1)
      : gioHangCapNhat.splice(index, 1);

    this.setState({ gioHang: gioHangCapNhat });
  };

  deleteItem = (maSP) => {
    let gioHangCapNhat = this.state.gioHang.filter((sp) => sp.maSP !== maSP);
    this.setState({ gioHang: gioHangCapNhat });
  };

  themGioHang = (sanPhamChon) => {
    let spGioHang = {
      maSP: sanPhamChon.id,
      tenSP: sanPhamChon.name,
      giaBan: sanPhamChon.price,
      hinhAnh: sanPhamChon.thumbnail_url,
      soLuong: 1,
    };
    let gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === spGioHang.maSP);

    index !== -1
      ? (gioHangCapNhat[index].soLuong += 1)
      : gioHangCapNhat.push(spGioHang);
    this.setState({ gioHang: gioHangCapNhat });
  };

  render() {
    let tongSoLuong = this.state.gioHang.reduce((tongSoLuong, spGH, index) => {
      return (tongSoLuong += spGH.soLuong);
    }, 0);
    return (
      <div className="container">
        <h1 className="text-center text-primary">Bài Tập Giỏ Hàng </h1>
        <ModalGioHang
          gioHang={this.state.gioHang}
          tongSoLuong={tongSoLuong}
          deleteItem={this.deleteItem}
          tangGiam={this.tangGiam}
        />
        <DanhSachSanPham
          mangSanPham={dataBaiTapGioHang}
          themGioHang={this.themGioHang}
        />
      </div>
    );
  }
}
