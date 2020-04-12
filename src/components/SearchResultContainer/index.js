import React, { Component } from "react";
import Search from "../Search";
import SearchResultCard from "../SearchResultCard";
import API from "../../utils/API";
import "./style.css";

class SearchResultContainer extends Component {
  state = {
    sort: "",
    search: "",
    results: [],
  };

  componentDidMount() {
    API.getRandomUsers()
      .then((data) => {
        this.setState({ results: data.data.results });
      })
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      search: event.target.value.toLowerCase(),
    });
  };

  sortByNames = () => {
    const sortedEmployees = this.state.results.sort((a, b) => {
      if (b.name.first > a.name.first) {
        return -1;
      }
      if (a.name.first > b.name.first) {
        return 1;
      }
      return 0;
    });

    if (this.state.sort === "DESC") {
      sortedEmployees.reverse();
      this.setState({ sort: "ASC" });
    } else {
      this.setState({ sort: "DESC" });
    }
    this.setState({ results: sortedEmployees });
  };

  render() {
    let filteredEmployees = this.state.results.filter((employee) => {
      return employee.name.first.toLowerCase().includes(this.state.search);
    });

    return (
      <div>
        <Search
          handleInputChange={this.handleInputChange}
          search={this.state.search}
        />
        <table className="table table-responsive-lg">
          <thead className="thead-dark">
            <tr>
              <th scope="col"></th>
              <th scope="col">
                Name
                <span className="downArrow" onClick={this.sortByNames}></span>
              </th>
              <th scope="col">Email Address</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Date of Birth</th>
            </tr>
          </thead>
          <SearchResultCard results={filteredEmployees} />
        </table>
      </div>
    );
  }
}

export default SearchResultContainer;