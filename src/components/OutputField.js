import classes from "./OutputField.module.css";

function OutputField({ displayedText }) {
  return (
    <>
      <input
        className={classes.outputFieldMain}
        type="text"
        placeholder="..."
        value={displayedText}
      />
    </>
  );
}

export default OutputField;
