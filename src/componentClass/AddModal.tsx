import React from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Modal, Button } from "antd";
import FormValues from "./FormValueClass";
type Props = {
  addData: (classname: object) => void;
};
class AddModal extends React.Component<Props> {
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
          Thêm lớp
        </Button>
        <Modal
          title="Thêm lớp mới"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
          <FormValues addData={this.props.addData} handleOk={this.handleOk} />
        </Modal>
      </div>
    );
  }
}
export default AddModal;
