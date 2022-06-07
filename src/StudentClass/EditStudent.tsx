import React from "react";
import { FormComponentProps } from "antd/lib/form";
import { Form, Input, Button } from "antd";
interface UserFormProps extends FormComponentProps {
  data: any;
  editData: (teacher: object) => void;
  handleOk: () => void;
}
class FormValue extends React.Component<UserFormProps> {
  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const dataForm = {};
        this.props.editData(dataForm);
      }
      this.props.handleOk();
    });
    this.props.form.resetFields();
  };
  render() {
    const data = this.props.data;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 16 },
        sm: { span: 12 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 4,
        },
        sm: {
          span: 10,
          offset: 9,
        },
      },
    };
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="Mã sinh viên">
          {getFieldDecorator("studentcode", {
            rules: [
              {
                required: true,
                message: "Please confirm your code!",
              },
            ],
            initialValue: data.studentcode,
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Mã lớp">
          {getFieldDecorator("classcode", {
            rules: [
              {
                required: true,
                message: "Please confirm your code!",
              },
            ],
            initialValue: data.classcode,
          })(<Input />)}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Cập nhật
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
const EditStudent=Form.create<UserFormProps>({})(FormValue)
export default EditStudent
