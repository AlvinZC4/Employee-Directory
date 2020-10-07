import React from "react"

function SearchForm(props) {
    return (
      <form className="search">
        <div className="form-group row col-md-6">
          <label htmlFor="name" className="col-form-label col-md-4">Search by name</label>
          <div className="col-md-8">
          <input
            type="email"
            value={props.search}
            onChange={props.handleInputChange}
            name="name"
            list="names"
            className="form-control"
            placeholder="Search Employees Here"
            id="inputEmail4"
          />
          </div>
        </div>
      </form>
    );
}

export default SearchForm