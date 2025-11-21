import {Card} from "./card";

export class Deck {
    constructor(){
        this.cards = [];
        this.newDeck();
        this.shuffle();
    }

    newDeck(){
        const suits = ["S","H","D", "C"];

        for (let suit of suits){
            for (let rank = 1; rank <= 13; rank++){
                let card = new Card(rank, suit)
                this.cards.push(card);

            }
        }
    }

    shuffle(){
        for (let i = this.cards.length - 1; i > 0; i--){
            let j = Math.floor(Math.random() * i + 1);
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    draw(){
        if (!this.isEmpty()){
            return this.cards.pop();
        }
        return null;
    }

    isEmpty(){
        return this.cards.length == 0;
    }

    
}