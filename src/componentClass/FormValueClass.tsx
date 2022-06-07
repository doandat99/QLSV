import React from "react";
import { Form, Input, Button } from "antd";
import { FormComponentProps } from "antd/lib/form";
interface UserFormProps extends FormComponentProps {
  addData: (student: object) => void;
  handleOk: () => void;
}
class FormValue extends React.Component<UserFormProps, any> {
  state = {
    values: "",
  };
  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const dataForm = {
          id: new Date().getTime().toString(),
          classcode: values.classcode,
          classname: values.classname,
        };
        this.props.addData(dataForm);
        this.props.handleOk();
      }
      this.props.form.resetFields();
    });
  };
  render() {
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
        <Form.Item label="Mã lớp">
          {getFieldDecorator("classcode", {
            rules: [
              {
                required: true,
                message: "Please confirm your classcode!",
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Tên lớp">
          {getFieldDecorator("classname", {
            rules: [
              {
                required: true,
                message: "Please confirm your classname!",
              },
            ],
          })(<Input />)}
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Thêm lớp
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
const FormValues = Form.create<UserFormProps>({})(FormValue);
export default FormValues;
