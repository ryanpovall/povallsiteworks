import React from "react"

export default function Card (props) {
    const isDisplayed = props.isVisible ? " visible" : "";
    return (
        <div className={`card${isDisplayed}`} >
            <img className="card--image" src={`${props.img}`}></img>
            <h4 className="card--title">{props.title}</h4>
        </div>
    )
}