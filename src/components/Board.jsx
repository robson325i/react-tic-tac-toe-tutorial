import React, { useState } from 'react'
import Square from './square';

const calculateWinner = (squares) => {
  const lines = [
    // Horizontals
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Verticals
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonals
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const calculateEnd = (squares) => {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i] === null) {
      return false;
    }
  }
  return true;
}

const handleClick = (i, squares, setSquares, player, setPlayer) => {
  const winner = calculateWinner(squares);
  if (winner || squares[i]) {
    return;
  }
  // TODO: Refactor this shit.
  if (player === "X") {
    setSquares(squares.map((v, k) => {
      if (k === i) return "X";
      return v;
    }));
    setPlayer("O");
  } else {
    setSquares(squares.map((v, k) => {
      if (k === i) return "O";
      return v;
    }));
    setPlayer("X");
  }
}

const renderSquare = (i, squares, setSquares, player, setPlayer) => {
  return (
    <Square
      value={squares[i]}
      onClick={() => handleClick(i, squares, setSquares, player, setPlayer)}
    />
  );
}

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState('X');

  const winner = calculateWinner(squares);
  const end = calculateEnd(squares);
  let status;

  status = "Jogador atual: " + player;

  if (end) {
    status = "Empate.";
  }

  if (winner) {
    status = "Vencedor: " + winner;
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0, squares, setSquares, player, setPlayer)}
        {renderSquare(1, squares, setSquares, player, setPlayer)}
        {renderSquare(2, squares, setSquares, player, setPlayer)}
      </div>
      <div className="board-row">
        {renderSquare(3, squares, setSquares, player, setPlayer)}
        {renderSquare(4, squares, setSquares, player, setPlayer)}
        {renderSquare(5, squares, setSquares, player, setPlayer)}
      </div>
      <div className="board-row">
        {renderSquare(6, squares, setSquares, player, setPlayer)}
        {renderSquare(7, squares, setSquares, player, setPlayer)}
        {renderSquare(8, squares, setSquares, player, setPlayer)}
      </div>
    </div>
  );
}

export default Board