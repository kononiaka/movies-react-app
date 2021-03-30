import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Movies from "./components/Movies";
import MovieForm from "./components/MovieForm";
import Customers from "./components/common/Customers";
import Rentals from "./components/common/Rentals";
import NotFound from "./components/common/NotFound";
import NavBar from "./components/common/NavBar";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Logout from "./components/common/Logout";
import auth from "./services/authService";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import ProtectedRoute from "./components/common/ProtectedRoute";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }
  render() {
    const { user } = this.state;
    return (
      <>
        <ToastContainer></ToastContainer>
        <NavBar user={user}></NavBar>
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm}></Route>
            <Route path="/logout" component={Logout}></Route>
            <Route path="/register" component={RegisterForm}></Route>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/rentals" component={Rentals}></Route>
            <ProtectedRoute
              path="/movies/:id"
              component={MovieForm}
            ></ProtectedRoute>
            <Route
              path="/movies"
              render={(props) => <Movies {...props} user={user} />}
            ></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect from="/" to="/movies"></Redirect>
            <Redirect to="/not-found"></Redirect>
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
