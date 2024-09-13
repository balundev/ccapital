import React, { useState } from 'react';
import './workwithus.scss';
import { ReactComponent as RestoreIcon } from '../assets/timemoney.svg';
import { ReactComponent as CoffeeIcon } from '../assets/coffecup.svg';
import { ReactComponent as AccountBalanceIcon } from '../assets/bankmoney.svg';
import { ReactComponent as WorkspacePremiumIcon } from '../assets/medalicon.svg';


const WorkWithUS = React.forwardRef((props, ref) => {


  return (
    <section ref={ref} id="workWithUS" className="calculator">
      <div className="descriptionHelp">
        <div className='maxWidthContainer'>
          <h2>Współpracując z nami zyskujesz</h2>
          <div className='gainContainer'>
            <div className='gainTile'>
              <div className='iconPlace'>
                <RestoreIcon className='gainIcon'></RestoreIcon>
              </div>
              <div className='descriptionProfit'>
                <span>Oszczędność czasu i pieniędzy</span>
                <p>Porównamy oferty wielu instytucji
                  finansowych, abyś mógł wybrać
                  najkorzystniejszą z nich.</p>
              </div>
            </div>
            <div className='gainTile'>
              <div className='iconPlace'>
                <CoffeeIcon className='gainIcon'></CoffeeIcon>
              </div>
              <div className='descriptionProfit'>
                <span>Wygodę i prostotę</span>
                <p>Załatwiamy za Ciebie wszystkie
                  formalności i dokumenty, abyś mógł
                  skupić się na realizacji swoich celów.</p>
              </div>
            </div>
            <div className='gainTile'>
              <div className='iconPlace'>
                <AccountBalanceIcon className='gainIcon'></AccountBalanceIcon>
              </div>
              <div className='descriptionProfit'>
                <span>Dostęp do ofert niedostępnych
                  dla klientów indywidualnych</span>
                <p>Dzięki współpracy z wieloma bankami
                  i firmami leasingowymi mamy dostęp
                  do ofert specjalnych i promocyjnych
                  niedostępnych dla klientów
                  indywidualnych, zapewniając Ci
                  jeszcze korzystniejsze warunki

                  finansowania.</p>
              </div>
            </div>
            <div className='gainTile'>
              <div className='iconPlace'>
                <WorkspacePremiumIcon className='gainIcon'></WorkspacePremiumIcon>
              </div>
              <div className='descriptionProfit'>
                <span>Fachowa pomoc i doradztwo</span>
                <p>Nasi doświadczeni eksperci posiadają bogatą
                  wiedzę na temat produktów finansowych i są
                  gotowi odpowiedzieć na wszystkie Twoje
                  pytania, doradzając Ci najlepsze rozwiązania
                  dopasowane do Twoich potrzeb i możliwości

                  finansowych.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
})

export default WorkWithUS;
