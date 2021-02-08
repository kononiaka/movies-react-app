import React, { Component } from "react";
import Input from "./Input";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  //   username = React.createRef();

  //   componentDidMount() {
  //     this.username.current.focus();
  //   }

  validate = () => {
    const errors = {};

    const { account } = this.state;
    if (account.username.trim() === "") {
      errors.username = "Username is required";
    }

    if (account.password.trim() === "") {
      errors.password = "Password is required";
    }

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // const username = this.username.current.value;
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    console.log("Submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account, errors } = this.state;

    return (
      <>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            value={account.username}
            name="username"
            label="Username"
            error={errors.username}
            onChange={this.handleChange}
          ></Input>
          <Input
            value={account.password}
            name="password"
            label="Password"
            error={errors.password}
            onChange={this.handleChange}
          ></Input>

          <button className="btn btn-primary">Login</button>
        </form>
      </>
    );
  }
}

export default LoginForm;
