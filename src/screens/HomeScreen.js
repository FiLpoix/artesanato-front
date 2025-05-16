import '../css/home.css'
import react from '../assets/react.svg'
import logo from '../assets/logo.png'
import { IoIosSettings } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import girafa from '../assets/girafa.jpg'
import { useState, useEffect } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const HomeScreen = () => {
    const [products, setProducts] = useState([]);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState({
        products: true,
    })
    const navigate = useNavigate();

 useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedEmail = localStorage.getItem('email');
        if (storedEmail) {
          setEmail(storedEmail);
        }
      } catch (error) {
        console.error('Erro ao buscar usuário:', error);
      }
    };
    async function fetchProducts() {
       try {
         const response = await api.get("/api/products/");
         setProducts(response.data);
       } catch (error) {
         console.error("Erro ao buscar pontos:", error);
       } finally {
         setLoading((prev) => ({ ...prev, products: false }));
       }
     }

     fetchUserData();
     fetchProducts();
  }, []);


    return(
        <div className='mainContainer'>
            <div className='topBar'>
                <div className='logoContainer'>
                    <img src={logo} className='logo' alt='logo' />
                </div>
                <div className='searchContainer'>
            <input type='text' placeholder='Procurar' className='searchInput' />
                </div>
                <div className='buttons'>
            <IoIosSettings className='icon' onClick={() => navigate(`/artisan`)}  />
            <FaShoppingCart className='icon' />
            <CgProfile className='icon' onClick={() => navigate(`/login`)} />
                </div>
            </div>
            <div className='bannerContainer'>
            {products && products.length > 0 ? (
    <img 
      src={products[0].imagem} 
      className='bannerImg' 
      alt={products[0].nome || "qualquer"} 
      onError={(e) => {
        e.target.src = '../assets/girafa.jpg';
        e.target.alt = "girafa";
      }}
      onClick={() => navigate(`/products/${products[0].id}`)}
    />
  ) : (
    <div className="bannerPlaceholder">
      <img src={girafa} alt='girafa promocional' className='bannerImg'/>
    </div>
  )}
            </div>

            <div className='mainSearch'>
                <input type="text" className='mainSearchInput' />
            </div>
                <div className='productList'>
                   {products.map((product) => (
                        <div key={product.id} className='card' onClick={() => navigate(`/products/${product.id}`)}>
                            <img 
                                src={product.imagem} 
                                alt={product.nome || `Produto ${product.id}`}
                            style={{width:'100%', height:'96px', objectFit: 'cover'}}/>
                            <div className="product-info">
                                <h3>{product.nome}</h3>
                                <p>R$ {product.preco}</p>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    )
}

export default HomeScreen;