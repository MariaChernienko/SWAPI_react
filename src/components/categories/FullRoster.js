import React, { Component } from "react";
import { Link } from "react-router-dom";

import Pagination from "./Pagination";

class FullRoster extends Component {
  state = {
    roster: [],
    loading: false,
    activePage: 1,
    nextPage: "",
    prevPage: "",
    count: null
  };

  fetchData(somepath) {
    this.setState({ loading: true });
    fetch(`https://swapi.co/api${somepath}/?page=${this.state.activePage}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          roster: data.results,
          loading: false,
          count: data.count
        });
      });
  }

  componentDidMount() {
    this.fetchData(this.props.match.path);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.path !== prevProps.match.path) {
      this.fetchData(this.props.match.path);
    }
  }

  handleButtonClick = page => {
    this.setState({ activePage: page });
    this.fetchData(this.props.match.path);
  };

  render() {
    const { roster, loading, activePage, count } = this.state;

    return (
      <div>
        <ul>
          {loading
            ? "Loading..."
            : roster.map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: "inline-block",
                    marginRight: 10,
                    border: "1px solid black"
                  }}
                >
                  <Link to={`${this.props.match.path}/${i + 1}`}>
                    {item.name ? item.name : item.title}
                  </Link>
                </li>
              ))}
        </ul>

        {loading ? (
          ""
        ) : (
          <Pagination
            activePage={activePage}
            count={count}
            handleButtonClick={this.handleButtonClick}
          />
        )}
      </div>
    );
  }
}
export default FullRoster;
