import "../../../styles/Category.css";
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
          value="Brunello di Montalcino, 0,75L"
          title="White wine"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Sancerre Blanc, 0,75L"
          title="Red wine"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Chablis Premier Cru, 0,75L"
          title="Rose wine"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Chateau Beaulieu Cuvee Alexandree, 0,75L"
          title="Wine sets"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;