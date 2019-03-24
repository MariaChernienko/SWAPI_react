import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import FullRoster from './FullRoster';
import Details from './Details';



class Roster extends Component {
  state = {
    page: 1,
  }
  

  render() {
    return (
      <div>
        <h1>{this.props.match.path}</h1>
       
        <Switch>
          <Route exact path={`${this.props.match.path}`} component={FullRoster}></Route>
          <Route path={`${this.props.match.path}/:number`} component={Details}></Route>
        </Switch>
        
      
      </div>
      
    )
  }
}
export default Roster;