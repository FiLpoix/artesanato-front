import React, {useState, useEffect} from 'react';
import '../css/addProduct.css';
import {Link, useNavigate} from 'react-router-dom'
import api from '../services/api';

const AddProduct = () => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [imagem, setImagem] = useState(null);
  const [categoria, setCategorias] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await api.get('/api/categories/');
        setCategorias(response.data);
      } catch (err) {
        console.error('Erro ao carregar categorias:', err);
      }
    };
    fetchCategorias();
  }, []);

   const handleImageChange = (e) => {
    setImagem(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');


    if (!nome || !descricao || !preco || !categoriaSelecionada || !imagem) {
      setError('Por favor, preencha todos os campos');
      setLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append('nome', nome);
      formData.append('descricao', descricao);
      formData.append('preco', preco);
      formData.append('categoria', categoriaSelecionada);
      formData.append('imagem', imagem);

      const response = await api.post('/api/products/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 201) {
        alert('Produto adicionado com sucesso!');
        navigate('/artisan');
      }
    } catch (err) {
      console.error('Erro ao adicionar produto:', err);
      setError(err.response?.data?.message || 'Erro ao adicionar produto');
    } finally {
      setLoading(false);
    }
  };

  return (
     <form className="add-product-container" onSubmit={handleSubmit}>
      <input type="text" placeholder="Título do produto" className="input title" value={nome}
          onChange={(e) => setNome(e.target.value)}
          required />
      <textarea placeholder="Descrição do produto" className="input desc" value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required />

        <div className="form-group">
          <label htmlFor="categoria">Categoria:</label>
          <select
            id="categoria"
            className="input"
            value={categoriaSelecionada}
            onChange={(e) => setCategoriaSelecionada(e.target.value)}
            required
          >
            <option value="">Selecione uma categoria</option>
            {categoria.map(cat => (
              <option key={cat.id} value={cat.id}>
                {cat.nome}
              </option>
            ))}
          </select>
        </div>

      <div className="bottom-section">
        <div className="image-upload">
          <label htmlFor="image">Imagem</label>
          <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
            {imagem && (
              <div className="image-preview">
                <p>Pré-visualização:</p>
                <img 
                  src={URL.createObjectURL(imagem)} 
                  alt="Pré-visualização" 
                  style={{ maxWidth: '200px', maxHeight: '200px' }}
                />
              </div>
            )}
        </div>

        <div className="price-btn">
          <input type="number" id="preco"
                placeholder="0.00"
                className="input price"
                step="0.01"
                min="0"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
                required />
          <button className="submit-btn">Adicionar Produto</button>
        </div>
      </div>
    </form>
  );
};

export default AddProduct;