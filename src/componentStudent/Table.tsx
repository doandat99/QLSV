import React from "react";
import { Table } from "antd";
import { Button, Modal } from "antd";
import EditFormValues from "./EditFormValue";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
type Props = {
  data: object[];
  deleteStudent: (id: string) => void;
  editStudent: (student: object) => void;
};
class Tables extends React.Component<Props> {
  state = { visible: false, student: {} };
  delete(id: string) {
    this.props.deleteStudent(id);
  }
  showModal = (student: object) => {
    this.setState({
      visible: true,
      student: student,
    });
  };

  handleOk = () => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const columns: any[] = [
      {
        title: "Mã sinh viên",
        dataIndex: "studentcode",
        key: "studentode",
      },
      {
        title: "Tên sinh viên",
        dataIndex: "studentname",
        key: "studentname",
      },
      {
        title: "Ngày sinh",
        dataIndex: "date",
        key: "date",
      },
      {
        title: "Giới tính",
        dataIndex: "gender",
        key: "gender",
      },
      {
        title: "Địa chỉ",
        dataIndex: "address",
        key: "address",
      },
      {
        title: "Action",
        key: "action",
        render: (text: string, record: any) => (
          <span>
            <Button type="link" onClick={() => this.showModal(record)}>
              <EditOutlined />
              Update
            </Button>
            <Modal
              title="Cập nhật sinh viên"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              footer={null}
            >
              <EditFormValues
                data={this.state.student}
                editData={this.props.editStudent}
                handleOk={this.handleOk}
              />
            </Modal>
            <Button onClick={() => this.delete(record.id)} type="link">
              <DeleteOutlined />
              Delete
            </Button>
          </span>
        ),
      },
    ];
    // const data = [
    //   {
    //     code: '123',
    //     username: "dat",
    //     date: "23061999",
    //     gender: "nam",
    //     address: "Hanoi",
    //   },
    // ];
    return <Table columns={columns} dataSource={this.props.data} />;
  }
}
export default Tables;
