import React, { Component } from 'react';

class Planets extends Component {
  state = {
    planets: [],
    loading: false
  }
  componentDidMount() {
    this.setState({ loading: true });
    fetch('https://swapi.co/api/planets/')
      .then(response => response.json())
      .then(data => {
        this.setState({
          planets: data.results,
          loading: false
        });
      })
  }
  render() {
    const { planets, loading } = this.state;
    return (
      <div>
        <ul>
        <h4>Planets</h4>
        {loading && "Loading..."}
          {planets.map((planet, i) => 
            <li 
              key={i} 
              style={{
                display:'inline-block', 
                marginRight:10, 
                border:"1px solid black"
              }}>
                {planet.name}
            </li>
          )}
        </ul>
      </div>
      
    )
  }
}
export default Planets;