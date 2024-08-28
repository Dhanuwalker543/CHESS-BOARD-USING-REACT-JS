import React from 'react';
import './ChessBoard.css';

const Chessboard = () => {
  const pieces = {
    white: {
      king: '\u2654',
      queen: '\u2655',
      rook: '\u2656',
      bishop: '\u2657',
      knight: '\u2658',
      pawn: '\u2659'
    },
    black: {
      king: '\u265A',
      queen: '\u265B',
      rook: '\u265C',
      bishop: '\u265D',
      knight: '\u265E',
      pawn: '\u265F'
    }
  };

  const initialBoard = [
    [pieces.black.rook, pieces.black.knight, pieces.black.bishop, pieces.black.queen, pieces.black.king, pieces.black.bishop, pieces.black.knight, pieces.black.rook],
    [pieces.black.pawn, pieces.black.pawn, pieces.black.pawn, pieces.black.pawn, pieces.black.pawn, pieces.black.pawn, pieces.black.pawn, pieces.black.pawn],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    [pieces.white.pawn, pieces.white.pawn, pieces.white.pawn, pieces.white.pawn, pieces.white.pawn, pieces.white.pawn, pieces.white.pawn, pieces.white.pawn],
    [pieces.white.rook, pieces.white.knight, pieces.white.bishop, pieces.white.queen, pieces.white.king, pieces.white.bishop, pieces.white.knight, pieces.white.rook]
  ];

  const renderSquare = (rowIndex, colIndex) => {
    const isEven = (rowIndex + colIndex) % 2 === 0;
    const squareClass = isEven ? 'white-square' : 'black-square';
    return (
      <div key={`${rowIndex}-${colIndex}`} className={`square ${squareClass}`}>
        {initialBoard[rowIndex][colIndex]}
      </div>
    );
  };

  return (
    <div>
        <h1>WANNA LOOSE?</h1>
    <div className="chessboard">
      {initialBoard.map((row, rowIndex) =>
        row.map((_, colIndex) => renderSquare(rowIndex, colIndex))
      )}
    </div>
    </div>
  );
};

export default Chessboard;
