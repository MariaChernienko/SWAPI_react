import React, { Component } from 'react';

class Vehicles extends Component {
  state = {
    vehicles: [],
    loading: false
  }
  componentDidMount() {
    this.setState({ loading: true });
    fetch('https://swapi.co/api/vehicles/')
      .then(response => response.json())
      .then(data => {
        this.setState({
          vehicles: data.results,
          loading: false
        });
      })
  }
  render() {
    const { vehicles, loading } = this.state;
    return (
      <div>
        <ul>
          <h4>Vehicles</h4>
          {loading && "Loading..."}
          {vehicles.map((vehicle, i) => 
            <li 
              key={i} 
              style={{
                display:'inline-block', 
                marginRight:10, 
                border:"1px solid black"
              }}>
                {vehicle.name}
            </li>
          )}
        </ul>
      </div>
      
    )
  }
}
export default Vehicles;