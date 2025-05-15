import { IoIosSettings } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import girafa from '../assets/girafa.jpg';
import react from '../assets/react.svg';

const Products = () => {
  return (
    <div className="mainContainer">
      <div className="topBar">
        <div className="logoContainer">
          <img src={react} className="logo" alt="logo" />
        </div>
        <div className="searchContainer">
          <input type="text" placeholder="Procurar" className="searchInput" />
        </div>
        <div className="buttons">
          <IoIosSettings className="icon" />
          <FaShoppingCart className="icon" />
          <CgProfile className="icon" />
        </div>
      </div>
      <div className='bannerContainer'>
        <img src={girafa} alt="girafa" className='productImg' />
      </div>
      <div>
      </div>
    </div>
  );
};

export default Products;
