import React, { Component } from "react";
import "./App.css";
import Form from "./Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>Stripe Practice</header>
        <Form />
      </div>
    );
  }
}

export default App;
