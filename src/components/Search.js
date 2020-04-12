import React from 'react';

function Search(props) {
    return (
        <div className="container">
            <form className="form-inline my-2 my-lg-0">
                <input
                    onChange={props.handleInputChange}
                    value={props.search}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder='Search...'
                    id="search"
                />
                <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">
                Search
                </button>
          </form>
        </div>
    )
}

export default Search;