import {useState} from "react"

function App() {
  const [fall, setFall] = useState(false)
  const [mouseover, setMouseover] = useState(false)
  // const [bottom, setBottom] = useState([6, 6, 6, 6, 6, 6, 6])
  const x = [1,1,1,1,1,1,1]
  const y = [1,1,1,1,1,1]

  return (
    <div>
      <header >
        <div className = "app-header">
          <p className = "button"
            onClick = {() => console.log("HEI")}>MENU</p>
          <div className = "logo">
            <div className = "line">
              <div className = "ball ball-a"></div>
              <div className = "ball ball-b"></div>
            </div>
            <div className = "line">
              <div className = "ball ball-b"></div>
              <div className = "ball ball-a"></div>
            </div>
          </div>
          <p className = "button"
            onClick = {() => console.log("HEI")}>RESTART</p>
        </div>
      </header>
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
                        setMouseover(false)}
                      }
                      onMouseEnter = {() => setMouseover(true)}
                      onMouseLeave = {() => setMouseover(false)}
                      >
                  </div>
                  <div className = "circle">
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
