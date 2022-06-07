import React from "react";
import { Layout, message } from "antd";
import AddModal from "./AddModal";
import Tables from "./Table";
const { Header, Content } = Layout;

class Main extends React.Component {
  state = {
    dataSource: [],
  };
  componentDidMount() {
    const dataSource = localStorage.getItem("listStudent");
    const dataStudent = dataSource ? JSON.parse(dataSource) : [];
    this.setState({ dataSource: dataStudent });
  }
  handleAdd = (student: object) => {
    const dataSource: object[] = [...this.state.dataSource];
    dataSource.push(student);
    this.setState({ dataSource });
    localStorage.setItem("listStudent", JSON.stringify(dataSource));
  };
  handleDelte = (id: string) => {
    const students: object[] = [...this.state.dataSource];
    const dataSource = students.filter((student: any) => student.id !== id);
    this.setState({ dataSource });
    message.success("Xóa thành công");
    localStorage.setItem("listStudent", JSON.stringify(dataSource));
  };
  handleEdit = (student: any) => {
    const dataSource: object[] = [...this.state.dataSource];
    const students = dataSource.findIndex(
      (object: any) => object.id === student.id
    );
    dataSource.splice(students, 1, student);
    this.setState({ dataSource });
    message.success("Cập nhật thành công");
    localStorage.setItem("listStudent", JSON.stringify(dataSource));
  };
  render() {
    return (
      <Layout>
        <Header>
          <h1>Danh sách sinh viên</h1>
        </Header>
        <Content>
          <AddModal addData={(student: object) => this.handleAdd(student)} />
          <Tables
            data={this.state.dataSource}
            deleteStudent={this.handleDelte}
            editStudent={this.handleEdit}
          />
        </Content>
      </Layout>
    );
  }
}
export default Main;
