import { useState } from "react";

import InputField from "./InputField";
import OutputField from "./OutputField";

import classes from "./Calculator.module.css";

function Calculator() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className={classes.calculatorWrapper}>
      <div className={classes.calculatorMain}>
        <InputField changeHandler={handleChange} />
        <OutputField displayedText={text} />
      </div>
    </div>
  );
}

export default Calculator;
