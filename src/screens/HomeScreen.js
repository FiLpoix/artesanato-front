import '../App.css'
import react from '../assets/react.svg'
import { IoIosSettings } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import girafa from '../assets/girafa.jpg'

const HomeScreen = () => {

    const products = [
        <img src={girafa} className='product' alt='girafa' />,
        <img src={girafa} className='product' alt='girafa' />,
        <img src={girafa} className='product' alt='girafa' />,
    ]

    return(
        <div>
            <div className='topContent'>
            <div className='header'>
            <img src={react} className='logo' alt='logo' />
            <input type='text' placeholder='Procurar' />
            <IoIosSettings className='icon' />
            <FaShoppingCart className='icon' />
            <CgProfile className='icon' />
            </div>
            <div className='carrouselContainer'>
            <img src={girafa} className='Carrousel' alt="girafa" />
            </div>
            </div>
            <div className='productsContainer'>
                <input type="text" />
                <div className='productList'>
                    <ul>
                        { products.map((product) => <li>{product}</li>)}
                    </ul>
                </div>
            </div>
            <div className='footer' >
                <h1>about us</h1>
                <h1>Contacts</h1>
                <p>instagram</p>
                <p>facebook</p>
            </div>
        </div>
    )
}

export default HomeScreen;