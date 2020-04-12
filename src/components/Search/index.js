import React from "react";

function Search(props) {
  return (
      <form className="form-inline my-lg-0 d-flex justify-content-center searchBar">
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search..."
          id="search"
        />
        <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
  );
}

export default Search;
