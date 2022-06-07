import React from "react";
import moment from "moment";
import { Form, Input, Radio, DatePicker, Button } from "antd";
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
          studentcode: values.studentcode,
          studentname: values.studentname,
          date: moment(values.date).format("DD/MM/YYYY"),
          gender: values.gender,
          address: values.address,
        };
        this.props.editData(dataForm);
      }
      this.props.handleOk();
    });
  };
  render() {
    const data = this.props.data;
    console.log(moment(data));
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
        <Form.Item label="Tên sinh viên">
          {getFieldDecorator("studentname", {
            rules: [
              {
                required: true,
                message: "Please confirm your username!",
              },
            ],
            initialValue: data.studentname,
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Ngày sinh">
          {getFieldDecorator("date", {
            rules: [
              {
                required: true,
                message: "Please confirm your date!",
              },
            ],
            initialValue: moment(data),
          })(<DatePicker placeholder="Ngày sinh" />)}
        </Form.Item>
        <Form.Item label="Giới tính">
          {getFieldDecorator("gender", {
            rules: [
              {
                required: true,
                message: "Please confirm your gender!",
              },
            ],
            initialValue: data.gender,
          })(
            <Radio.Group
              onChange={(e) => this.setState({ values: e.target.value })}
              value={this.state.values}
            >
              <Radio value={"nam"}>Nam</Radio>
              <Radio value={"nữ"}>Nữ</Radio>
              <Radio value={"khác"}>Khác</Radio>
            </Radio.Group>
          )}
        </Form.Item>
        <Form.Item label="Địa chỉ">
          {getFieldDecorator("address", {
            rules: [
              {
                required: true,
                message: "Please confirm your address!",
              },
            ],
            initialValue: data.address,
          })(<Input />)}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Cập nhật sinh viên
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
const EditFormValues = Form.create<UserFormProps>({})(FormValue);
export default EditFormValues;
