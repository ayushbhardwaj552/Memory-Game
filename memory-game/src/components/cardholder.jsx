import Card from "./card";
import "../styles/cardholder.css"
import { useEffect, useState } from "react";

// let gamearr  = [];

export default function CardHolder() {

    const [cards , setCards] = useState({ arr: Array.from({ length: 18 }).map((_, index) => (
        <Card key={index} id={index + 1} handleChange={shuffle} />
    ))});
    
    
    let pls = cards.arr
    function shuffle() {
        let len = pls.length,
            currentIndex;
        for (currentIndex = len - 1; currentIndex > 0; currentIndex--) {
            let randIndex = Math.floor(Math.random() * (currentIndex + 1));
            var temp = pls[currentIndex];
            pls[currentIndex] = pls[randIndex];
            pls[randIndex] = temp;
        }
        setCards({...cards, arr: pls});
    }

    return (
        <div className="cardHolder">
            {cards.arr.map(card => {

                return card
            })} 

        </div>
    )
   
}

