import logo from "./logo.svg";
import "./App.css";
import dice from "./images/icon-dice.svg";
import divided from "./images/pattern-divider-mobile.svg";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let fetchData = async (url) => {
      let response = await fetch(url);
      let receivedData = await response.json();
      console.log(receivedData);
      setData(receivedData);
      setLoading(false);
    };
    fetchData("https://api.adviceslip.com/advice");
  }, []);
  return (
    <div className="App">
      {loading ? (
        <p>loading...</p>
      ) : (
        <div className="data-div">
          <p>
            <span>ADVICE #{data.slip.id}</span>
          </p>
          <p>{data.slip.advice}</p>
          <img className="divide" src={divided} alt="" />
        </div>
      )}
      <div>
        <img className="dice" src={dice} alt="" />
      </div>
    </div>
  );
}

export default App;
