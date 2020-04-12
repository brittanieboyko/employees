import React from "react";
import Moment from "react-moment";
import "./style.css";

function SearchResultCard(props) {
  return (
    <tbody>
      {props.results.map((result) => (
        <tr key={result.login.uuid}>
          <th scope="row">
            <img
              alt="Employee"
              className="img-fluid rounded-circle"
              src={result.picture.medium}
            />
          </th>
          <td>
            {result.name.first} {result.name.last}
          </td>
          <td>{result.email}</td>
          <td>{result.cell}</td>
          <td><Moment format="MM/DD/YYYY">{result.dob.date}</Moment></td>
        </tr>
      ))}
    </tbody>
  );
}

export default SearchResultCard;
