import React, {useState} from 'react';
import './ourteam.scss';


const OurTeam = React.forwardRef((props, ref) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    return (
        <section ref={ref} id="ourteam" className={isMobile && 'mobileourteam'}>

            <div className="teamContainer">
                <div className='maxWidthContainer'>
                    <div className='leftContainer'>
                        <div className='aboutUs'>
                            <div className='businessPhotofirst'></div>
                            <div style={{height: '40%'}}>
                                <h1>NASZE DOŚWIADCZENIE</h1>
                                <p>Rozpoczynając współpracę połączyliśmy wiedzę z rynku
                                    kapitałowego, gdzie jeden z nas pracował przy obrocie
                                    papierami wartościowymi w jednym z największych
                                    domów maklerskich w Polsce, a drugi w tym samym
                                    czasie dostarczał szeroką gamę produktów finansowych
                                    do przedsiębiorców z całej Polski.</p>
                                <h1 style={{marginTop: '6vh'}}>NASZA MISJA</h1>
                                <p>Naszą misją jest poprowadzenie Ciebie przez często
                                    skomplikowane meandry finansów, tak abyś czuł się
                                    bezpiecznie i komfortowo.</p>
                            </div>
                        </div>
                    </div>
                    <div className='rightContainer'>
                        <div className='aboutUs'>
                            <div style={{ height: '25%' }}>
                                <span className='productDesc'>O NAS</span>
                                <h1>NASZ ZESPÓŁ</h1>
                                <p>Kim jesteśmy? Z pewnością jesteśmy zepsołem
                                    pełnym pasji i zapału do tego co robimy.
                                    Wykorzystując swoją wiedzę i doświadczenie dbamy
                                    o to, żeby każda podjęta przez Ciebie decyzja była
                                    bezpieczna dla Twojego budżetu.</p>
                            </div>
                            {!isMobile && <div className='businessPhoto'></div>}
                        </div>
                    </div>

                </div>


            </div>
        </section>
    );
})

export default OurTeam;
