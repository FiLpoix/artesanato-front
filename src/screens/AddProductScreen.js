import React from 'react';
import '../css/addProduct.css';
import {Link} from 'react-router-dom'

const AddProduct = () => {
  return (
    <div className="add-product-container">
      <input type="text" placeholder="Título do produto" className="input title" />
      <textarea placeholder="Descrição do produto" className="input desc"></textarea>

      <div className="bottom-section">
        <div className="image-upload">
          <label htmlFor="image">Imagem</label>
          <input type="file" id="image" />
        </div>

        <div className="price-btn">
          <input type="text" placeholder="Preço" className="input price" />
          <button className="submit-btn">Adicionar Produto</button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;