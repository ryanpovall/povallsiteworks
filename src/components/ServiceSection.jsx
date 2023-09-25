import React from "react"
import Card from "./Card"
import Dot from "./Dot"

export default function ServiceSection (props) {
    const [currentCardIndex, setCardIndex] = React.useState(0);
    const descriptions = props.description.map((text) => {
        return (
            <div class='service-section--bullet'>
                <span class="material-symbols-outlined">task_alt</span>
                <span class="service-section--bullet-text">{text}</span>

            </div>
        )
    });

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
            <div className="service-section--description-container">
                <div className="service-section--description-text" id={props.header}>
                    <h2>{props.header}</h2>
                    {descriptions}
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