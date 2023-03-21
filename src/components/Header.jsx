function Header() { 
    return (
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
    )
}

export default Header