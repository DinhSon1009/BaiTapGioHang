import React, { Component } from "react";
import { Modal, Button, Table } from "antd";

const { Column } = Table;

export default class ModalGioHang extends Component {
  state = { visible: false };

  render() {
    const { gioHang, tongSoLuong, deleteItem, tangGiam } = this.props;
    return (
      <div className="text-right">
        <Button
          type="primary"
          danger
          className="flex-right"
          style={{ marginBottom: 20 }}
          onClick={() => this.setState({ visible: true })}
        >
          Giỏ hàng ({tongSoLuong})
        </Button>
        <Modal
          title="Giỏ hàng"
          centered
          visible={this.state.visible}
          onOk={() => this.setState({ visible: false })}
          onCancel={() => this.setState({ visible: false })}
          width={1000}
        >
          <Table dataSource={[...gioHang]} rowKey="maSP">
            <Column title="Mã SP" dataIndex="maSP" key="Mã sản phẩm" />
            <Column
              title="Hình ảnh"
              dataIndex="hinhAnh"
              key="Hình ảnh"
              render={(hinhAnh) => (
                <img src={hinhAnh} alt="hinhanh" style={{ width: 100 }} />
              )}
            />
            <Column title="Tên" dataIndex="tenSP" key="Tên" />
            <Column
              title="Số lượng"
              dataIndex="soLuong"
              key="Số Lượng"
              width={170}
              render={(text, row) => (
                <>
                  <Button onClick={() => tangGiam(row["maSP"] * -1)}>-</Button>
                  {text}
                  <Button onClick={() => tangGiam(row["maSP"])}>+</Button>
                </>
              )}
            />
            <Column
              title="Đơn giá"
              dataIndex="giaBan"
              render={(giaBan) => giaBan.toLocaleString()}
              key="Đơn giá"
            />
            <Column
              title="Thành tiền"
              key="Thành tiền"
              render={(text, row) =>
                (row["soLuong"] * row["giaBan"]).toLocaleString()
              }
            />
            <Column
              title="Xóa"
              key="Xóa"
              render={(text, row) => (
                <Button
                  danger
                  onClick={() => {
                    deleteItem(row["maSP"]);
                  }}
                >
                  Xóa
                </Button>
              )}
            />
          </Table>
        </Modal>
      </div>
    );
  }
}
