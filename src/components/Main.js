import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from './categories/Homepage';
import Roster from './categories/Roster';

class Main extends Component {

  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Homepage}></Route>
          <Route path='/people' component={Roster} />
          <Route path='/films' component={Roster} />
          <Route path='/starships' component={Roster} />
          <Route path='/species' component={Roster} />
          <Route path='/planets' component={Roster} />
          <Route path='/vehicles' component={Roster} />
        </Switch>
      </main>
    );
  }
}

export default Main;
