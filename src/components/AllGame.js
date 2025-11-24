import React, { useState, useRef, useEffect } from 'react';
import gamebackground from "../images/gamebackground.jpg"
import "../styles/background.css"
import Deck from "./deck.js"
import {Game} from "../classes/game.js"


function AllGame() {

    const myGameRef = useRef(new Game());
    const myGame = myGameRef.current;

    const [myCardRank, setMyCardRank] = useState(myGame.myCard.getRankName());
    const [myCardSuit, setMyCardSuit] = useState(myGame.myCard.getSuitName());
    const [myText, setMyText] = useState(myGame.getText());
    const [isFinished, setIsFinished] = useState(myGame.getDone());

    const handleClick = () => {
    myGame.playround();

    setMyCardRank(myGame.myCard.getRankName());
    setMyCardSuit(myGame.myCard.getSuitName());
    setMyText(myGame.getText());
    setIsFinished(myGame.getDone());
  };

    return (
        <div className = "background-container">
        <img src={gamebackground} className="game-back" alt="background" />
        <div className = "column-container">
                <Deck 
        onClick = {handleClick}
        cardRank={myCardRank}   
        cardSuit={myCardSuit}
        />
        <p className = "result">
            {myText}
        </p>

        {isFinished && (
            <button className = "Reset-Button" onClick = {myGame.resetGame()}>
                <span>Again?</span>
            </button>
        )}
        </div>
        

        </div>
    )
}

export default AllGame;