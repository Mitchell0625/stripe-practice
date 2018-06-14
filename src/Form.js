import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  state = {
    name: "",
    address: "",
    city: "",
    st: "",
    zip: 0
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="form-page">
        <form onSubmit={() => this.handleChange()}>
          <div className="form-text">
            <label>Name</label>
            <input
              placeholder="name"
              value={this.state.name}
              name="name"
              onChange={e => this.handleChange(e)}
              autoFocus
            />
          </div>
          <div className="form-text">
            <label>Address</label>
            <input
              placeholder="address"
              value={this.state.address}
              name="address"
              onChange={e => this.handleChange(e)}
            />
          </div>
          <div className="form-text">
            <label>City</label>
            <input
              placeholder="city"
              value={this.state.city}
              name="city"
              onChange={e => this.handleChange(e)}
            />
          </div>
          <div className="form-text">
            <label>State</label>
            <input
              placeholder="state"
              value={this.state.st}
              name="st"
              onChange={e => this.handleChange(e)}
            />
          </div>
          <div className="form-text">
            <label>Zipcode</label>
            <input
              placeholder="zipcode"
              value={this.state.zip}
              name="zip"
              onChange={e => this.handleChange(e)}
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default Form;
