import React, { useState } from "react";

function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

function EightBall({ answers }) {
  const [color, setColor] = useState("black");
  const [message, setMessage] = useState("Think of a Question");

  function handleBallClick() {
    const randomIndex = getRandomIndex(answers.length);
    setColor(answers[randomIndex].color);
    setMessage(answers[randomIndex].msg);
  }

  const ballStyle = {
    backgroundColor: color,
    borderRadius: "50%",
    width: "200px",
    height: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  };

  return (
    <div style={ballStyle} onClick={handleBallClick}>
      <p style={{ color: "white" }}>{message}</p>
    </div>
  );
}

export default EightBall;
