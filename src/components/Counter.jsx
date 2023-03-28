import { useState, useEffect } from "react"

let i = 15;

setInterval(() => i--, 1000)

function Counter({rules, timer, gameover, setGameover, color, setColor, setTimeoutcounter, setPointA, setPointB, start, setStart}) {

    const [counter, setCounter] = useState(15)
    
    useEffect(() => {
        setTimeout(() => {
            if (timer) {
                setCounter(i);
            }
            if ((i<0) && (!gameover) && (!rules) && (start)) {
                setGameover(true)
                setTimeoutcounter(true)
                if (color === 2) {setPointA(prev => prev + 1)}
                if (color === 1) {setPointB(prev => prev + 1)}
                if (color === 2) {setColor(1)}
                if (color === 1) {setColor(2)}
            }
        }, 1000)
        // eslint-disable-next-line
    }, [i]);

    useEffect(() => {
        i = 15
        setCounter(i);
        // eslint-disable-next-line
    }, [color, gameover, start, timer]);

    
    if (!gameover && !rules) {
        return (
            <div className = {color === 1 ? "counter counter-red" : "counter counter-yellow"}>
                <div className = {color === 1 ? "triangle counter-red" : "triangle counter-yellow"}></div>
                {start && <h3 key = "1">Player {color}'s turn</h3>}
                {start && timer && <h1 key = "2">{counter}</h1>}
                {!start && <div><br /><p key = "11" className = "button"
                    onClick = {() => {
                        setStart(true)
                    }}>Start game</p>
                    </div>}
            </div>
        )
    }
}

export default Counter