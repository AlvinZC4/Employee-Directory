import React from "react"

function Image(props) {
    return (
        <img key={props.image} alt="employee-pic" src={props.image} className="employee-pic"/>
    )
}

export default Image