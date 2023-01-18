import React from "react";
import { useState } from "react";

import Coin from "./Coin";
import Scores from "./Scores";
import headsImage from "./Heads-Image.webp";
import tailsImage from "./Tails-Image.jpeg";

const coinSides = {
  1: { side: "heads", image: headsImage },
  2: { side: "tails", image: tailsImage },
};

function Dashboard() {
  const [headsScore, setHeadsScore] = useState(0);
  const [tailsScore, setTailsScore] = useState(0);


  setHeadsScore(currScore => currScore++);
  setTailsScore(currScore => currScore++);

  function getRandomSide() {
    const randomIndex = Math.floor(Math.random * coinSides.length);
    return coinSides[randomIndex];
  }

  function flipCoin() {
    const flippedSize = getRandomSide();
    if (flippedSize === 1) {
      setHeadsScore();
    } else {
      setTailsScore();
    }
  }

  return (
    <div>
      <Coin image= />
      <Scores heads={headsScore} tails={tailsScore} />
      <button onClick={flipCoin}></button>
    </div>
  );
}

export default Dashboard;
