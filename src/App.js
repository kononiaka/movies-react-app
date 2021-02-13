import { Redirect, Route, Switch } from "react-router-dom";
import Movies from "./components/Movies";
import MovieForm from "./components/MovieForm";
import Customers from "./components/common/Customers";
import Rentals from "./components/common/Rentals";
import NotFound from "./components/common/NotFound";
import NavBar from "./components/common/NavBar";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import "./App.css";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <main className="container">
        <Switch>
          <Route path="/login" component={LoginForm}></Route>
          <Route path="/register" component={RegisterForm}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/movies/:id" component={MovieForm}></Route>
          <Route path="/movies" component={Movies}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" to="/movies"></Redirect>
          <Redirect to="/not-found"></Redirect>
        </Switch>
      </main>
    </>
  );
}

export default App;
