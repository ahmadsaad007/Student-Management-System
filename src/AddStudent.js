import React from "react";

class AddStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      location: "",
      address: "",
      eng: "",
      math: "",
      science: "",
      computers: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    alert("A form was submitted with firstName: " + this.state.email);
    event.preventDefault();
  }
  render() {
    return (
      <div className="add-container">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Enter First Name:</label>
          </div>
          <div>
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <label>Enter Last Name:</label>
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <label>Enter email:</label>
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <label>Enter Location:</label>
          </div>
          <div>
            <input
              type="text"
              name="location"
              value={this.state.location}
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <label>Enter Phone:</label>
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <label>Enter Address:</label>
          </div>
          <div>
            <input
              type="text"
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
            ></input>
          </div>

          <div>
            <label>Enter Marks in English:</label>
          </div>
          <div>
            <input
              type="text"
              name="eng"
              value={this.state.eng}
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <label>Enter Marks in Math:</label>
          </div>
          <div>
            <input
              type="text"
              name="math"
              value={this.state.math}
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <label>Enter Marks in Science:</label>
          </div>
          <div>
            <input
              type="text"
              name="science"
              value={this.state.science}
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <label>Enter Marks in Computers:</label>
          </div>
          <div>
            <input
              type="text"
              name="computers"
              value={this.state.computers}
              onChange={this.handleChange}
            ></input>
          </div>

          <div>
            <button type="submit">SUBMIT</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddStudent;
