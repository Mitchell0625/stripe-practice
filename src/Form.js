import React, { Component } from "react";
import "./Form.css";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      address: "",
      city: "",
      st: "",
      zip: 0,
      amount: 5
    };
    this.handleCharge = this.handleCharge.bind(this);
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCharge = token => {
    const { name, amount } = this.state;
    let stripeToken = token;
    console.log("hit handleCharge", name, amount);
    axios
      .post("/card/payment", { name, amount, stripeToken })
      .then(resp => {
        console.log(resp);
      })
      .catch(console.log);
  };

  render() {
    return (
      <div className="form-outer">
        <div className="form-page">
          {/* <form onSubmit={this.handleCharge}> */}
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
        </div>
        {/* <button onClick={() => this.handleCharge()}>Submit</button> */}
        <StripeCheckout
          token={this.handleCharge}
          amount={this.state.amount}
          stripeKey="pk_test_85yS6yY0tZc3mAZgdIoLrZlk"
        />
      </div>
    );
  }
}
export default Form;
