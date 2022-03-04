import React, { useEffect, useState } from "react";

import img from "./assets/icon-dice.svg";
import divider from "./assets/pattern-divider-desktop.svg";
const App = () => {
  const [advice, setAdvice] = useState();
  const [id, setID] = useState();
  const getAdvice = async () => {
    const url = "https://api.adviceslip.com/advice";
    try {
      const response = await fetch(url);
      //   console.log(response);
      const data = await response.json();
      const { advice, id } = data.slip;
      setID(id);
      setAdvice(advice);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <>
      <main>
        <div className="card">
          <h3 className="advice-id">ADVICE #“ {id} “</h3>
          <h2 className="advice">{advice}</h2>
          <div className="divider">
            <img src={divider} alt="divider-patter" />
          </div>
          <button onClick={() => getAdvice()} className="dice">
            <img src={img} alt="dice-icon" />
          </button>
        </div>
      </main>
    </>
  );
};

export default App;
