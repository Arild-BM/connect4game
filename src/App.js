import {useState} from "react"
import Header from "./components/Header"

let color = 1
let temp = []

function App() {
  const [fall, setFall] = useState(false)
  const [mouseover, setMouseover] = useState(false)
  const [fill, setFill] = useState([[0, 0, 0, 0, 0, 0, 0],
                                    [0, 0, 0, 0, 0, 0, 0],
                                    [0, 0, 0, 0, 0, 0, 0],
                                    [0, 0, 0, 0, 0, 0, 0],
                                    [0, 0, 0, 0, 0, 0, 0],
                                    [0, 0, 0, 0, 0, 0, 0]])
  // const [winner, setWinner] = useState(0)
  const x = [1,1,1,1,1,1,1]
  const y = [1,1,1,1,1,1]

  function won(x, y, color) {
    
    // Check for vertical 4 on line
    if (y<=2) {
      if ((fill[y][x]===color) && (fill[y+1][x]===color) && (fill[y+2][x]===color) && (fill[y+3][x]===color)) {
        return color
      }
    }

    // Check for horizontal 4 on line
    let temp = [0, 0, 0, ...fill[y], 0, 0, 0]
    if (((temp[x]===color) && (temp[x+1]===color) && (temp[x+2]===color) && (temp[x+3]===color)) ||
      ((temp[x+1]===color) && (temp[x+2]===color) && (temp[x+3]===color) && (temp[x+4]===color)) ||
      ((temp[x+2]===color) && (temp[x+3]===color) && (temp[x+4]===color) && (temp[x+5]===color)) ||
      ((temp[x+3]===color) && (temp[x+4]===color) && (temp[x+5]===color) && (temp[x+6]===color))) {
        return color
      }
    
    // Check for diagonal 4 on line
    if ((x+y >= 3) && (x+y <= 8)) {
      temp = [0, 0, 0]
      for (let i = (x+y < 5 ? x+y : 5) ; i >= 0 ; i-- ) {
        console.log(i, x+y-i)
        temp.push(fill[i][x+y-i])
        if ((x+y > 6) && (x+y-i === 6)) {
          break
        }
      }
      temp.push(...[0, 0, 0])
      console.log(temp)
    }

  }


  return (
    <div>
      <Header />
      <main>
        <div className = "main-page">
          <div className="main-frame">
            {x.map((x, indexX) =>  (
            <div key = {indexX}>
              {y.map((y, indexY) =>  (
                <div key = {indexY}>
                  <div className = {mouseover ? "circle-a" : fall ? "circle-a circle-fall" : "blue"}
                      onClick = {() => {
                        setFall(true)
                        setMouseover(false)
                        }
                      }
                      onMouseEnter = {() => setMouseover(true)}
                      onMouseLeave = {() => setMouseover(false)}
                      >
                  </div>
                  <div className = {fill[indexY][indexX] ? fill[indexY][indexX] === 1 ? "circle yellow" : "circle red" : "circle"}
                        onClick = {() => {
                          if (((indexY === 5) && !fill[indexY][indexX]) || (((indexY<5) && (fill[indexY+1][indexX]) && !fill[indexY][indexX]))) {
                            temp = [...fill]
                            temp[indexY][indexX] = color
                            setFill([...temp])
                            
                            console.log(won(indexX, indexY, color))
                            color === 1 ? color = 2 : color = 1
                          }
                        }}>
                    <div className = "white-mask"></div>
                  </div>
                </div>
              ))}
            </div>
            ))}
          </div>    
        </div>
      </main>
      {/* <footer></footer> */}
    </div>
  );
}

export default App;
