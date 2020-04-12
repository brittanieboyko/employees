import React from "react";

function SearchResultCard(props) {
  console.log(props)

  return (
    <div className="table-responsive-lg">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Email Address</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map(result => (
            <tr key={result.login.uuid}>
              <th scope="row"><img alt="Employee" className="img-fluid" src={result.picture.medium}/></th>
              <td>{result.name.first} {result.name.last}</td>
              <td>{result.email}</td>
              <td>{result.cell}</td>
              <td>{result.dob.date}</td>
            </tr>
          ))}
      </tbody>
    </table>
  </div>
  );
}

export default SearchResultCard;

