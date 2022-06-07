import { Table } from "antd";
import React from "react";
import { Button, Modal } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import EditStudent from "../StudentClass/EditStudent";
type Props = {
  data: object[];
  deleteStudent: (id: number) => void;
  editStudent: (student: object) => void;
};
class Tables extends React.Component<Props> {
  state = {
    visible: false,
    student: {},
  };
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
  delete = (id: number) => {
    this.props.deleteStudent(id);
  };
  render() {
    const colums: any[] = [
      {
        title: "Mã sinh viên",
        dataIndex: "studentcode",
        key: "studentcode",
      },
      {
        title: "Mã lớp",
        dataIndex: "classcode",
        key: "classcode",
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
              <EditStudent
                data={this.state.student}
                handleOk={this.handleOk}
                editData={this.props.editStudent}
              />
            </Modal>
            <Button type="link" onClick={() => this.delete(record.id)}>
              <DeleteOutlined />
              Delete
            </Button>
          </span>
        ),
      },
    ];
    return <Table columns={colums} dataSource={this.props.data} />;
  }
}
export default Tables;
