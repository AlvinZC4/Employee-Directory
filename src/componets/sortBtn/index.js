import React from "react"

function sortBtn(props) {
    return (
        <button onClick={props.handleBtnClick} data-value={props["data-value"]} className={`btn btn-info ${props["data-value"]}`}>
            {props.text}
        </button>
    )
}
export default sortBtn