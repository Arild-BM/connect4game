function Header({timer, setTimer, rules, setRules}) {

    return (
        <header key = "1">
            <div key = "2" className = "app-header">
                <p key = "3" className = "button"
                    onClick = {() => setRules(!rules) }>RULES</p>
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
                        setTimer(!timer)
                    }}>Timer on/off</p>
            </div>
        </header>
    )
}

export default Header