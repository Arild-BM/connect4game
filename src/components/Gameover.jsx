function Gameover({rules, color, restart, setFill, setGameover, setNewStartColor, timeoutcounter, setTimeoutcounter}) {
    return (
        !rules && <div className = "gameover">
            <h3 key = "1"> Player {timeoutcounter ? color===1 ? 2 : 1 : color}</h3>
            <h1 key = "2">WINS</h1>
            <p key = "3" className = "button"
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