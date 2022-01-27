import React from 'react';
import './Header.css';
import img from './imagenes/criptoheader.png';

const Header = (props) => {
  return (
    <div className='Header'>
        <img src={img} alt='foto encabezado' />
        <h1>{props.title}</h1>
    </div>
  );
    
};

export default Header;
