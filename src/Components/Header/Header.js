import React from 'react';
import './Header.css';

// Styled Components

// Components
import {
  SearchBar,
  MenuItem
} from '../../Common/CommonIndex';

const Header = () => {
  return (
    <div className="header-wrapper">
      <header>
        <h3>My Cart</h3>
        <div className="menu-items-wrapper">
          <MenuItem>Menu Item 1</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
          <MenuItem>Menu Item 3</MenuItem>
        </div>
        <div className="search-wrapper">
          <SearchBar />
        </div>
      </header>
    </div>
  )
}

export default Header;