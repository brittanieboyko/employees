import React, { Component } from "react";
import Search from "./Search";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: []
  };

  componentDidMount() {
    API.getRandomUser()
      .then(data => { this.setState({ results: data.data.results })})
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    event.preventDefault();
    if (event.target.name === "search") {
      const searchTerm = event.target.value.toLowerCase();
      this.setState({
        search: searchTerm
      })
    }
  }

  sortResults = (event) => {
    event.preventDefault();
    this.setState({results: this.state.results.sort()}) 
  }

  render() {
    let filteredEmployees = this.state.results.filter(
      (employee) => {
        return employee.name.first.toLowerCase().includes(this.state.search.toLowerCase());
      })
    return (
      <div>
        <Search
          handleSort={this.sortResults}
          handleInputChange={this.handleInputChange}
          search={this.state.search}
          results={filteredEmployees}/>
      </div>
    );
  }
}

export default SearchResultContainer;