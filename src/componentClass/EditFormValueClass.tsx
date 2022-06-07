import React from "react";

import { Form, Input, Button } from "antd";
import { FormComponentProps } from "antd/lib/form";
interface UserFormProps extends FormComponentProps {
  data: any;
  editData: (student: object) => void;
  handleOk: () => void;
}
class FormValue extends React.Component<UserFormProps, any> {
  state = {
    values: "",
  };
  componentDidMount() {
    this.setState({ values: this.props.data.gender });
  }
  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const dataForm = {
          id: this.props.data.id,
          classcode: values.classcode,
          classname: values.classname,
        };
        this.props.editData(dataForm);
      }
      this.props.handleOk();
    });
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
        <Form.Item label="Mã lớp">
          {getFieldDecorator("classcode", {
            rules: [
              {
                required: true,
                message: "Please confirm your code!",
              },
            ],
            initialValue:data.classcode
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Tên lớp">
          {getFieldDecorator("classname", {
            rules: [
              {
                required: true,
                message: "Please confirm your username!",
              },
            ],
            initialValue:data.classname
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
const EditFormValues = Form.create<UserFormProps>({})(FormValue);
export default EditFormValues;
