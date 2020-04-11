import React from "react";

function SearchResultCard(props) {
    console.log("props:", props)
  return (
    <ul className="list-group">
      {props.results.map(result => (
        <li className="list-group-item" key={result.login.uuid}>
            <img alt="Employee" className="img-fluid" src={result.picture.thumbnail} />
            <span>{result.name.first} {result.name.last}</span>
            <span>{result.email}</span>
            <span>{result.dob.date}</span>
        </li>
      ))}
      </ul>
    );
  }

export default SearchResultCard;


