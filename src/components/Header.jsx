function Header({restart, setFill, setGameover}) { 
    return (
        <header key = "1">
            <div key = "2" className = "app-header">
                <p key = "3" className = "button"
                    onClick = {() => console.log("HEI")}>MENU</p>
                <div key = "4" className = "logo">
                    <div key = "5" className = "line">
                        <div key = "6" className = "ball ball-a"></div>
                        <div key = "7" className = "ball ball-b"></div>
                    </div>
                    <div key = "8" className = "line">
                        <div key = "9" className = "ball ball-b"></div>
                        <div key = "10" className = "ball ball-a"></div>
                    </div>
                </div>
                <p key = "11" className = "button"
                    onClick = {() => {
                        setFill(restart)
                        setGameover(false)
                    }}>RESTART</p>
            </div>
        </header>
    )
}

export default Header