
import Button from "./Button";
import "../../styles/Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Sancerre Blanc, 0,75L" title="Sancerre Blanc" />
          <Button onClickHandler={handleClick} value="Chablis Premier Cru, 0,75L" title="Chablis Premier Cru" />
          <Button onClickHandler={handleClick} value="Riesling Trocken, 0,75L" title="Riesling Trocken" />
          <Button onClickHandler={handleClick} value="Brunello di Montalcino, 0,75L" title="Brunello di Montalcino" />
        </div>
      </div>
    </>
  );
};

export default Recommended;