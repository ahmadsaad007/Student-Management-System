import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddStudent from "./AddStudent";
import Studentlist from "./studentList";
import StudentDetails from "./studentDetails";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { firstName: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      firstName: event.target.firstName,
      //lastName: event.target.lastName,
      // email: event.target.email,
    });
  }

  handleSubmit(event) {
    alert("A form was submitted with firstName: " + this.state.firstName);
    event.preventDefault();
  }

  render() {
    return (
      <div className="add-container">
        <div>
          <Router>
            <Route path="/addStudent" component={AddStudent}></Route>
            <Route path="/details/:id" component={StudentDetails}></Route>
            <Route path="/" component={Studentlist} exact></Route>
          </Router>
        </div>
      </div>
    );
  }
}
export default App;
