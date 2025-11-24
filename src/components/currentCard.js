import React, {useState, useEffect} from 'react';



const CurrentCard = ({ cardRank, cardSuit }) =>{

     const url =
    cardRank && cardSuit
      ? `/public/alldeck/${cardRank.toLowerCase()}_of_${cardSuit.toLowerCase()}.png`
      : "";

  console.log({ cardRank, cardSuit, url });

  return (
    <div className="userCard">
      {cardRank && cardSuit && (
        <img src={url} className="CardImage" alt={`${cardRank} of ${cardSuit}`} />
      )}
    </div>
    );
}


export default CurrentCard;