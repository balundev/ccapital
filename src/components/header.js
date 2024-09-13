import React, { useEffect, useState } from 'react';
import './header.scss';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header({ scrollHome, scrollLeasings, scrollProducts, scrollCredits, scrollContact, scrollToOurteam }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuActive, setMenuActive] = useState(false); // New state to control the delay

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const openMenu = () => {
    setShowMobileMenu(true); // Set to true first to make the menu visible
    setTimeout(() => {
      setMenuActive(true); // Add the "open" class after a short delay
    }, 100); // 100ms delay to ensure the menu is visible first
  };

  const closeMenu = () => {
    setMenuActive(false); // Remove "open" class first
    setTimeout(() => {
      setShowMobileMenu(false); // Close menu after transition ends
    }, 500); // Match the transition duration to smoothly close the menu
  };

  return (
    <header id="header">
      <div className="containerMax" style={{ backgroundColor: 'black' }}>
        {!isMobile && (
          <div className="header-contact">
            <div className="contact-container">
              <PhoneAndroidIcon />+48 665 085 131
              <div style={{ width: '15px' }}></div>
              <PhoneAndroidIcon />+48 516 706 699
              <div style={{ width: '15px' }}></div>
              <MailOutlineIcon /> biuro@collectcapital.pl
            </div>
            <div className="contact-container">
              <a
                style={{
                  textDecoration: 'none',
                  listStyle: 'none',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'all 0.5s',
                }}
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookIcon className="scaleEffectFB" />
              </a>
            </div>
          </div>
        )}
      </div>

      <div className="containerMax" style={{ backgroundColor: '#474747' }}>
        <div className="header-details">
          <div>
            <a onClick={scrollHome}>
              <div className="logo"></div>
            </a>
          </div>
          {!isMobile ? (
            <ul className="menu">
              <li><a onClick={scrollCredits}>Kredyty</a></li>
              <li><a onClick={scrollLeasings}>Leasing</a></li>
              <li><a onClick={scrollProducts}>Produkty Firmowe</a></li>
              <li><a onClick={scrollToOurteam}>O nas</a></li>
              <li><a onClick={scrollContact}>Kontakt</a></li>
            </ul>
          ) : (
            <MenuIcon onClick={openMenu} style={{ color: 'white' }} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && showMobileMenu && (
        <div className={`mobile-menu ${menuActive ? 'open' : ''}`}>
          <div className="mobile-menu-header">
            <CloseIcon className="close-icon" onClick={closeMenu} />
          </div>
          <ul className="mobile-menu-items">
            <li><a onClick={() => { scrollCredits(); closeMenu(); }}>Kredyty</a></li>
            <li><a onClick={() => { scrollLeasings(); closeMenu(); }}>Leasing</a></li>
            <li><a onClick={() => { scrollProducts(); closeMenu(); }}>Produkty Firmowe</a></li>
            <li><a onClick={() => { scrollToOurteam(); closeMenu(); }}>O nas</a></li>
            <li><a onClick={() => { scrollContact(); closeMenu(); }}>Kontakt</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
