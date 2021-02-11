import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "./pages/Auth";
import CreateEvent from "./pages/CreateEvent";
import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Auth} />
        <Route path="/home" component={Home} />
        <Route path="/create-event" component={CreateEvent} />
      </Switch>
    </Router>
  );
}

export default App;
