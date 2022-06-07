import React from "react";
import { Table } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import EditFormValueTeacher from "./EditFormTeacher";
type Props = {
  data: object[];
  deleteTeacher: (id: string) => void;
  editTeacher: (teacher: object) => void;
};
class TableTeacher extends React.Component<Props> {
  state = {
    visible: false,
    teacher: {},
  };
  delete(id: string) {
    this.props.deleteTeacher(id);
  }
  showModal = (teacher: object) => {
    this.setState({
      visible: true,
      teacher: teacher,
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
        title: "Mã giáo viên",
        dataIndex: "teachercode",
        key: "teachercode",
      },
      {
        title: "Tên giáo viên",
        dataIndex: "teachername",
        key: "teachername",
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
        title: "Bộ môn giảng dạy",
        dataIndex: "subject",
        key: "subject",
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
              title="Cập nhật giáo viên"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              footer={null}
            >
              <EditFormValueTeacher
                data={this.state.teacher}
                handleOk={this.handleOk}
                editData={this.props.editTeacher}
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
    return <Table columns={columns} dataSource={this.props.data} />;
  }
}
export default TableTeacher;
