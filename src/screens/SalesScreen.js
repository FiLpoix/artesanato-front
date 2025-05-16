import React from 'react';
import '../css/sales.css';
import { CgProfile } from "react-icons/cg";
import { IoIosExit } from "react-icons/io";
import {Link, useNavigate} from 'react-router-dom'

const Sales = () => {
  const navigate = useNavigate();

  const salesData = [
    { id: 1, name: 'Girafa', price: 'R$--,--' },
    { id: 2, name: 'Girafa', price: 'R$--,--' },
    { id: 3, name: 'Girafa', price: 'R$--,--' },
    { id: 4, name: 'Girafa', price: 'R$--,--' },
    { id: 5, name: 'Girafa', price: 'R$--,--' },
  ];

  return (
    <div className="container">
      <aside className="sidebar">
        <div className="profile-icon"><CgProfile className='icon' /></div>
        <button className="salesBtn">Perfil</button>
        <div className='salesBtn-group'>
        <button className="salesBtn" onClick={() => navigate(`/artisan`)} >Produtos</button>
        <button className="salesBtn active">Vendas</button>
        </div>
        <button className="salesBtn logout"><IoIosExit /> Sair</button>
        <a href="/" className="salesBack-link"  >Voltar para início</a>
      </aside>

      <main className="sales-container">
        <h2>Vendas</h2>
        <div className="sales-list">
          {salesData.map((sale) => (
            <div className="sale-item" key={sale.id}>
              <div className="sale-img-placeholder"></div>
              <span>{sale.name}</span>
              <span>{sale.price}</span>
              <span className="sale-options">...</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Sales;