function Header() { 
    return (
        <header >
            <div key = "1" className = "app-header">
                <p className = "button"
                    onClick = {() => console.log("HEI")}>MENU</p>
                <div key = "2" className = "logo">
                    <div className = "line">
                        <div key = "3" className = "ball ball-a"></div>
                        <div key = "4" className = "ball ball-b"></div>
                    </div>
                    <div key = "5" className = "line">
                        <div key = "6" className = "ball ball-b"></div>
                        <div key = "7" className = "ball ball-a"></div>
                    </div>
                </div>
                <p className = "button"
                    onClick = {() => console.log("HEI")}>RESTART</p>
            </div>
        </header>
    )
}

export default Header