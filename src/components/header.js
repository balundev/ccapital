import React, { useEffect, useState } from 'react';
import './header.scss';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu';

function Header({ scrollHome, scrollLeasings, scrollProducts, scrollCredits, scrollContact, scrollToOurteam }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = window.innerWidth <= 768;
  console.log(isMobile)
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0); // Check if scrolled beyond the top
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <header id='header'>
      <div className='containerMax' style={{ backgroundColor: 'black' }}>
        {!isMobile &&         <div className='header-contact' >
          <div className='contact-container'>
            <PhoneAndroidIcon></PhoneAndroidIcon>+48 665 085 131
            <div style={{ width: '15px' }}></div>
            <PhoneAndroidIcon></PhoneAndroidIcon>+48 516 706 699
            <div style={{ width: '15px' }}></div>
            <MailOutlineIcon></MailOutlineIcon> biuro@collectcapital.pl
          </div>
          <div className='contact-container'>
            <a style={{ textDecoration: 'none', listStyle: 'none', color: 'white', display: 'flex', alignItems: 'center', transition: 'all 0.5s' }} href='https://www.facebook.com/' target='_blank'><FacebookIcon className='scaleEffectFB'></FacebookIcon></a>
            {/* <div style={{ width: '5px' }}></div>
            <a style={{ textDecoration: 'none', listStyle: 'none', color: 'white', display: 'flex', alignItems: 'center', transition: 'all 0.5s' }} href='https://www.instagram.com/wojtekgola/' target='_blank'><InstagramIcon className='scaleEffectINS'></InstagramIcon></a> */}
          </div>
        </div>}

      </div>
      <div className='containerMax' style={{ backgroundColor: '#474747' }}>
        <div className='header-details'>

          <div><a onClick={scrollHome}> <div className='logo'></div></a></div>
          {!isMobile ?           <ul className='menu'>
            <li><a onClick={scrollCredits}>Kredyty</a></li>
            <li><a onClick={scrollLeasings}>Leasing</a></li>
            <li><a onClick={scrollProducts}>Produkty Firmowe</a></li>
            <li><a onClick={scrollToOurteam}>O nas</a></li>
            <li><a onClick={scrollContact}>Kontakt</a></li>
          </ul> : <MenuIcon style={{color: 'white'}}></MenuIcon>}

        </div>
      </div>
    </header>
  );
}

export default Header;
