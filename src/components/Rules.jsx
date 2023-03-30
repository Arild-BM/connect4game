// Show rules

function Rules({rules}) {
    return (
        rules && <div className = "rules">
            <h1>Rules</h1>
            <h4>OBJECTIVE</h4>
            <p>Be the first player to connect 4 of the same colored
                discs in a row (either horizontally, vertically or
                diagonally)
            </p>
            <h4>HOW TO PLAY</h4>
            <ol>
                <li>Red goes first in the first game.</li>
                <li>Players must alternate turns, and only one
                    disc can be dropped in each turn.
                </li>
                <li>Discs can only be placed at the lowest available 
                    slot in each column.
                </li>
                <li>The game ends when there is a 4-in-a-row, 
                    times run out or no free slots.
                </li>
                <li>The starter of the previos game goes 
                    second on the next game.
                </li>
            </ol>

            
        </div>

    )
}

export default Rules