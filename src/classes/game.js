import {Deck} from "./deck";

export class Game{
    constructor(){
        this.gameDeck = new Deck();
        this.computerScore = 0;
        this.myScore = 0;
        this.playgame();
    }

    playgame(){
        let myCard = this.gameDeck.draw();
        let yourCard = this.gameDeck.draw();

        while (this.computerScore < 5 && this.myScore < 5){
            if (myCard != null && yourCard != null){
            console.log(`Your Card is ${myCard.toString()}, and their Card is ${yourCard.toString()}`);
            if (myCard.rank > yourCard.rank){
                console.log("Your Card is Higher");
                this.myScore++;
            }
            else if (yourCard.rank > myCard.rank){
                console.log("Opponents Card is Higher");
                this.computerScore++;
            }

            myCard = this.gameDeck.draw();
            yourCard = this.gameDeck.draw();
        }
        }

        

    }

}