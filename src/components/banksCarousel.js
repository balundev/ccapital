import React, {useState} from 'react';
import './bankscarousel.scss';

const banks = [
  { class: `paribas`},
  { class: `city`},
  { class: `ing` },
  { class: `pekao`},
  { class: `millenniumbank` },
  { class: `bosbank`},
  { class: `alior`},
  { class: `santander`},
  { class: `mbank`},
  { class: `paribas`},
  { class: `city`},
  { class: `ing` },
  { class: `pekao`},
  { class: `millenniumbank` },
  { class: `bosbank`},
  { class: `alior`},
  { class:` santander`},
  { class: `mbank`},  
  { class: `paribas`},
  { class: `city`},
  { class: `ing` },
  { class: `pekao`},
  { class: `millenniumbank` },
  { class: `bosbank`},
  { class: `alior`},
  { class:` santander`},
  { class: `mbank`},
  
  
  
  
];

const BanksCarousel = React.forwardRef((props, ref) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    return (
      <section ref={ref} id="carousel" className="carouselAbout">
        <h2 style={isMobile ? {fontSize: '25px', textAlign: 'center'} : {}}>Współpracujemy z wieloma bankami</h2>
        <div className="carousel-wrapper">
          <div className={isMobile ? 'carousel-track carousel-track_mobile' : 'carousel-track'}>
            {banks.concat(banks).map((bank, index) => (
              <div key={index} className="bank-slide">
                <div className={bank.class + ' ' + 'bankItem'}></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  })
  
export default BanksCarousel;
