const Button = ({ onClickHandler, value, title }) => {
    return (
      <button style={{border:"1px solid", padding:"7px"}} onClick={onClickHandler} value={value} className="btns">
        {title}
      </button>
    );
  };
  
  export default Button;