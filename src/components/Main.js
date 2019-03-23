import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import People from './categories/People';
import Films from './categories/Films';
import Starship from './categories/Starships';
import Species from './categories/Species';
import Planets from './categories/Planets';
import Vehicles from './categories/Vehicles';

class Main extends Component {

  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/'><h1>This is Main block!</h1></Route>
          <Route path='/people' component={People} />
          <Route path='/films' component={Films} />
          <Route path='/starships' component={Starship} />
          <Route path='/species' component={Species} />
          <Route path='/planets' component={Planets} />
          <Route path='/vehicles' component={Vehicles} />
        </Switch>
      </main>
    );
  }
}

export default Main;
