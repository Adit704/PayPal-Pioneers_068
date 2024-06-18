import "../../../styles/Category.css";
import { Header } from "../../Header";
import Input from "./Input";


function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="White wine"
          title="White wine"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Red wine"
          title="Red wine"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Rose wine"
          title="Rose wine"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Wine sets"
          title="Wine sets"
          name="test"
        />
      </div>
      {/* <Header handleChange={handleChange} value={value}  /> */}
         

    </div>
  );
}

export default Category;