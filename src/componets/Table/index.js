import React from "react"
import SearchResults from "../SearchResults"

function Table(props) {
     console.log("Table", props.results)
    return(
        <table className="table">
            <thead className="thead-dark">
                <tr>
                <th scope="col"></th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">E-Mail Address</th>
                </tr>
            </thead>
            <SearchResults results={props.results} handleBtnClick={props.handleBtnClick} />
        </table>
    )
}

export default Table