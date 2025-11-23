import Deck from "../images/deck.jpg"
function Deck(){
    return(
        <div className = "deck-container">
            <button>
                <img src = {Deck} className = "deck-button" />
            </button>
        </div>
    )
}