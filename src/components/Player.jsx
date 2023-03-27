import smiley from "../images/smiley.svg"

function Player({classN, player, points, rules}) {
    return (
        !rules && <div className = "player">
            <img className = {classN} src = {smiley} alt="" />
            <h2>{player}</h2>
            <h1>{points}</h1>
        </div>

    )
}

export default Player