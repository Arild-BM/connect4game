let starter = 1

function Gameover({fill, winner, rules, color, setColor, restart, setFill, setGameover}) {
    if ((winner === undefined) && (!fill[0].includes(0))) {
        setColor(0)
        return (
            !rules && <div className = "gameover">
                <div><br key = "3" /><h1 key = "4">NO WINNER</h1></div>
                <p key = "5" className = "button"
                        onClick = {() => {
                            setFill(restart)
                            setGameover(false)
                            starter === 1 ? starter = 2 : starter = 1
                            setColor(starter)
                        }}>PLAY AGAIN</p>
            </div>
        )
    } else   
    return (
        !rules && <div className = "gameover">
            {(color > 0) && <h3 key = "1">Player {color}</h3>}
            {(color > 0) && <h1 key = "2">WINS</h1>}
            <p key = "5" className = "button"
                    onClick = {() => {
                        setFill(restart)
                        setGameover(false)
                        starter === 1 ? starter = 2 : starter = 1
                        setColor(starter)
                    }}>PLAY AGAIN</p>
        </div>
    )
}

export default Gameover