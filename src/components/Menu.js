import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
  state = {
    menu: [],
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://swapi.co/api/")
      .then(response => response.json())
      .then(data => {
        const dataArr = Object.entries(data).map(([key, value], i) => {
          return { id: i, name: key, link: value };
        })
        this.setState({
          menu: [...dataArr],
          loading: false
        });
      });
  }

  render() {
    const { menu, loading } = this.state;
    return (
      <div className="App">
        <h1>Hola</h1>
        {loading && "Loading..."}
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          {menu.map(menuItem => (
            <li key={menuItem.id}>
              <Link to={`/${menuItem.name}`}>{menuItem.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Menu;
