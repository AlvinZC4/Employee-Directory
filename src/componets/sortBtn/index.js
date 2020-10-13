import React from "react"

function sortBtn(props) {
    return (
        <button onClick={props.onClick} data-value={props["data-value"]} className={`btn btn-info ${props["data-value"]}`}/>
    )
}
export default sortBtn