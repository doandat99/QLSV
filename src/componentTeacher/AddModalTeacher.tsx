import React from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Modal, Button } from "antd";
import FormValueTeacher from "./FormValueTeacher";
type Props = {
  addData: (teacher: object) => void;
};
class AddModalTeacher extends React.Component<Props> {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
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
    return (
      <div>
        <Button
          type="primary"
          onClick={this.showModal}
          style={{ marginBottom: "2em" }}
        >
          <PlusCircleOutlined />
          Thêm giáo viên
        </Button>
        <Modal
          title="Thêm giao viên mới"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
          <FormValueTeacher addData={this.props.addData} handleOk={this.handleOk} />
        </Modal>
      </div>
    );
  }
}
export default AddModalTeacher;