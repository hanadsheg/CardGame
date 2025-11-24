import DeckImage from "../images/deck3.png"
import "../styles/deck.css"
import {Game} from "../classes/game.js"
import CurrentCard from "./currentCard.js"


const Deck = ({ onClick, cardRank, cardSuit }) => {
    return(
        <div className = "deck-container">
            <button className = "theButton" onClick={onClick}>
                <img src = {DeckImage} className = "deck-button" />
            </button>

            {/**
             <CurrentCard
            cardRank = {cardRank}
            cardSuit = {cardSuit}
             />
             */}
            
        </div>
    )
}

export default Deck;