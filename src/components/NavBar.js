import Cartwidget2 from './CartWidget2';
import './NavBar.css';

const NavBar = () => {
    return (
        
        <nav className="Barra">
            <ul>
                <li>Home</li>
                <li>Buy</li>
                <li>Nosotros</li>
                <li>Contacto</li>
                
            </ul>
            <Cartwidget2 />
        </nav>
        
    );
};

export default NavBar