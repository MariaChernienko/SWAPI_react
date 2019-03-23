import React, { Component } from 'react';

class Species extends Component {
  state = {
    species: [],
    loading: false
  }
  componentDidMount() {
    this.setState({ loading: true });
    fetch('https://swapi.co/api/species/')
      .then(response => response.json())
      .then(data => {
        this.setState({
          species: data.results,
          loading: false
        });
      })
  }
  render() {
    const { species, loading } = this.state;
    return (
      <div>
        <ul>
        <h4>Species</h4>
        {loading && "Loading..."}
          {species.map((item, i) => 
            <li 
              key={i} 
              style={{
                display:'inline-block', 
                marginRight:10, 
                border:"1px solid black"
              }}>
                {item.name}
            </li>
          )}
        </ul>
      </div>
      
    )
  }
}
export default Species;