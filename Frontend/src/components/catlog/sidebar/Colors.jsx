import "../../../styles/Colors.css";
import Input from "./Input";

const Colors = ({ handleChange }) => {
  return (
    <>
      <div>
        <h2 className="sidebar-title color-title">Colors</h2>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test1" />
          <span className="checkmark all"></span>
          All
        </label>

        <Input
          handleChange={handleChange}
          value="Sparkling"
          title="Sparkling"
          name="test1"
          color="black"
        />

        <Input
          handleChange={handleChange}
          value="Red"
          title="Red"
          name="test1"
          color="Red"
        />

        <Input
          handleChange={handleChange}
          value="White"
          title="White"
          name="test1"
          color="#fff"
        />

      </div>
    </>
  );
};

export default Colors;