import React from "react";
import { Layout, message } from "antd";
import AddModal from "./AddModal";
import Tables from "./TableClass";
const { Header, Content } = Layout;

class MainClass extends React.Component {
  state = {
    dataSource: [],
  };
  componentDidMount() {
    const dataSource = localStorage.getItem("listClass");
    const dataStudent = dataSource ? JSON.parse(dataSource) : [];
    this.setState({ dataSource: dataStudent });
  }
  handleAdd = (classname: object) => {
    const dataSource: object[] = [...this.state.dataSource];
    dataSource.push(classname);
    this.setState({ dataSource });
    localStorage.setItem("listClass", JSON.stringify(dataSource));
  };
  handleDelte = (id: string) => {
    const classname: object[] = [...this.state.dataSource];
    const dataSource = classname.filter((student: any) => student.id !== id);
    this.setState({ dataSource });
    message.success("Xóa thành công");
    localStorage.setItem("listClass", JSON.stringify(dataSource));
  };
  handleEdit = (classname: any) => {
    const dataSource: object[] = [...this.state.dataSource];
    const name = dataSource.findIndex(
      (object: any) => object.id === classname.id
    );
    dataSource.splice(name, 1, classname);
    this.setState({ dataSource });
    message.success("Cập nhật thành công");
    localStorage.setItem("listClass", JSON.stringify(dataSource));
  };
  render() {
    return (
      <Layout>
        <Header>
          <h1>Danh sách lớp</h1>
        </Header>
        <Content>
          <AddModal
            addData={(classname: object) => this.handleAdd(classname)}
          />
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
export default MainClass;
