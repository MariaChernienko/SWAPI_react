import React, { Component } from 'react';

class Films extends Component {
  state = {
    films: [],
    loading: false
  }
  componentDidMount() {
    this.setState({ loading: true });
    fetch('https://swapi.co/api/films/')
      .then(response => response.json())
      .then(data => {
        this.setState({
          films: data.results,
          loading: false
        });
      })
  }
  render() {
    const { films, loading } = this.state;
    return (
      <div>
        <ul>
          <h4>Films</h4>
          {loading && "Loading..."}
          {films.map((film, i) => 
            <li 
              key={i} 
              style={{
                display:'inline-block', 
                marginRight:10, 
                border:"1px solid black"
              }}>
                {film.title}
            </li>
          )}
        </ul>
      </div>
      
    )
  }
}
export default Films;