export class Card{
    constructor(rank, suit){
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
            return this.rank;
        }
        else{
            return names[this.rank];
        }
    }

    getSuitName(){
        const suits = {
            "S" : "Suits",
            "H" : "Hearts",
            "D" : "Diamonds",
            "C" : "Clubs",
        };
        return suits[this.suit];
    }

    toString(){
        return `${this.getRankName()} of ${this.getSuitName()}`;
    }
}