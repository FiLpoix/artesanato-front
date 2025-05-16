import '../css/products.css';
import { IoIosSettings } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import girafa from '../assets/girafa.jpg';
import react from '../assets/react.svg';
import {Link, useParams, useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react';
import api from '../services/api';
import logo from '../assets/logo.png'

const Products = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/api/products/${id}/`);
        setProduct(response.data);
      } catch (err) {
        console.error("Erro ao buscar produto:", err);
        setError("Produto não encontrado");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleBuy = () => {
    alert( "compra efetuada com sucesso.");
    window.location.href = "/";
  }


  return (
    <div className="mainContainer">
      <div className="topBar">
        <div className="logoContainer" onClick={() => navigate(`/`)}>
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="searchContainer">
          <input type="text" placeholder="Procurar" className="searchInput" />
        </div>
        <div className="buttons">
          <IoIosSettings className="icon" onClick={() => navigate(`/artisan`)} />
          <FaShoppingCart className="icon" />
          <CgProfile className="icon"  onClick={() => navigate(`/login`)} />
        </div>
      </div>
      <div className="productContainer">
         <img 
          src={product?.imagem || girafa} 
          alt={product?.nome || "Produto"} 
          className="productImg"
        />
        <div className="productInfo">
          <h2 className="productTitle">{product?.nome}</h2>
          <div className="productDescription">{product?.descricao}</div>
          <div className="productFooter">
            <span className="productPrice">R${product?.preco}</span>
            <button className="iconButton" onClick={() => handleBuy()}>🛒</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
