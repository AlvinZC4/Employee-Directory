import React from "react"

function SearchForm(props) {
    return (
        <form className="search">
          <div className="form-group">
            <label htmlFor="name">Search by name:</label>
            <input
              value={props.search}
              onChange={props.handleInputChange}
              name="name"
              list="names"
              type="text"
              className="form-control"
              placeholder="Search Employees by name"
              id="name"
            />
            {/* <datalist id="names">
              {props.names.map(name => (
                <option value={name} key={name} />
              ))}
            </datalist> */}
            <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
              Search
            </button>
          </div>
        </form>
    );
}

export default SearchForm