import React from "react"
import SearchResults from "../SearchResults"

function Table(props) {
    return(
        <table className="table">
            <thead className="thead-dark">
                <tr>
                <th scope="col"></th>
                <th scope="col">{props.firstHeader}</th>
                <th scope="col">{props.lastHeader}</th>
                <th scope="col">{props.emailHeader}</th>
                </tr>
            </thead>
            <SearchResults results={props.results} />
        </table>
    )
}

export default Table