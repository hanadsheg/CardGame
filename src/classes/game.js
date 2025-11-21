import {Deck} from "./deck";

export class Game{
    constructor(){
        this.gameDeck = new Deck();
        this.playgame();
    }

    playgame(){
        let myCard = this.gameDeck.draw();
        let yourCard = this.gameDeck.draw();

        if (myCard != null && yourCard != null){
            if (myCard.rank > yourCard.rank){
                console.log(`Your Card is ${myCard.toString()}, and their Card is ${yourCard.toString()}`);
                console.log("Your Card is Higher")
            }
            else if (yourCard.rank > myCard.rank){
                console.log("Opponents Card is Higher")
            }
        }

    }

}