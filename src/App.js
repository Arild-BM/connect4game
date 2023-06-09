import {useState} from "react"
import Header from "./components/Header"
import Player from "./components/Player"
import Gameover from "./components/Gameover"
import Counter from "./components/Counter"
import Rules from "./components/Rules"

let temp = []
let winner = 0

function App() {
  const restart = [[0, 0, 0, 0, 0, 0, 0],
                   [0, 0, 0, 0, 0, 0, 0],
                   [0, 0, 0, 0, 0, 0, 0],
                   [0, 0, 0, 0, 0, 0, 0],
                   [0, 0, 0, 0, 0, 0, 0],
                   [0, 0, 0, 0, 0, 0, 0]]

  const [pointA, setPointA] = useState(0) // Points for player A
  const [pointB, setPointB] = useState(0) // Points for player B
  const [fill, setFill] = useState(restart) // Current fill of table
  const [gameover, setGameover] = useState(false)
  const [color, setColor] = useState(1)
  const [timer, setTimer] = useState(true) // Turn timer on/off
  const [rules, setRules] = useState(false) // Show/hide rules
  const [start, setStart] = useState(false) // Game started
      
  const x = [1,1,1,1,1,1,1] // Help array for creating table
  const y = [1,1,1,1,1,1] // Help array for creating table

  // Check for 4 in a row
  function won(x, y, color) {
    
    // Check if all 4 are equal
    function allEqual(arr) {
      return new Set(arr).size === 1
    }

    // Check if 1 of the 4 possible placements are 4 in row (sliding 4 by 1)
    function check4lines(x, array) {
      if ((allEqual(array.slice(x, x+4))) ||
        (allEqual(array.slice(x+1, x+5))) ||
        (allEqual(array.slice(x+2, x+6))) ||
        (allEqual(array.slice(x+3, x+7)))) {
          return color
        }
    }
    
    // Check for vertical 4 on line for current player
    if (y<=2) {
      if ((fill[y][x]===color) && (fill[y+1][x]===color) && (fill[y+2][x]===color) && (fill[y+3][x]===color)) {
        return color
      }
    }

    // Check for horizontal 4 on line for current player
    let temp = [0, 0, 0, ...fill[y], 0, 0, 0]
    if (check4lines(x, temp) > 0) {
      return check4lines(x, temp)
    }

    // Check for diagonal 4 on line for current player
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

    // Check for diagonal (opposite direction) 4 on line for current player
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
      {/* Place out header */}
      <Header timer = {timer} setTimer = {setTimer} rules = {rules} setRules = {setRules} />
      <main>
        {/* Place out box for Player 1 */}
        <Player key="player1" classN = "player1" player = "Player 1" points = {pointA} rules = {rules}></Player>
        <div key = "1" className = "main-page">
          <div key = "2" className = "main-frame">
            {x.map((x, indexX) =>  (
            <div key = {indexX} >
              {y.map((y, indexY) =>  (
                <div key = {indexY}>
                  {/* Placement of ne disc, only in bottom free slot */}
                  <div key ="b" className = {fill[indexY][indexX] ? fill[indexY][indexX] === 1 ? "circle red" : "circle yellow" : "circle blue-mask"}
                        onClick = {() => {
                          if (start && !gameover && (((indexY === 5) && !fill[indexY][indexX]) || (((indexY<5) && (fill[indexY+1][indexX]) && !fill[indexY][indexX])))) {
                            temp = [...fill]
                            temp[indexY][indexX] = color
                            setFill([...temp])
                            // Check if placement of disc make the player win
                            winner = won(indexX, indexY, color)
                            // Give points to winner
                            if (winner === 1) {setPointA(prev => prev + 1)}
                            if (winner === 2) {setPointB(prev => prev + 1)}
                            if (winner > 0) {setGameover(true)}
                            // Set game over if board is full
                            if (!fill[0].includes(0)) {setGameover(true)}
                            !winner && (color === 1 ? setColor(2) : setColor(1))
                          }
                        }}>
                    <div key = "3" className = "white-mask"></div>
                  </div>
                </div>
              ))}
            </div>
            ))}
          </div>
          {/* Place out box for Game over */}
          {gameover && <Gameover fill = {fill} winner = {winner} rules = {rules} color = {color} setColor = {setColor} restart = {restart} setFill = {setFill} setGameover = {setGameover} />}
          {/* Place out box for Rules */}
          <Counter rules = {rules} timer = {timer} gameover = {gameover} setGameover = {setGameover} color = {color} setColor = {setColor} setPointA = {setPointA} setPointB = {setPointB} start = {start} setStart = {setStart} />
          {/* Place out box for Rules */}
          <Rules rules = {rules} />
        </div>
        {/* Place out box for Player 2 */}
        <Player key="player2" classN = "player2" player = "Player 2" points = {pointB} rules = {rules} ></Player>
      </main>
      <footer className = {(color === 1) && gameover ? "red-footer" : (color === 2) && gameover ? "yellow-footer" : ""}></footer>
    </div>
  )
}

export default App
