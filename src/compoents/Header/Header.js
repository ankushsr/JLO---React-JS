import React from 'react';
import '../Header/Header.css';
import logoUrl from '../../images/logo.jpg';


const Header = () => {
  return (
    <div className='header'>
<img src={logoUrl} alt='Tesla'/>      
    </div>
  )
}

export default Header;
