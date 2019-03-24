import React, { Component } from "react";

class Details extends Component {
  state = {
    item: {},
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch(`https://swapi.co/api${this.props.match.url}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          item: data
        });
      });
  }
  render() {
    const { item } = this.state;
    console.log(item);

    return (
      <div>
        <ul>
          {Object.entries(item).map(
            ([key, value]) =>
              typeof value === "string" && (
                <li key={key}>
                  <span
                    style={{ textDecoration: "underline", marginRight: 10 }}
                  >
                    {key}
                  </span>
                  {value}
                </li>
              )
          )}
        </ul>
      </div>
    );
  }
}
export default Details;
