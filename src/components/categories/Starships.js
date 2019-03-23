import React, { Component } from 'react';

class Starships extends Component {
  state = {
    starships: [],
    loading: false,
  }
  componentDidMount() {
    this.setState({ loading: true });
    fetch('https://swapi.co/api/films/')
      .then(response => response.json())
      .then(data => {
        this.setState({
          starships: data.results,
          loading: false
        });
      })
  }
  render() {
    const { starships, loading } = this.state;
    return (
      <div>
        <ul>
          <h4>Starships</h4>
          {loading && "Loading..."}
          {starships.map((ship, i) => 
            <li 
              key={i} 
              style={{
                display:'inline-block', 
                marginRight:10, 
                border:"1px solid black"
              }}>
                {ship.title}
            </li>
          )}
        </ul>
      </div>
      
    )
  }
}
export default Starships;