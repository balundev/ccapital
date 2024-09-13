import React, {useState} from 'react';
import './credits.scss';
import { ReactComponent as ApartmentIcon } from '../assets/apartments.svg';

const Credits = React.forwardRef((props, ref) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  return (
    <section ref={ref} id="credits"  className={isMobile && 'mobileCredits'}>
      <div  className={isMobile? 'maxwidthContainer maxwidthContainer_mobile' : 'maxwidthContainer'}>
      <div className='leftContainer'>
        <div className='logoContainer'>
            <ApartmentIcon style={{fontSize: '10rem'}}></ApartmentIcon>
            <p className="descriptionLogo">Kredyty</p>
        </div>
      </div>
      <div className='rightContainer'>
        <div className='productDescription'>
            <span className='productDesc'>O PRODUKCIE</span>
            <h1>SZUKASZ KREDYTU?</h1>
            <p>Szukasz finansowania i nie wiesz do którego banku się
              udać? Nie trać czasu i skorzystaj z naszej pomocy
              zupełnie za darmo. Niezależnie od rodzaju kredytu i jego
              przeznaczenia znajdziemy finansowanie które spełni
              Twoje oczekiwania. </p>
              <p>Współpracujemy z blisko 20 wiodącymi bankami na
              rynku, dzięki temu w jednym miejscu porównasz oferty
              każdego z nich, a następnie złożymy wnioski kredytowe
              oszczędzając tym samym Twój czas i pieniądze!</p>
             
            </div>
      </div>
      </div>
    </section>
  );
})

export default Credits;
