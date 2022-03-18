import React, { Component } from "react";
import SanPhamGioHang from "./SanPhamGioHang";
import { Row, Col } from "antd";

export default class DanhSachSanPham extends Component {
  render() {
    const { mangSanPham,themGioHang } = this.props;
    return (
      <div>
        <Row>
          {mangSanPham.map((sanPham, index) => {
            return (
              <Col span={8} key={index}>
                <SanPhamGioHang sanPham={sanPham} themGioHang={themGioHang}/>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}
