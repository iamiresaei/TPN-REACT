import React, { useState, useEffect } from 'react';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect (() =>{
        window.addEventListener('resize', () => {
            setIsOpen(false)
        });
    } , [])

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return(
        <header className="header">
            <div className="menu-bar">
                <button className="hamburger-button" onClick={toggleMenu}>
                    <i className={`fa-solid fa-bars ${isOpen ? 'fa-solid fa-xmark' : ''}`}></i>
                </button>
            <div className={`menu ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li>
                        <a className="nav-link" href="#"><i className="fa-solid fa-cart-arrow-down "></i> خرید سرویس</a>
                    </li>
                    <li>
                        <a className="nav-link" href="#"><i className="fa-solid fa-download"></i> کانکشن</a>
                    </li>
                    <li>
                        <a className="nav-link" href="https://zil.ink/amirrazor?fbclid=pazxh0bgnhzw0cmteaaab-sebski-smxcnctoyerzarparos9yusiiesifrpoicaa9vfsfovvqgn0_aem_iqwpzpquoa_0mbntxf0ojq" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-phone-volume"></i> ارتباط</a>
                    </li>
                    <li>
                        <a className="nav-link" href="#"><i className="fa-solid fa-circle-user"></i> درباره</a>
                    </li>
                </ul>
            </div>
            </div>
            <div className="logo-bar">
                <div className="logo">
                    <img src="/images/other/tpn1.png" alt="لوگوی TPN" />
                </div>
            </div>
            <nav className="nav-bar">
                <div className="nav">
                    <a className="nav-link" href="#"><i className="fa-solid fa-cart-arrow-down "></i> خرید سرویس</a>
                </div>
                <div className="nav">
                    <a className="nav-link" href="#"><i className="fa-solid fa-download"></i> کانکشن</a>
                </div>
                <div className="nav">
                    <a className="nav-link" href="https://zil.ink/amirrazor?fbclid=pazxh0bgnhzw0cmteaaab-sebski-smxcnctoyerzarparos9yusiiesifrpoicaa9vfsfovvqgn0_aem_iqwpzpquoa_0mbntxf0ojq" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-phone-volume"></i> ارتباط</a>
                </div>
                <div className="nav">
                    <a className="nav-link" href="#"><i className="fa-solid fa-circle-user"></i> درباره</a>
                </div>
            </nav>
            <div className="user-bar">
                <div className="cart">
                    <i className="fa-solid fa-basket-shopping"></i>
                </div>
                <div className="login">
                    <i className="fa-solid fa-right-to-bracket"></i>
                    <a href="#">ورود</a>
                </div>
            </div>
        </header>
    )
}