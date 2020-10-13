import React from "react"

function SearchForm(props) {
    return (
      <form className="search">
        <div className="form-group row col-lg-12 col-md-10 col-sm-8">
          <label htmlFor="name" className="col-form-label col-md-4 text-right">Search by name</label>
          <div className="col-md-6 px-0">
          <input
            type="email"
            value={props.search}
            onChange={props.handleInputChange}
            name="search"
            list="names"
            className="form-control"
            placeholder="Search Employees Here"
            id="inputEmail4"
          />
          </div>
          <div className="col-md-2 mx-0 px-0">
          <button type="reset" onClick={props.handleReset} className="btn btn-danger col-2">X</button>
          </div>
          <div className="justify-content-center d-inline-flex row">
            <div className="col-md-6 mx-2">
            <button type="button" class="btn btn-info sort-first">Sort by First Name</button>
            </div>
            <div className="col-md-6 mx-2">
            <button type="button" class="btn btn-info sort-last">Sort by Last Name</button>
            </div>
          </div>
        </div>
      </form>
    );
}

export default SearchForm