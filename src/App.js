import {useState} from "react"
import Header from "./components/Header"

function App() {
  const [fall, setFall] = useState(false)
  const [mouseover, setMouseover] = useState(false)
  const [fill, setFill] = useState([0, 0, 0, 0, 0, 0, 0])
  const x = [1,1,1,1,1,1,1]
  const y = [1,1,1,1,1,1]

  return (
    <div>
      <Header />
      <main>
        <div className = "main-page">
          <div className="main-frame">
            {x.map(() =>  (
            <div >
              {y.map(() =>  (
                <div>
                  <div className = {mouseover ? "circle-a" : fall ? "circle-a circle-fall" : "blue"}
                      onClick = {() => {
                        setFall(true)
                        setMouseover(false)
                        setFill(currentValue => currentValue+1)}
                      }
                      onMouseEnter = {() => setMouseover(true)}
                      onMouseLeave = {() => setMouseover(false)}
                      >
                  </div>
                  <div className = {true ? "circle yellow" : "circle"}>
                    <div className = "inner-circle"></div>
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
