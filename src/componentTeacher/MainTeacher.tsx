import React from "react";
import { Layout, message } from "antd";
import AddModalTeacher from "./AddModalTeacher";
import TableTeacher from "./TableTeacher";
const { Header, Content } = Layout;
class MainTeacher extends React.Component {
  state = {
    dataSource: [],
  };
  componentDidMount() {
    const data = localStorage.getItem("listTeacher");
    const dataSource = data ? JSON.parse(data) : [];
    this.setState({ dataSource: dataSource });
  }
  handleAdd = (teacher: object) => {
    const dataSource: object[] = [...this.state.dataSource];
    dataSource.push(teacher);
    this.setState({ dataSource });
    localStorage.setItem("listTeacher", JSON.stringify(dataSource));
  };
  handleDelete = (id: string) => {
    const teacher: object[] = [...this.state.dataSource];
    const dataSource = teacher.filter((teacher: any) => teacher.id !== id);
    console.log(dataSource)
    this.setState({ dataSource });
    message.success("Xóa thành công");
    localStorage.setItem("listTeacher", JSON.stringify(dataSource));
  };
  handleEdit = (teacher: any) => {
    const dataSource: object[] = [...this.state.dataSource];
    const teachers = dataSource.findIndex(
      (object: any) => object.id === teacher.id
    );
    dataSource.splice(teachers, 1, teacher);
    this.setState({ dataSource });
    message.success("Cập nhật thành công");
    localStorage.setItem("listTeacher", JSON.stringify(dataSource));
  };
  render() {
    return (
      <Layout>
        <Header>
          <h1>Danh sách giáo viên</h1>
        </Header>
        <Content>
          <AddModalTeacher
            addData={(teacher: object) => this.handleAdd(teacher)}
          />
          <TableTeacher
            data={this.state.dataSource}
            deleteTeacher={this.handleDelete}
            editTeacher={this.handleEdit}
          />
        </Content>
      </Layout>
    );
  }
}
export default MainTeacher;
