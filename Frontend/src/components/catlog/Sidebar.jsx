
import "../../styles/Sidebar.css"
import Category from "./sidebar/Category";
import Colors from "./sidebar/Colors";
import Price from "./sidebar/Price";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        {/* <div className="logo-container">
          <h1>🛒</h1>
        </div> */}
       
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;