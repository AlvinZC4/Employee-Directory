import React from "react"
import Image from "../Image"

function SearchResults(props) {
    return(
        <tbody className="search-results table-row">
            {props.results.map(result => (
                <tr>
                    <th scope="row" key={result.image} className="employee-image entry"><Image image={result.image} /></th>
                    <td key={result.first} className="first-name entry">{result.first}</td>
                    <td key={result.last} className="last-name entry">{result.last}</td>
                    <td key={result.email} className="email entry">{result.email}</td>
                </tr>
            ))}
            
        </tbody>
    )
}

export default SearchResults