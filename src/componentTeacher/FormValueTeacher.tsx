import React from "react";
import moment from "moment";
import { Form, Input, Radio, DatePicker, Button, Select } from "antd";
import { FormComponentProps } from "antd/lib/form";
const { Option } = Select;
interface UserFormProps extends FormComponentProps {
  addData: (teacher: object) => void;
  handleOk: () => void;
}
class FormValue extends React.Component<UserFormProps, any> {
  state = {
    valueRadio: "",
    valueSelect: "",
  };
  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const dataForm = {
          id: new Date().getTime().toString(),
          teachercode: values.teachercode,
          teachername: values.teachername,
          gender: values.gender,
          date: moment(values.date._d).format("DD/MM/YYYY"),
          subject: values.subject,
        };
        this.props.addData(dataForm);
      }
      this.props.handleOk();
    });
    this.props.form.resetFields();
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
        <Form.Item label="Mã giáo viên">
          {getFieldDecorator("teachercode", {
            rules: [
              {
                required: true,
                message: "Please confirm your code!",
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Tên giáo viên">
          {getFieldDecorator("teachername", {
            rules: [
              {
                required: true,
                message: "Please confirm your username!",
              },
            ],
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
          })(
            <Radio.Group
              onChange={(value) => this.setState({ valueRadio: value })}
              value={this.state.valueRadio}
            >
              <Radio value={"nam"}>Nam</Radio>
              <Radio value={"nữ"}>Nữ</Radio>
              <Radio value={"khác"}>Khác</Radio>
            </Radio.Group>
          )}
        </Form.Item>
        <Form.Item label="Bộ môn giảng dạy">
          {getFieldDecorator("subject", {
            rules: [
              {
                required: true,
                message: "Please confirm your subject!",
              },
            ],
          })(
            <Select
              defaultValue="Lập trình căn bản"
              onChange={(value: string) =>
                this.setState({ valueSelect: value })
              }
            >
              <Option value="Lập trình căn bản">Lập trình căn bản</Option>
              <Option value="Nhập môn lập trình Web">
                Nhập môn lập trình web
              </Option>
              <Option value="Phân tích thiết kế hệ thống">
                Phân tích thiết kế hệ thống
              </Option>
              <Option value="Thiết kế đồ họa 3D">Thiết kế đồ họa 3D</Option>
            </Select>
          )}
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Thêm giáo viên
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
const FormValueTeacher = Form.create<UserFormProps>({})(FormValue);
export default FormValueTeacher;
