import React from 'react';
import './whoweare.scss';

const WhoWeAre = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} id="whoweare">
      <div className='maxWidthContainer'>
        <div className='leftContainer'>
          <div className='photoContainer'>

          </div>
        </div>
        <div className='rightContainer'>
          <div className='aboutUs'>
            <span className='productDesc'>O NAS</span>
            <h1>KIM JESTEŚMY?</h1>
            <p>Z pewnością jesteśmy zespołem pełnym pasji i zapału do
              tego co robimy. Wykorzystując swoją wiedzę i
              doświadczenie dbamy o to, żeby każda podjęta przez
              Ciebie decyzja była bezpieczna dla Twojego budżetu.</p>
            <div onClick={props.scrollToOurteam}className='readMoreBtn'>Czytaj dalej</div>
          </div>
        </div>
      </div>
    </section>
  );
})

export default WhoWeAre;
