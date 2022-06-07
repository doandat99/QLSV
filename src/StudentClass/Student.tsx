import React from "react";
import Tables from "../StudentClass/Table";
class Student extends React.Component {
  state = {
    data: [],
  };
  componentDidMount() {
    const dataStudent = localStorage.getItem("studentclass");
    const dataSource = dataStudent ? JSON.parse(dataStudent) : [];
    this.setState({ data: dataSource });
  }
  setStudent = () => {
    const student = this.getStudent();
    const classname = this.getClass();
    // lấy mã sinh viên và mã lớp từ bảng sinh viên và bảng lớp
    let id = 0;
    const arr: object[] = [];
    student.forEach((itemstudent: any) => {
      classname.forEach((item: any) => {
        const data = {
          id: id++,
          studentcode: itemstudent.studentcode,
          classcode: item.classcode,
        };
        arr.push(data);
      });
    });
    this.setState({ data: arr });
    localStorage.setItem("studentclass", JSON.stringify(arr));
  };
  // xóa sinh viên trong lớp
  handleDelete = (id: number) => {
    const student: object[] = [...this.state.data];
    const dataStudent = student.filter((item: any) => item.id !== id);
    dataStudent.forEach((item: any, index: number) => {
      item.id = index + 1;
    });
    this.setState({ data: dataStudent });
    localStorage.setItem("studentclass", JSON.stringify(dataStudent));
  };
  handleEdit = (student: object) => {};
  //lấy bảng sinh viên
  getStudent = () => {
    const data = localStorage.getItem("listStudent");
    const dataStudent = data ? JSON.parse(data) : [];

    return dataStudent;
  };
  //lấy bảng giáo viên
  getClass = () => {
    const data = localStorage.getItem("listClass");
    const dataClass = data ? JSON.parse(data) : [];
    return dataClass;
  };
  render() {
    return (
      <Tables
        data={this.state.data}
        deleteStudent={this.handleDelete}
        editStudent={this.handleEdit}
      />
    );
  }
}
export default Student;
