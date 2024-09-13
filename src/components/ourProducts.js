import React, {useState} from 'react';
import './ourProducts.scss';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { ReactComponent as ImportantDevicesIcon } from '../assets/computerandphone.svg';

const OurProducts = React.forwardRef((props, ref) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  return (
    <section ref={ref} id="ourProducts" className={isMobile && 'mobileourProducts'}>
      <div className='leftContainer'>
        <div className='logoContainer'>
          <ImportantDevicesIcon style={{ height: '10rem' }}></ImportantDevicesIcon>
          <p className="descriptionLogo">Produkty Firmowe</p>
        </div>
      </div>
      <div className='rightContainer'>
        <div className='productDescription'>
          <span className='productDesc'>O PRODUKCIE</span>
          <h1>NASZE PRODUKTY</h1>
          <p style={{fontSize: '0.9rem'}}>W prowadzeniu działalności gospodarczej kluczową rolę
            odgrywa odpowiednie zarządzanie finansami. Dostępne
            na rynku produkty finansowe dla firm, takie jak kredyty
            obrotowe, kredyty inwestycyjne, czy faktoring mogą
            znacząco ułatwić ten proces i pomóc w rozwoju
            przedsiębiorstwa!</p>
          <div className='rowParagraph'>
            <CheckCircleIcon />
            <p> Kredyt obrotowy - to krótkoterminowa pożyczka
              udzielana firmom w celu finansowania bieżącej
              działalności.
              Służy do pokrycia bieżących kosztów, takich jak
              wynagrodzenia pracowników, zakupy towarów i usług,
              czynsz i inne zobowiązania</p>
          </div>
          <div className='rowParagraph'>
            <CheckCircleIcon />
            <p> Kredyt inwestycyjny - to długoterminowa pożyczka
              udzielana firmom w celu sfinansowania przedsięwzięć
              mających na celu rozwój lub modernizację działalności.
              Może być przeznaczony na przykład na zakup
              nieruchomości, maszyn, urządzeń lub oprogramowania, a
              także na badania i rozwój.</p>
          </div>
          <div className='rowParagraph'>
            <CheckCircleIcon />
            <p> Faktoring - dzięki faktoringowi przedsiębiorca
              „odmraża” swoje faktury - zamiast czekać 30 albo 60 dni
              na zapłatę od kontrahenta, może dostać pieniądze nawet
              w ciągu 24 godzin od przekazania faktur do firmy
              faktoringowej. Zamień faktury na gotówkę. Pozbądź się
              ryzyka i zapewnij płynność finansową swojej firmie.</p>
          </div>
        </div>
      </div>
    </section>
  );
})

export default OurProducts;
