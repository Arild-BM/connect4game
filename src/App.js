import {useState} from "react"
import Header from "./components/Header"

let color = false


function App() {
  const [fall, setFall] = useState(false)
  const [mouseover, setMouseover] = useState(false)
  const [fill, setFill] = useState([[0, 0, 0, 0, 0, 0, 0],
                                    [0, 0, 0, 0, 0, 0, 0],
                                    [0, 0, 0, 0, 0, 0, 0],
                                    [0, 0, 0, 0, 0, 0, 0],
                                    [0, 0, 0, 0, 0, 0, 0],
                                    [0, 0, 0, 0, 0, 0, 0]])
  
  const x = [1,1,1,1,1,1,1]
  const y = [1,1,1,1,1,1]

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
                          if (((indexY === 5) && !fill[indexY][indexX]) || (((fill[indexY+1][indexX] > 0) && !fill[indexY][indexX]))) {
                            let temp = fill
                            temp[indexY][indexX] = color ? 1 : 2
                            color = !color
                            setFill([...temp])
                            console.log(fill)
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
