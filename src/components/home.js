import React from 'react';
import './home.scss'
import { ReactComponent as ApartmentIcon } from '../assets/apartments.svg';
import { ReactComponent as DirectionsCarIcon } from '../assets/caricon.svg';
import { ReactComponent as ImportantDevicesIcon } from '../assets/computerandphone.svg';
import About from './about';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const Home = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} id="home">
      <div className="container">
        <div className="blur-container">
          <div className='containerMaxwidth'>
            <div className="container-left">
              <About />
            </div>
          </div>
        </div>
      </div>
      <div className="offer-container">
        <div className='items-container'>
          <div className='maxWidthRelative'>
            <div className="singleOffer" onClick={props.scrollCredits}>
              <div className="defaultContent">
                <ApartmentIcon  className='offerItem'></ApartmentIcon>
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
      </div>
    </section>




  );
})

export default Home;
