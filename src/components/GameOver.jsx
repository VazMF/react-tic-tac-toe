export default function GameOver({ winner }) {
  const message = winner ? `${winner} won!` : "It's a draw!";

  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {message}
      <p>
        <button>Rematch!</button>
      </p>
    </div>
  );
}
