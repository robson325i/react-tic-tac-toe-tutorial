import React from "react";
import ReactDOM from "react-dom/client";
import io from "socket.io-client";
import Board from "./components/Board";
import "./index.css";

function Game() {
  // Game Init, estabilish connection with server.
  const socket = io('http://localhost:3001');
  socket.on('connect', () => {
    console.log('Socket Connected.');
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      {/* <div className="game-info">
        <div></div>
        <ol></ol>
      </div> */}
    </div>
  );
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
