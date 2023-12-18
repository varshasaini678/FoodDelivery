import '../App.css';
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';
const Header = ()=>{
    const isOnline  = useOnline();
    return (
        <div className='header'>
            <div>Swiggy {isOnline?'You are online':'You are offline'}</div>

            <div className='nav-items'>
                <ul>
                  <Link to="/"><li>Home</li></Link>
                  <Link to="/about"><li>About Us</li></Link>  
                   <Link to="/contact"> <li>Contact US</li></Link>
                   <Link to="/cart"> <li>Cart</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Header