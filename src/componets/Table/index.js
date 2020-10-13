import React from "react"
import SearchResults from "../SearchResults"

function Table(props) {
     console.log("Table", props.results)
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
            </div>
        </div>
    )
}

export default Table