import '../css/home.css'
import react from '../assets/react.svg'
import { IoIosSettings } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import girafa from '../assets/girafa.jpg'

const HomeScreen = () => {

    return(
        <div className='mainContainer'>
            <div className='topBar'>
                <div className='logoContainer'>
                    <img src={react} className='logo' alt='logo' />
                </div>
                <div className='searchContainer'>
            <input type='text' placeholder='Procurar' className='searchInput' />
                </div>
                <div className='buttons'>
            <IoIosSettings className='icon' />
            <FaShoppingCart className='icon' />
            <CgProfile className='icon' />
                </div>
            </div>
            <div className='bannerContainer'>
            <img src={girafa} className='bannerImg' alt="girafa" />
            </div>

            <div className='mainSearch'>
                <input type="text" className='mainSearchInput' />
            </div>
                <div className='productList'>
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className='card' ></div>
                    ))}
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