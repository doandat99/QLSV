import React from "react";
import Main from "./componentStudent/Main";
import MainTeacher from "./componentTeacher/MainTeacher";
import MainClass from "./componentClass/MainClass";
import Student from "./StudentClass/Student";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/danh-sach-sinh-vien" exact component={Main} />
          <Route path="/danh-sach-giao-vien" exact component={MainTeacher} />
          <Route path="/danh-sach-lop" exact component={MainClass} />
          <Route path="/quan-ly-sinh-vien-lop" exact component={Student} />
        </div>
      </Router>
    );
  }
}
export default App;
