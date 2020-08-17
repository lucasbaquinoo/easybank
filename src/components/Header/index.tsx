import React from 'react';

import logoIcon from '../../assets/images/logo.svg'
import menuIcon from '../../assets/images/icon-hamburger.svg'

import './styles.css';


const Header: React.FC = () => {
  return (
    <>
      <div className="title-bar">
        <img src={logoIcon} alt="EasyBank"/>
        <img src={menuIcon} alt="Menu"/>
      </div>
    </>
  );
}

export default Header;