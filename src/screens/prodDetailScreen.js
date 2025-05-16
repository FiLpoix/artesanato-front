import '../css/products.css';
import { IoIosSettings } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import girafa from '../assets/girafa.jpg';
import react from '../assets/react.svg';
import {Link} from 'react-router-dom'

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
      <div className="productContainer">
        <img src={girafa} alt="Produto" className="productImg" />
        <div className="productInfo">
          <h2 className="productTitle">title</h2>
          <div className="productDescription">desc</div>
          <div className="productFooter">
            <span className="productPrice">R$20,99</span>
            <button className="iconButton">🛒</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
