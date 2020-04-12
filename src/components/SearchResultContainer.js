import React, { Component } from "react";
import Search from "./Search";
import SearchResultCard from "./SearchResultCard";
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
      this.setState({
        search: event.target.value.toLowerCase()
      })
  }

  sortResults = (event) => {
    event.preventDefault();
    this.setState({results: this.state.results.sort()}) 
  }

  render() {
    let filteredEmployees = this.state.results.filter(
      (employee) => {
        return employee.name.first.toLowerCase().includes(this.state.search)
      })
    return (
      <div>
        <Search
          handleSort={this.sortResults}
          handleInputChange={this.handleInputChange}
          search={this.state.search}/>
        <SearchResultCard results={filteredEmployees} />
      </div>
    );
  }
}

export default SearchResultContainer;