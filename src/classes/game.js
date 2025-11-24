import {Deck} from "./deck";
import {Card} from "./card.js";

export class Game{
    constructor(){
        this.gameDeck = new Deck();
        this.computerScore = 0;
        this.myScore = 0;
        this.myCard = new Card(0, "");
        this.is_done = false;
        this.text = "";
    }

    getCard(){
        return this.myCard;
    }

    getText(){
        return this.text;
    }

    getDone(){
        return this.is_done;
    }

    playgame(){
        this.myCard = this.gameDeck.draw();
        let yourCard = this.gameDeck.draw();

        while (this.computerScore < 5 && this.myScore < 5){
            if (this.myCard != null && yourCard != null){
            console.log(`Your Card is ${this.myCard.toString()}, and their Card is ${yourCard.toString()}`);
            if (this.myCard.rank > yourCard.rank){
                console.log("Your Card is Higher");
                this.myScore++;
            }
            else if (yourCard.rank > this.myCard.rank){
                console.log("Opponents Card is Higher");
                this.computerScore++;
            }

            this.myCard = this.gameDeck.draw();
            yourCard = this.gameDeck.draw();
        }
        }
    }

playround(){

    if (!this.is_done){
        this.myCard = this.gameDeck.draw();
    let yourCard = this.gameDeck.draw();

    if (this.computerScore < 5 && this.myScore < 5){
        if (this.myCard != null && yourCard != null){
            let resultText = `Your Card is ${this.myCard.toString()}, and their Card is ${yourCard.toString()}`;
            console.log(resultText);
            
            if (this.myCard.rank > yourCard.rank){
                resultText += " Your Card is Higher";
                console.log("Your Card is Higher");
                this.myScore++;
            }
            else if (yourCard.rank > this.myCard.rank){
                resultText += " Opponents Card is Higher";
                console.log("Opponents Card is Higher");
                this.computerScore++;
            }
            // ASSIGN the single result line to this.text
            this.text = "\n" + resultText;
        }
    }
    else{
        // When the game is over, ASSIGN the final result to this.text
        this.text = this.whowins();
    }
    }
    
}

whowins(){
    let temptext = "";
    if (this.myScore > this.computerScore){
        console.log("\nHurrayy! You WON!");
        temptext = "Hurrayy! You WON!";
    }
    else if (this.myScore == this.computerScore){
        console.log("\nOOO! You DREW!");
        temptext = "OOO! You DREW!";
    }
    else{
        console.log("\n Unlucky! You LOST!");
        temptext = "Unlucky! You LOST!";
    }

    this.is_done = true;
    return temptext;
}

resetGame(){
    this.gameDeck.reset();
    this.computerScore = 0;
    this.myScore = 0;
    this.text = "";
    this.is_done = false;
}

}