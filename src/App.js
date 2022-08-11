import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route path="/register" >
          <Register/>
        </Route>
        <Route path="/dashboard">
          <Navbar/>
          <Dashboard/>
        </Route>
          
      </Switch>
    </BrowserRouter>
  );
}

export default App;
