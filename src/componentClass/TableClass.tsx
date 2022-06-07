import React from "react";
import { Table } from "antd";
import { Button, Modal } from "antd";
import EditFormValues from "./EditFormValueClass";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
type Props = {
  data: object[];
  deleteStudent: (id: string) => void;
  editStudent: (classname: object) => void;
};
class Tables extends React.Component<Props> {
  state = { visible: false, class: {} };
  delete(id: string) {
    this.props.deleteStudent(id);
  }
  showModal = (classname: object) => {
    this.setState({
      visible: true,
      class: classname,
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
        title: "Mã lớp",
        dataIndex: "classcode",
        key: "classcode",
      },
      {
        title: "Tên lớp",
        dataIndex: "classname",
        key: "classname",
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
              title="Cập nhật lớp"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              footer={null}
            >
              <EditFormValues
                data={this.state.class}
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
