import gamebackground from "../images/gamebackground.jpg"
import "../styles/background.css"

function Background(){
    return (
        <div className = "background-container">
        <img src={gamebackground} className="game-back" alt="background" />


        </div>
    )
}

export default Background;