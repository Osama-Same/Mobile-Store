import React, { useState, useEffect} from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";
import Header from "./components/Header";
import Mobile from "./components/Mobile";
import NewMobile from "./components/NewMobile";
import UpdateMobile from "./components/UpdateMobile";
import Id from "./components/Id";
import axios from 'axios';
// functional component
const App = () => {
  
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Mobile}>
            <Header />
            <Mobile />
          </Route>
          <Route exact path="/NewMobile" component={NewMobile}>
            <Header />
            <NewMobile />
          </Route>
          <Route exact path={"/UpdateMobile/:mobile_id"} component={UpdateMobile}>
            <Header />
            <UpdateMobile />
          </Route>
          <Route exact path="/:id"component={Id}>
            <Header />
            <Id/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
/* 
// functional component
const App = () => {
  return (
    <div>
      <h1>HELLO WORLD</h1>
    </div>
  );
};
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>HELLO WORLD</h1>
      </div>
    );
  }
}
export default App;
*/
