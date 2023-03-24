import {useState} from "react"
import Header from "./components/Header"
import Player from "./components/Player"

let color = 1
let temp = []

function App() {
  const restart = [[0, 0, 0, 0, 0, 0, 0],
                   [0, 0, 0, 0, 0, 0, 0],
                   [0, 0, 0, 0, 0, 0, 0],
                   [0, 0, 0, 0, 0, 0, 0],
                   [0, 0, 0, 0, 0, 0, 0],
                   [0, 0, 0, 0, 0, 0, 0]]

  const [fall, setFall] = useState(false)
  const [pointA, setPointA] = useState(0)
  const [pointB, setPointB] = useState(0)
  const [mouseover, setMouseover] = useState(false)
  const [fill, setFill] = useState(restart)
  const [gameover, setGameover] = useState(false)
  
  const x = [1,1,1,1,1,1,1]
  const y = [1,1,1,1,1,1]

  function won(x, y, color) {
    
    function allEqual(arr) {
      return new Set(arr).size === 1
    }

    function check4lines(x, array) {
      if ((allEqual(array.slice(x, x+4))) ||
        (allEqual(array.slice(x+1, x+5))) ||
        (allEqual(array.slice(x+2, x+6))) ||
        (allEqual(array.slice(x+3, x+7)))) {
          return color
        }
    }
    
    // Check for vertical 4 on line
    if (y<=2) {
      if ((fill[y][x]===color) && (fill[y+1][x]===color) && (fill[y+2][x]===color) && (fill[y+3][x]===color)) {
        return color
      }
    }

    // Check for horizontal 4 on line
    let temp = [0, 0, 0, ...fill[y], 0, 0, 0]
    if (check4lines(x, temp) > 0) {
      return check4lines(x, temp)
    }

    // Check for diagonal 4 on line
    if ((x+y >= 3) && (x+y <= 8)) {
      temp = [0, 0, 0]
      for (let i = (x+y < 5 ? x+y : 5) ; i >= 0 ; i-- ) {
        temp.push(fill[i][x+y-i])
        if (x+y-i === 6) {
          break
        }
      }
      temp.push(...[0, 0, 0])
      if (check4lines(x+y <= 5 ? x : x+y === 6 ? x-1 : x+y === 7 ? x-2 : x-3, temp) > 0) {
        return check4lines(x+y <= 5 ? x : x+y === 6 ? x-1 : x+y === 7 ? x-2 : x-3, temp)
      }
    }

    // Check for diagonal 4 on line
    if ((y-x < 3) && (y-x > -4)) {
      temp = [0, 0, 0]
      for (let i = (y-x>=-1 ? 5 : y-x === -2 ? 4 : 3) ; i >= (y-x <= 0 ? 0 : y-x === 1 ? 1 : 2) ; i-- ) {
        temp.push(fill[i][i-(y-x)])
      }
      temp.push(...[0, 0, 0])
      if (check4lines(y-x >= -1 ? 5-y : y-x === -2 ? 4-y : 3-y, temp) > 0) {
        return check4lines(y-x >= -1 ? 5-y : y-x === -2 ? 4-y : 3-y, temp)
      }
    }
  }


  return (
    <div className = "main">
      <Header restart = {restart} setFill = {setFill} setGameover = {setGameover}/>
      <main>
        <Player key="player1" classN = "player1" player = "Player 1" points = {pointA}></Player>
        <div key = "1" className = "main-page">
          <div key = "2" className = "main-frame">
            {x.map((x, indexX) =>  (
            <div key = {indexX}>
              {y.map((y, indexY) =>  (
                <div key = {indexY}>
                  <div key ="a" className = {mouseover ? "circle-a" : fall ? "circle-a circle-fall" : "blue"}
                      onClick = {() => {
                        setFall(true)
                        setMouseover(false)
                        }
                      }
                      onMouseEnter = {() => setMouseover(true)}
                      onMouseLeave = {() => setMouseover(false)}
                      >
                  </div>
                  <div key ="b" className = {fill[indexY][indexX] ? fill[indexY][indexX] === 1 ? "circle yellow" : "circle red" : "circle"}
                        onClick = {() => {
                          if (!gameover && (((indexY === 5) && !fill[indexY][indexX]) || (((indexY<5) && (fill[indexY+1][indexX]) && !fill[indexY][indexX])))) {
                            temp = [...fill]
                            temp[indexY][indexX] = color
                            setFill([...temp])
                            let winner = won(indexX, indexY, color) 
                            if (winner === 1) {setPointA(prev => prev + 1)}
                            if (winner === 2) {setPointB(prev => prev + 1)}
                            if (winner > 0) {setGameover(true)}
                            color === 1 ? color = 2 : color = 1
                          }
                        }}>
                    <div key = "3" className = "white-mask"></div>
                  </div>
                </div>
              ))}
            </div>
            ))}
          </div>
        </div>
        <Player key="player2" classN = "player2" player = "Player 2" points = {pointB} ></Player>
      </main>
      <footer></footer>
    </div>
  )
}

export default App
