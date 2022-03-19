import React, { Component } from "react";
import { Card, Button } from "antd";

export default class SanPhamGioHang extends Component {
  render() {
    const { themGioHang, sanPham } = this.props;
    const { thumbnail_url, name, price } = this.props.sanPham;

    return (
      <div className="site-card-border-less-wrapper text-center">
        <Card bordered={true} style={{ width: 300 }}>
          <img src={thumbnail_url} alt="sanpham" />
          <p className="text-primary">{name}</p>
          <p className="text-secondary">{price.toLocaleString()}</p>
          <Button type="primary" onClick={() => themGioHang(sanPham)}>
            Thêm giỏ hàng
          </Button>
        </Card>
      </div>
    );
  }
}
