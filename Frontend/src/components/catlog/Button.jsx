const Button = ({ onClickHandler, value, title }) => {
  // console.log(value)
    return (
      <button style={{border:"1px solid", padding:"7px"}} onClick={onClickHandler} value={value} className="btns">
        {title}
      </button>
    );
  };
  
  export default Button;