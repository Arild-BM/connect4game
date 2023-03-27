import { useState, useEffect } from "react"

let i = 15;

setInterval(() => i--, 1000)

function Counter({rules, timer, setTimer, gameover, setGameover, color, setColor, setTimeoutcounter, setPointA, setPointB}) {

    const [counter, setCounter] = useState(15)
    
    useEffect(() => {
        setTimeout(() => {
            if (timer) {
                setCounter(i);
            }
            if ((i<0) && (!gameover) && (!rules)) {
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
    }, [color, gameover]);

    
    if (!gameover && timer && !rules) {
        return (
            <div className = {color === 1 ? "counter counter-red" : "counter counter-yellow"}>
                <div className = {color === 1 ? "triangle counter-red" : "triangle counter-yellow"}></div>
                <h3 key = "1">Player {color}'s turn</h3>
                <h1 key = "2">{counter}</h1>
            </div>
        )
    }
}

export default Counter