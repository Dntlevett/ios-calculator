import "../src/app.scss";
import React, { useState } from "react";

function Calculator() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };
  return (
    <>
      <div className="container">
        <form>
          <input type="text" className="inputField" value={result} />
        </form>

        <div className="keypad">
          <div className="row1">
            <button onClick={clear} className="input input__alt" id="clear">
              AC
            </button>
            <button name="+" className="input input__alt">
              +/-
            </button>
            <button name="%" className="input input__alt">
              %
            </button>
            <button name="/" className="input" onClick={handleClick}>
              /
            </button>
          </div>
          <div className="row2">
            <button name="7" className="number" onClick={handleClick}>
              7
            </button>
            <button name="8" className="number" onClick={handleClick}>
              8
            </button>
            <button name="9" className="number" onClick={handleClick}>
              9
            </button>
            <button name="*" className="input" onClick={handleClick}>
              x
            </button>
          </div>
          <div className="row3">
            <button name="4" className="number" onClick={handleClick}>
              4
            </button>
            <button name="5" className="number" onClick={handleClick}>
              5
            </button>
            <button name="6" className="number" onClick={handleClick}>
              6
            </button>
            <button name="-" className="input" onClick={handleClick}>
              -
            </button>
          </div>
          <div className="row4">
            <button name="1" className="number" onClick={handleClick}>
              1
            </button>
            <button name="2" className="number" onClick={handleClick}>
              2
            </button>
            <button name="3" className="number" onClick={handleClick}>
              3
            </button>
            <button name="+" className="input" onClick={handleClick}>
              +
            </button>
          </div>
          <div className="row5">
            <button
              name="0"
              className="number number__spl"
              onClick={handleClick}
            >
              0
            </button>
            <button name="." className="number" onClick={handleClick}>
              .
            </button>
            <button onClick={calculate} className="input" id="result">
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
