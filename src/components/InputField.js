function InputField({ changeHandler }) {
  return (
    <>
      <input type="text" placeholder="..." onChange={changeHandler}/>
    </>
  );
}

export default InputField;
