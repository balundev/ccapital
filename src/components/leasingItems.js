import React from 'react';
import './leasingItems.scss';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { ReactComponent as Cars } from '../assets/item_car.svg';
import { ReactComponent as Trucks } from '../assets/item_truck.svg';
import { ReactComponent as Trucktor } from '../assets/item_traktor.svg';
import { ReactComponent as SpecialMachines } from '../assets/item_specialmachines.svg';
import { ReactComponent as MedicalStuff } from '../assets/item_medicalthings.svg';
import { ReactComponent as Offices } from '../assets/item_office.svg';
import { ReactComponent as ITstuff } from '../assets/item_ititems.svg';
import { ReactComponent as Motorboats } from '../assets/item_motorboat.svg';
import { ReactComponent as BuilderMachine } from '../assets/item_buildervehickle.svg';

const LeasingItems = React.forwardRef((props, ref) => {
    return (
        <section ref={ref} id="leasingItems">
            <div className='maxwidthContainer'>
                <div className='creditsOfferContainer'>
                    <div className='productDescription'>
                        <h1>Przedmioty finansowania</h1>
                    </div>
                    <div className="creditCardsContainer">
                        <div className='firstRow'>
                            <div className="cardsOffer">
                                <Cars className='iconTopic'></Cars>
                                <span>Samochody</span>
                            </div>
                            <div className="cardsOffer">
                                <BuilderMachine className='iconTopic'></BuilderMachine>
                                <span>Maszyny budowlane</span>
                            </div>
                            <div className="cardsOffer">
                                <ITstuff style={{height: '3rem'}} className='iconTopic'></ITstuff>
                                <span>Sprzęt IT</span>
                            </div>
                        </div>
                        <div className='secondRow'>
                            <div className="cardsOffer">
                                <Trucks className='iconTopic'></Trucks>
                                <span>Samochody ciężarowe</span>
                            </div>
                            <div className="cardsOffer">
                                <MedicalStuff className='iconTopic'></MedicalStuff>
                                <span>Sprzęt medyczny</span>

                            </div>
                            <div className="cardsOffer">
                                <Motorboats className='iconTopic'></Motorboats>
                                <span>Jachty i motorówki</span>

                            </div>
                        </div>
                        <div className='thirdRow'>
                            <div className="cardsOffer">
                                <Trucktor className='iconTopic'></Trucktor>
                                <span>Maszyny rolnicze</span>
                            </div>
                            <div className="cardsOffer">
                                <Offices style={{height: '3rem'}} className='iconTopic'></Offices>
                                <span>Wyposażenie biur i sklepów</span>

                            </div>
                            <div className="cardsOffer">
                                <SpecialMachines style={{height: '3rem'}} className='iconTopic'></SpecialMachines>
                                <span>Maszyny specjalistyczne</span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
})

export default LeasingItems;
