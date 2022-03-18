import React, { Component } from "react";
import { Card, Button } from "antd";

export default class SanPhamGioHang extends Component {
  render() {
    const { sanPham, themGioHang } = this.props;
    return (
      <div className="site-card-border-less-wrapper text-center">
        <Card bordered={true} style={{ width: 300 }}>
          <img src={sanPham.hinhAnh} alt="sanpham" />
          <p>{sanPham.tenSP}</p>
          <Button type="primary" onClick={() => themGioHang(sanPham)}>
            Thêm giỏ hàng
          </Button>
        </Card>
      </div>
    );
  }
}
