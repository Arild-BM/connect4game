import { useState, useEffect } from "react"

const maxTime = 15
let i = maxTime;

setInterval(() => i--, 1000)

function Counter({rules, timer, gameover, setGameover, color, setColor, setPointA, setPointB, start, setStart}) {

    const [counter, setCounter] = useState(15)
    
    // Count down from 15 sec.
    useEffect(() => {
        setTimeout(() => {
            if (timer && !gameover && start) {
                setCounter(i);
            }
            if ((i<0) && !gameover && !rules && start) {
                setGameover(true)
                if (color === 2) {setPointA(prev => prev + 1)}
                if (color === 1) {setPointB(prev => prev + 1)}
                (color === 2) ? setColor(1) : setColor(2)
            }
        }, 1000)
        // eslint-disable-next-line
    });

    // Restart countdown
    useEffect(() => {
        i = maxTime
        setCounter(i);
        // eslint-disable-next-line
    }, [color, gameover, start, timer, rules]);

    // Show counter and restart game
    if (!gameover && !rules) {
        return (
            <div className = {color === 1 ? "counter counter-red" : "counter counter-yellow"}>
                <div className = {color === 1 ? "triangle counter-red" : "triangle counter-yellow"}></div>
                {start && <h3 key = "1">Player {color}'s turn</h3>}
                {start && timer && <h1 key = "2">{counter}</h1>}
                {!start && <div key = "3"><br key = "4" /><p key = "5" className = "button"
                    onClick = {() => {
                        setStart(true)
                    }}>Start game</p>
                    </div>}
            </div>
        )
    }
}

export default Counter