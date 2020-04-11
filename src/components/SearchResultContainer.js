import React, { Component } from "react";
import SearchResultCard from "./SearchResultCard";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: []
  };

  componentDidMount() {
    this.searchEmployee();
  }

  searchEmployee = () => {
    API.getRandomUser()
      .then(data => {
        this.setState({ results: data.data.results })
      })
      .catch(err => console.log(err));
  };

//   handleInputChange = event => {
//     const name = event.target.name;
//     const value = event.target.value;
//     this.setState({
//       [name]: value
//     });
//   };

  // When the form is submitted, search the Giphy API for `this.state.search`
//   handleFormSubmit = event => {
//     event.preventDefault();
//     this.searchGiphy(this.state.search);
//   };

  render() {
    return (
      <div>
        {/* <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        /> */}
        <SearchResultCard results={this.state.results} />
      </div>
    );
  }
}

export default SearchResultContainer;

