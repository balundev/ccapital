import React, { useState } from 'react';
import './footer.scss';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'; // Import the arrow icon
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const Footer = React.forwardRef((props, ref) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handler for navigating back to the homepage
  const navigateToHomepage = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer ref={ref} className={isMobile ? 'footer mobile_footer' : 'footer'}>
      <div className="footerContainer">
        <div className="footer-content-left" style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', height: '50%', flexDirection: 'column-reverse' }}>
          <div className='logo'></div>
          {isMobile &&           <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px', width: '100%' }}>
            <a href="https://www.facebook.com/collectcapitalfinanse" style={{ color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }} target='_blank'><FacebookIcon className='scaleEffectFB' style={{ fontSize: '35px' }}></FacebookIcon></a>
            <a href="https://www.instagram.com/collect_capital" style={{ color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }} target='_blank'><InstagramIcon className='scaleEffectINS' style={{ fontSize: '35px' }}></InstagramIcon></a>
          </div>}

        </div>
        <div className="footer-content-right">
          <div className='services'>
            <h3>Zakres Usług</h3>
            <span onClick={props.scrollLeasings}>Leasing</span>
            <span onClick={props.scrollCredits}>Kredyty</span>
            <span onClick={props.scrollProducts}>Produkty Firmowe</span>
            <span onClick={props.scrollToOurteam}>O nas</span>
            <span onClick={props.scrollContact}>Kontakt</span>
          </div>
          {!isMobile &&
            <div className='socials'>
              <div style={{ display: 'flex', marginBottom: '15px' }} className="phoneDetail">
                <PhoneAndroidIcon style={{ fontSize: '35px', marginTop: '5px' }}></PhoneAndroidIcon>
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                  <span>+48 665 085 131</span>
                  <span>+48 516 706 699</span>
                </div>
              </div>
              <div style={{ display: 'flex', marginBottom: '15px' }} className="mailDetail">
                <MailOutlineIcon style={{ fontSize: '35px', marginTop: '5px' }}></MailOutlineIcon>
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                  <span>artur.staszkow@collectcapital.pl</span>
                  <span>kamil.kubowicz@collectcapital.pl</span>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', alignSelf: 'baseline' }}>
                <a href="https://www.facebook.com/collectcapitalfinanse" target='_blank'><FacebookIcon className='scaleEffectFB'></FacebookIcon></a>
                <a href="https://www.instagram.com/collect_capital" target='_blank'><InstagramIcon className='scaleEffectINS'></InstagramIcon></a>
              </div>
            </div>
          }
        </div>

        {/* Add the arrow for navigation */}

      </div>
      <div style={{ position: 'relative', backgroundColor: 'black', height: '3vh', minHeight: '30px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ margin: 0, padding: 0 }}>Copyrights &copy; CollectCapital Sp. z o.o</p>

        <KeyboardDoubleArrowUpIcon
          className="backToTopArrow"
          onClick={navigateToHomepage}
        />
      </div>
    </footer>
  );
});

export default Footer;
