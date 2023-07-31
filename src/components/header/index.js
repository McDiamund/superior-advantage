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
            <li><Link to="/"><p>HOME</p></Link></li>
            <li><Link to="/buyers"><p>BUYING A HOME</p></Link></li>
            <li><Link to="/sellers"><p>SELLING A HOME</p></Link></li>
            <li><Link to="/qwr"><p>QWR</p></Link></li>
            <li><Link to="/surplus"><p>SURPLUS FUNDS</p></Link></li>
            <li style={{ flexGrow: "1"}}></li>
            <li><p>478-862-9533</p></li>
          </ul>

          <div className={styles.mobileNavbar}>
            <div className={styles.mobileNavButton} onClick={handleMenuToggle}>
              <img src={isMenuOpen ? closeButton : menuButton} />
            </div>

            <ul style={{ display: isMenuOpen ? 'flex' : 'none'}} className={styles.mobileMenu}>
              <li><a href="/"><p>HOME</p></a></li>
              <li><p>BUYING A HOME</p></li>
              <li><p>SELLING A HOME</p></li>
              <li><a><p>QWR</p></a></li>
              <li><a href="/surplus"><p>SURPLUS FUNDS</p></a></li>
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
