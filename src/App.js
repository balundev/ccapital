import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import Calculator from './components/calculator';
import BanksCarousel from './components/banksCarousel';
import WhoWeAre from './components/whoweare';
import Credits from './components/credits';
import CreditsOffer from './components/creditsOffer';
import Leasings from './components/leasings';
import LeasingOffer from './components/leasingOffer';
import LeasingItems from './components/leasingItems';
import OurProducts from './components/ourProducts';
import WorkWithUS from './components/workWithUs';
import OurTeam from './components/ourTeam';
import Contact from './components/contact';



function App() {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);


  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const creditsOffer = useRef(null);
  const leasingsOffer = useRef(null);
  const ourProducts = useRef(null);
  const ourTeam = useRef(null);
  const footerRef = useRef(null);
  const contact = useRef(null)
 

  const scrollToCenter = (ref) => {
    if (ref && ref.current) {
      let scrollPosition = ref.current.offsetTop + ref.current.offsetHeight / 2 - window.innerHeight / 2;


      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div style={{ width: '100vw'}}>
      <Helmet>
        <title>Leasing i Kredyty - Polska</title>
        <meta name="description" content="Oferujemy najlepsze rozwiązania leasingowe i kredytowe w Polsce." />
      </Helmet>
      <Header scrollHome={() => scrollToCenter(homeRef)} scrollLeasings={() => scrollToCenter(leasingsOffer)} scrollProducts={() => scrollToCenter(ourProducts)} scrollCredits={() => scrollToCenter(creditsOffer) } scrollContact={() => scrollToCenter(contact)}  scrollToOurteam={() => scrollToCenter(ourTeam)}/>
      <Home ref={homeRef} scrollProducts={() => scrollToCenter(ourProducts)} scrollCredits={() => scrollToCenter(creditsOffer) } scrollLeasings={() => scrollToCenter(leasingsOffer)} />
      {!isMobile && <WhoWeAre scrollToOurteam={() => scrollToCenter(ourTeam)}></WhoWeAre>}
      <Calculator scrollContact={() => scrollToCenter(contact)}/>
      {/* <About ref={aboutRef}/> */}
      <Credits ref={creditsOffer} />
      <CreditsOffer></CreditsOffer>
      <BanksCarousel />
      <Leasings ref={leasingsOffer} />
      <LeasingOffer></LeasingOffer>
      <LeasingItems></LeasingItems>
      <OurProducts ref={ourProducts}></OurProducts>
      {!isMobile && <WorkWithUS></WorkWithUS>}
      <OurTeam ref={ourTeam}></OurTeam>
      <Contact ref={contact}></Contact>
      <Footer ref={footerRef} scrollHome={() => scrollToCenter(homeRef)} scrollLeasings={() => scrollToCenter(leasingsOffer)} scrollProducts={() => scrollToCenter(ourProducts)} scrollCredits={() => scrollToCenter(creditsOffer) } scrollContact={() => scrollToCenter(contact)}  scrollToOurteam={() => scrollToCenter(ourTeam)}/>
    </div>
  );
}

export default App;
