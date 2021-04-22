import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import ForgetPassword from "./Components/ForgetPassword";
import Login from "./Pages/index";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/forgot_password">
          <ForgetPassword />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
