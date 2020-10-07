import React from "react"

function Table(props) {
    return(
        <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col"></th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">E-mail</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>mark@mdo.com</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>toto@fat.net</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>Gurado@twittercom</td>
    </tr>
  </tbody>
</table>
    )
}

export default Table