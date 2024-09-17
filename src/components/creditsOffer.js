import React,{useState} from 'react';
import './creditsOffer.scss';
import {ReactComponent as DescriptionIcon}from '../assets/document.svg';
import {ReactComponent as MonetizationOnIcon} from '../assets/handwithmoney.svg';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

const CreditsOffer = React.forwardRef((props, ref) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  return (
    <section ref={ref} id="creditsOffer" className={isMobile && 'creditsOffer_mobile'}>
      <div className='creditsOfferContainer'>
        <div className='productDescription'>
          {!isMobile && <span className='productDesc'>Nasze usługi</span>}
          
          <h1>RODZAJE KREDYTÓW</h1>
        </div>
        <div  className={isMobile ? "creditCardsContainer creditCardsContainer_mobile" : "creditCardsContainer"}>
          <div className="cardsOffer">
            <DescriptionIcon className='iconTopic'></DescriptionIcon>
            <h3>Kredyt hipoteczny</h3>
            <p>Spełnij marzenia o własnym M z
              naszą pomocą! Porównamy
              oferty największych banków na
              polskim rynku i znajdziemy tę
              najkorzystniejszą dla Ciebie.
              Zapewnimy kompleksową
              obsługę na każdym etapie - od
              porównania ofert, przez dobór
              odpowiedniego kredytu, aż po
              pomoc w formalnościach.
            </p>
          </div>
          <div className="cardsOffer">
            <MonetizationOnIcon className='iconTopic'></MonetizationOnIcon>
            <h3>Kredyt gotówkowy</h3>
            <p>Zrealizuj swoje plany już dziś!
              Zapewniamy szybki i łatwy
              dostęp do środków na dowolny
              cel, np. remont, wymarzoną
              wycieczkę czy nieprzewidziane

              wydatki.
            </p>
          </div>
          <div className="cardsOffer">
            <CurrencyExchangeIcon style={{height: '50px'}} className='iconTopic'></CurrencyExchangeIcon>
            <h3 style={{height: '22%'}}>Refinansowanie
              kredytu hipotecznego</h3>
            <p style={{height: '59%'}}>Zmieniły się stopy procentowe na
              korzystniejsze, a Ty wciąż płacisz
              tak samo wysoką ratę? Sprawdź

              oferty refinansowania!
              Pomożemy Ci przenieść Twój
              kredyt hipoteczny do innego
              banku na lepszych warunkach,
              tym samym Ty obniżysz swoją
              ratę i zaoszczędzisz pieniądze.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
})

export default CreditsOffer;
