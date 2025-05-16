import '../css/artisan.css';
import React from 'react';
import girafa from '../assets/girafa.jpg';
import { CgProfile } from "react-icons/cg";
import { IoIosExit } from "react-icons/io";
import {Link, useNavigate} from 'react-router-dom'

const Artisan = () => {
    const navigate = useNavigate();
    
  return (
    <div className="container">
      <aside className="sidebar">
        <div className="profile-icon">
            <CgProfile className='icon' />
        </div>
        <button className="btn">Perfil</button>
        <div className='btn-group'>
        <button className="btn active">Produtos</button>
        <button className="btn" onClick={() => navigate(`/sales`)}>Vendas</button>
        </div>
        <button className="btn logout"><IoIosExit className='icon' /> Sair</button>
        <a href="/" className="back-link">Voltar para início</a>
      </aside>

      <main className="main-content">
        <div className='top-bar'>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button className="search-btn">🔍</button>
        </div>
          <button className="add-product-btn" onClick={() => navigate(`/addproduct`)} >+ Adicionar Produto</button>
        </div>
        <div className="product-grid">
          {Array(6).fill(0).map((_, index) => (
            <div className="product-card" key={index}>
              <img src={girafa} alt="Product" />
              <p>Title</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Artisan;