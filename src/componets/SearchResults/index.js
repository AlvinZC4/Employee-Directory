import React from "react"
import Image from "../Image"
import sortBtn from "../sortBtn"

function SearchResults(props) {
    return(
        <div className="container">
            <div className="justify-content-center d-inline-flex row">
                <div className="col-md-6 mx-2">
                <sortBtn onClick={props.handleBtnClick} data-value="first-name-sort" />
                </div>
                <div className="col-md-6 mx-2">
                <sortBtn onClick={props.handleBtnClick} data-value="last-name-sort" />
                </div>
            </div>
            <div className="row">
                <tbody className="search-results table-row">
                {props.results.map(result => (
                    <tr key={result.firstName + result.lastName}>
                        <th scope="row" key={result.image} className="employee-image entry"><Image image={result.image} /></th>
                        <td key={result.firstName} className="first-name entry">{result.firstName}</td>
                        <td key={result.lastName} className="last-name entry">{result.lastName}</td>
                        <td key={result.email} className="email entry">{result.email}</td>
                    </tr>
                ))}
                
            </tbody>
            </div>
        </div>
    )
}

export default SearchResults