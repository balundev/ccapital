import React from 'react';
import './leasingOffer.scss';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const LeasingOffer = React.forwardRef((props, ref) => {
  const offerData = [
    { title: "Leasing operacyjny", description: "Pozwala wliczyć w koszty uzyskania przychodu nawet pełną ratę leasingową, efektywnie obniżając tym samym podstawę opodatkowania." },
    { title: "Leasing finansowy", description: "Amortyzacja i część odsetkowa raty stanowi koszt uzyskania przychodu, wraz z ostatnią ratą leasingową stajesz się właścicielem przedmiotu." },
    { title: "Leasing konsumencki", description: "W przeciwnieństwie do kredytu jest dużo bardziej plastycznym instrumentem finansowym, pozwala ustalić zasady finansowania na Twoich warunkach." },
    { title: "Leasing bez BIK I KRD", description: "Szeroka gama firm leasingowych z którymi współpracujemy pozwala nam finansować klientów z wpisami w bazach." },
    { title: "Leasing zwrotny", description: "Potrzebujesz gotówki i jednocześnie chcesz zachować przedmiot który użytkujesz na codzień? Skorzystaj z leasingu zwrotnego. " },
    { title: "Pożyczkę leasingową", description: "Amortyzacja i część odsetkowa raty stanowią koszty uzyskania przychodu, od razu stajesz się właścicielem przedmiotu." },
    { title: "Wynajem długoterminowy", description: "Usługa w ramach której korzystasz z udostępnianego samochodu w zamian za comiesięczną opłatę, nie martwiąc się przy tym o ubezpieczenie OC/AC, serwis, a nawet sezonową wymianę opon." },
    { title: "Kredyt samochodowy", description: "Finansowanie o charakterze celowym z niższym oprocentowaniem niż kredyt gotówkowy, pozwala rozłożyć spłatę przedmiotu na wiele lat, dopasowując tym samym raty do Twoich możliwości finansowych." }
  ];

  return (
    <section ref={ref} id="leasingOffer">
      <div className='creditsOfferContainer'>
        <div className='productDescription'>
            <span className='productDesc'>Nasze uslugi</span>
            <h1>METODY FINANSOWANIA</h1>
        </div>
        <div className="creditCardsContainer">
            <div className='topRow'>
              {offerData.slice(0, 4).map((offer, index) => (
                <div key={index} className="cardsOffer">
                  <div className="inner">
                    <div className="front">
                      <CheckCircleIcon className='iconTopic' />
                      <h3>{offer.title}</h3>
                    </div>
                    <div className="back">
                      <p className="description">{offer.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='bottomRow'>
              {offerData.slice(4).map((offer, index) => (
                <div key={index} className="cardsOffer">
                  <div className="inner">
                    <div className="front">
                      <CheckCircleIcon className='iconTopic' />
                      <h3>{offer.title}</h3>
                    </div>
                    <div className="back">
                      <p className="description">{offer.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
});

export default LeasingOffer;
