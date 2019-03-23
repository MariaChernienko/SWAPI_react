import React, { Component } from 'react';

class People extends Component {
  state = {
    people: [],
    loading: false
  }
  componentDidMount() {
    this.setState({ loading: true });
    fetch('https://swapi.co/api/people/')
      .then(response => response.json())
      .then(data => {
        this.setState({
          people: data.results,
          loading: false
        });
      })
  }
  render() {
    const { people, loading } = this.state;
    return (
      <div>
        <ul>
        <h4>People</h4>
        {loading && "Loading..."}
          {people.map((person, i) => 
            <li 
              key={i} 
              style={{
                display:'inline-block', 
                marginRight:10, 
                border:"1px solid black"
              }}>
                {person.name}
            </li>
          )}
        </ul>
      </div>
      
    )
  }
}
export default People;