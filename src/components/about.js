import React from 'react';
import './about.scss';
import PhoneIcon from '@mui/icons-material/Phone';

const About = React.forwardRef((props, ref) => {
  return (
    <section  ref={ref} id="about" className="about">
      <div className="logo-container">
        <div className='logo'></div>
      </div>
      <div className="description">
        <p>
        Szukasz idealnego produktu finansowego, ale gubisz się w gąszczu ofert i skomplikowanych zapisów? Skorzystaj z bezpłatnej pomocy doświadczonego pośrednika!
        </p>
        <p>
        Nasi eksperci pomogą Ci wybrać produkt finansowy skrojony na miarę Twoich potrzeb i możliwości, oszczędzając Twój cenny czas i negocjując dla Ciebie najkorzystniejsze warunki. Nasze usługi są całkowicie darmowe dla klienta - wynagrodzenie otrzymujemy od banków i instytucji finansowych.
        </p>
        <p>Skontaktuj się z nami już dziś i przekonaj się, jak możemy Ci pomóc!
        </p>
      </div>
    </section>
  );
})

export default About;
