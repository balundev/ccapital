import React from 'react';
import './contact.scss';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PlaceIcon from '@mui/icons-material/Place';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Contact = React.forwardRef((props, ref) => {
    return (
        <section ref={ref} id="contact">

            <div className="teamContainer">
                <div className='contactSection'>
                    <div className='contactContainer'>
                        <div className='contactDetails'>
                            <div>
                                <h2>Skontaktuj sie z nami</h2>
                                <div style={{ display: 'flex', marginBottom: '15px' }} className="phoneDetail">
                                    <PhoneAndroidIcon style={{ fontSize: '35px' }}></PhoneAndroidIcon>
                                    <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                                        <span>+48 665 085 131</span>
                                        <span>+48 516 706 699</span>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', marginBottom: '15px' }} className="mailDetail">
                                    <MailOutlineIcon style={{ fontSize: '35px' }}></MailOutlineIcon>
                                    <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                                        <span>artur.staszkow@collectcapital.pl</span>
                                        <span>kamil.kubowicz@collectcapital.pl</span>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', marginBottom: '15px' }} className="mailDetail">
                                    <PlaceIcon style={{ fontSize: '35px' }}></PlaceIcon>
                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '10px' }}>
                                        <span>Rynek 4, 48-340 Głuchołazy</span>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', marginBottom: '15px' }} className="openDetail">
                                    <AccessTimeIcon style={{ fontSize: '35px' }}></AccessTimeIcon>
                                    <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                                        <span>Godziny otwarcia</span>
                                        <span>Pon - Pt: 9:00 - 17:00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="https://maps.app.goo.gl/pGsJUSBKhXN1Q1Zc9" target='_blank'>
                            <div className='mapPlace'>

                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
})

export default Contact;
