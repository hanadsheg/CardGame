export class Card{
    constructor(rank = 0, suit = ""){
        this.rank = rank;
        this.suit = suit;
    }

    getRankName(){
        const names = {
            1 : "Ace",
            11: "Jack",
            12: "Queen",
            13: "King",
        };  
        if (names[this.rank] == undefined){
            let string = "" + this.rank;
            return string;
        }
        else{
            return String(names[this.rank]);
        }
    }

    getSuitName(){
        const suits = {
            "S" : "Spades",
            "H" : "Hearts",
            "D" : "Diamonds",
            "C" : "Clubs",
        };
        return String(suits[this.suit]);
    }

    toString(){
        return `${this.getRankName()} of ${this.getSuitName()}`;
    }
}