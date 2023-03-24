// Endres løsning

const gameBoard = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 2, 2, 1, 0],
    [0, 0, 1, 0, 2, 0, 1],
    [0, 1, 2, 2, 2, 0, 0]
];
//prettier-ignore
function checkWin(board) {
  const isWinningLine = (a, b, c, d) => a !== 0 && a === b && b === c && c === d;
  const getValue = (i, j) => (i >= 0 && i < 6 && j >= 0 && j < 7) ? board[i][j] : null;

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 7; j++) {
      if (isWinningLine(getValue(i, j), getValue(i, j + 1), getValue(i, j + 2), getValue(i, j + 3)) ||
          isWinningLine(getValue(i, j), getValue(i + 1, j), getValue(i + 2, j), getValue(i + 3, j)) ||
          isWinningLine(getValue(i, j), getValue(i + 1, j + 1), getValue(i + 2, j + 2), getValue(i + 3, j + 3)) ||
          isWinningLine(getValue(i, j), getValue(i - 1, j + 1), getValue(i - 2, j + 2), getValue(i - 3, j + 3))) {
        return `Player ${getValue(i, j)} wins!`;
      }
    }
  }

  return "No winner yet";
}

console.log(checkWin(gameBoard));