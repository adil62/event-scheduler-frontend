import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CreateEvent from "./pages/CreateEvent";
import Home from "./pages/Home";
import ProtectedRoute from "./components/shared/ProtectedRoute";
import LoginRoute from "./components/shared/LoginRoute";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <LoginRoute exact path="/" component={Login} />
        <LoginRoute exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <ProtectedRoute path="/home" component={Home} />
        <ProtectedRoute path="/create-event" component={CreateEvent} />
      </Switch>
    </Router>
  );
}

export default App;
