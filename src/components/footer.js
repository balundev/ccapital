import React, { useState } from 'react';
import './footer.scss';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = React.forwardRef((props, ref) => {
  // State variables for form inputs

  return (
    <footer ref={ref} className="footer">
      <div className="footerContainer">
        <div className="footer-content-left">
          <div className='logo'></div>
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
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
                <FacebookIcon  className='scaleEffectFB' ></FacebookIcon>
                {/* <InstagramIcon  className='scaleEffectINS'></InstagramIcon> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
})

export default Footer;
