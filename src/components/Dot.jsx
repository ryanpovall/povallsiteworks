import React from "react"

export default function Dot (props) {
    const isActive = props.isActive ? " active" : "";
    return (
        <div className={`dot${isActive}`}></div>
    )
}