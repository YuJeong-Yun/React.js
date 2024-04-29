function Button({ text, color="black", children }) {
  const onClickButton = () => {
    console.log(text);
  };

  return (
    <button onClick={onClickButton} style={{ color: color }}>
      {text} - {color}
      {children}
    </button>
  );
}

export default Button;
