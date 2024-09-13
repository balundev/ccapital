import React, { useState } from 'react';
import './home.scss'
import { ReactComponent as ApartmentIcon } from '../assets/apartments.svg';
import { ReactComponent as DirectionsCarIcon } from '../assets/caricon.svg';
import { ReactComponent as ImportantDevicesIcon } from '../assets/computerandphone.svg';
import About from './about';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';


const Home = React.forwardRef((props, ref) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  return (
    <section ref={ref} id="home" className={isMobile && 'mobile'}>
      <div className="container">
        <div className={isMobile ? 'blur-container blur-container_mobile' : 'blur-container'}>
          {!isMobile &&
            <div className='containerMaxwidth'>
              <div className="container-left">
                <About />
              </div>
            </div>}
          {isMobile && <div style={{ width: '80%', margin: 'auto', display: 'flex', flexDirection:'column', marginTop: '20px'}}>
            <p>
              Szukasz idealnego produktu finansowego, ale gubisz się w gąszczu ofert i skomplikowanych zapisów? Skorzystaj z bezpłatnej pomocy doświadczonego pośrednika!
            </p>
            <p>
              Nasi eksperci pomogą Ci wybrać produkt finansowy skrojony na miarę Twoich potrzeb i możliwości, oszczędzając Twój cenny czas i negocjując dla Ciebie najkorzystniejsze warunki. Nasze usługi są całkowicie darmowe dla klienta - wynagrodzenie otrzymujemy od banków i instytucji finansowych.
            </p>
            <p>Skontaktuj się z nami już dziś i przekonaj się, jak możemy Ci pomóc!
            </p>
            <div className='items-container_mobile'>
              <div className="singleOffer" onClick={props.scrollCredits}>
                <div className="defaultContent">
                  <ApartmentIcon className='offerItem'></ApartmentIcon>
                  <h2>Kredyty</h2>
                </div>
                <div className="hoverContent">
                  <h2>Sprawdź Ofertę</h2>
                  <KeyboardDoubleArrowDownIcon className='offerItem bounce'></KeyboardDoubleArrowDownIcon>
                </div>
              </div>
              <div className="singleOffer" onClick={props.scrollLeasings}>
                <div className="defaultContent">
                  <DirectionsCarIcon className='offerItem'></DirectionsCarIcon>
                  <h2>Leasing</h2>
                </div>
                <div className="hoverContent">
                  <h2>Sprawdź Ofertę</h2>
                  <KeyboardDoubleArrowDownIcon className='offerItem bounce'></KeyboardDoubleArrowDownIcon>
                </div>
              </div>
              <div className="singleOffer" onClick={props.scrollProducts}>
                <div className="defaultContent">
                  <ImportantDevicesIcon className='offerItem'></ImportantDevicesIcon>
                  <h2>Produkty Firmowe</h2>
                </div>
                <div className="hoverContent">
                  <h2>Sprawdź Ofertę</h2>
                  <KeyboardDoubleArrowDownIcon className='offerItem bounce'></KeyboardDoubleArrowDownIcon>
                </div>
              </div>
          </div>
          </div>}

        </div>
      </div>
      {!isMobile &&<div className="offer-container">
         <div className='items-container'>
          <div className='maxWidthRelative'>
            <div className="singleOffer" onClick={props.scrollCredits}>
              <div className="defaultContent">
                <ApartmentIcon className='offerItem'></ApartmentIcon>
                <h2>Kredyty</h2>
              </div>
              <div className="hoverContent">
                <h2>Sprawdź Ofertę</h2>
                <KeyboardDoubleArrowDownIcon className='offerItem bounce'></KeyboardDoubleArrowDownIcon>
              </div>
            </div>
            <div className="singleOffer" onClick={props.scrollLeasings}>
              <div className="defaultContent">
                <DirectionsCarIcon className='offerItem'></DirectionsCarIcon>
                <h2>Leasing</h2>
              </div>
              <div className="hoverContent">
                <h2>Sprawdź Ofertę</h2>
                <KeyboardDoubleArrowDownIcon className='offerItem bounce'></KeyboardDoubleArrowDownIcon>
              </div>
            </div>
            <div className="singleOffer" onClick={props.scrollProducts}>
              <div className="defaultContent">
                <ImportantDevicesIcon className='offerItem'></ImportantDevicesIcon>
                <h2>Produkty Firmowe</h2>
              </div>
              <div className="hoverContent">
                <h2>Sprawdź Ofertę</h2>
                <KeyboardDoubleArrowDownIcon className='offerItem bounce'></KeyboardDoubleArrowDownIcon>
              </div>
            </div>
          </div>
        </div>
      </div>}
    </section>




  );
})

export default Home;
