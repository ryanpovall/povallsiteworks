import React from "react"
import Card from "./Card"
import Dot from "./Dot"

export default function ServiceSection (props) {
    const [currentCardIndex, setCardIndex] = React.useState(0);
    const cards = props.cards.map((card, index) => {
        return (
            <Card key={index}
                title = {card.title}
                img = {card.img}
                isVisible = {index === currentCardIndex}
            />
        )
    });
    const dots = props.cards.map((card, index) => {
        return (
            <Dot key={index} isActive = {index === currentCardIndex}/>
        )
    });

    function handleLeftArrowClick () {
        setCardIndex((prevCardIndex) => {
            if (prevCardIndex === 0) {
                return cards.length - 1;
            } else {
                return prevCardIndex - 1;
            }
        });
    }

    function handleRightArrowClick () {
        setCardIndex((prevCardIndex) => {
            if (prevCardIndex === cards.length - 1) {
                return 0;
            } else {
                return prevCardIndex + 1;
            }
        });
    }

    return (
        <section className="service-section">
            <div className="service-section--info">
                <div className="service-section--header" id={props.header}>
                    <div className="service-section--left-diagonal"></div>
                    <div className="service-section--right-diagonal"></div>
                    <h2>{props.header}</h2>
                </div>
                <div className="service-section--description">
                    {props.description}
                </div>
            </div>
            <div className="card-container">
                {cards}
                <button className="card-arrow-left" src='./assets/Arrow2left.png' onClick={handleLeftArrowClick}></button>
                <button className="card-arrow-right" src='./assets/Arrow2right.png' onClick={handleRightArrowClick}></button>
                <div className="dot-container">{dots}</div>
            </div>
        </section>
    )
}