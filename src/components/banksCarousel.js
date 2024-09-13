import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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
    return (
      <section ref={ref} id="carousel" className="carouselAbout">
        <h2>Współpracujemy z wieloma bankami</h2>
        <div className="carousel-wrapper">
          <div className="carousel-track">
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
