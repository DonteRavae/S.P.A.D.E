//React
import React, { FunctionComponent } from 'react';
//Assets
import spadeLogo from '../../assets/SPADE FINAL SVG.svg';
import searchIcon from '../../assets/search-icon.svg';
//Styles
import './header-nav.styles.scss';

const HeaderNavigation: FunctionComponent = () => (
    <header className="header-nav">
        {/*Logo */}
        <img src={spadeLogo} alt="S.P.A.D.E Logo" className="spade-logo" />

        {/* 
            -Underline text on hover
            -Click events render new page
        */}
        <nav>Connect</nav>
        <nav>Store</nav>

        {/*Universal Searchbar */}
        <section className="searchbar">
            <img src={searchIcon} alt="Search" className="search-icon" />
            <input type="search" name="spadeQuery" id="header-nav-input" placeholder="Search..." />
        </section>

        {/*User Registration & Login 
            -Scale icon on hover
            -Click event opens an appended container with register/login forms
        */}
        <section className="registration-and-login">
            <span className="far fa-user-circle fa-lg registration-and-login-btn"></span>
        </section>
    </header>
);

export default HeaderNavigation;