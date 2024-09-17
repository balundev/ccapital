import React, {useState} from 'react';
import './leasings.scss';
import { ReactComponent as DirectionsCarIcon } from '../assets/caricon.svg';

const Leasings = React.forwardRef((props, ref) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  return (
    <section ref={ref} id="leasings" className={isMobile && 'mobileleasings'}>
      <div className={isMobile? 'maxwidthContainer maxwidthContainer_mobile' : 'maxwidthContainer'}>
        <div className='leftContainer'>
          <div className='logoContainer'>
            <DirectionsCarIcon className='logoIcon'></DirectionsCarIcon>
            <p className="descriptionLogo">Leasing</p>
          </div>
        </div>
        <div className='rightContainer'>
          <div className='productDescription'>
            <span className='productDesc'>O PRODUKCIE</span>
            <h1>CZYM JEST LEASING?</h1>
            <p>Leasing to forma finansowania, która pozwala na
              użytkowanie nowego lub używanego przedmiotu (np.
              samochodu, maszyny, nieruchomości) przez określony
              czas w zamian za opłaty zwane ratami leasingowymi.</p>
            <p>W praktyce oznacza to, że leasingobiorca może
              korzystać z danego dobra bez konieczności jego
              natychmiastowego zakupu.
              Leasing jest popularny wśród przedsiębiorstw, ponieważ
              pozwala na optymalizację kosztów oraz zarządzanie
              płynnością finansową. Dodatkowo, umowy leasingowe
              często są bardziej elastyczne niż tradycyjne kredyty
              bankowe.</p>

            <p>Z nami zyskujesz dostęp do blisko 40 starannie
              wyselekcjonowanych firm leasingowych i banków,
              czołowych graczy na rynku. Dzięki temu możesz mieć
              pewność, że znajdziemy idealną ofertę, dopasowaną
              precyzyjnie do Twoich potrzeb i oczekiwań.</p>
          </div>
        </div>
      </div>
    </section>
  );
})

export default Leasings;
