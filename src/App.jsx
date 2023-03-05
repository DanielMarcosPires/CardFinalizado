import { useState } from "react";

import "./color/style.scss";
import "./App.css";

import Card from "./Components/Card";
import JSONdata from "./data.json";

function App() {
  const [soma, setSoma] = useState(0);

  function somaTotal(event) {
    const inputs = document.querySelectorAll(".valores");
    let sum = 0
    inputs.forEach(input => sum += Number(input.value))
    setSoma(sum / inputs.length)
    console.log(sum);
  }
  console.log(soma);
  return (
    <div className="App">
      <Card total={parseInt(soma)}>
        {JSONdata.map((item) => {
          return (
            <li
              key={"oi"}
              style={{ background: item.corSecundario }}
              className="CardItem"
            >
              <div>
                <img src={item.icon} alt />
                <p style={{ color: item.corPrimario }}>{item.category}</p>
              </div>
              <p className="d-flex">
                <input
                  className="valores"
                  defaultValue={0}
                  max={100}
                  min={0}
                  step="any"
                  type="number"
                  onChange={somaTotal}
                  name="input-$"
                />{" "}
                <span>/100</span>
              </p>
            </li>
          );
        })}
      </Card>
    </div>
  );
}

export default App;
