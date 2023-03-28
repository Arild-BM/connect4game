function Gameover({winner, rules, color, restart, fill, setFill, setGameover, setNewStartColor, timeoutcounter, setTimeoutcounter}) {
    return (
        !rules && <div className = "gameover">
            {winner && <h3 key = "1">Player {timeoutcounter ? color===1 ? 2 : 1 : color}</h3>}
            {winner && <h1 key = "2">WINS</h1>}
            {!winner && <div><br key = "3" /><h1 key = "4">NO WINNER</h1></div>}
            <p key = "5" className = "button"
                    onClick = {() => {
                        setFill(restart)
                        setGameover(false)
                        setNewStartColor(true)
                        setTimeoutcounter(false)
                    }}>PLAY AGAIN</p>
        </div>

    )
}

export default Gameover