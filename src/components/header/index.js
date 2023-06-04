import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import styles from './index.module.css';
import logo from 'assets/logo.png';
import menuButton from 'assets/menu.svg';
import closeButton from 'assets/close.svg';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={styles.header}>

        {/* Logo */}

        <div className={styles.logoContainer}>
          <div className={styles.logo}>
            <img src={logo} />
          </div>
        </div>

        {/* Navigation Bar */}

        <div className={styles.navbar}>
          <ul className={styles.menu}>
            <li><p>HOME</p></li>
            <li><p>RESOURCES</p></li>
            <li><p>SURPLUS FUNDS ASSISTANCE</p></li>
            <li><p>CONTACT US</p></li>
          </ul>

          <div className={styles.mobileNavbar}>
            <div className={styles.mobileNavButton} onClick={handleMenuToggle}>
              <img src={isMenuOpen ? closeButton : menuButton} />
            </div>

            <ul style={{ display: isMenuOpen ? 'flex' : 'none'}} className={styles.mobileMenu}>
              <li><p>HOME</p></li>
              <li><p>RESOURCES</p></li>
              <li><p>SURPLUS FUNDS ASSISTANCE</p></li>
              <li><p>CONTACT US</p></li>
            </ul>

          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
}

export default Header;
