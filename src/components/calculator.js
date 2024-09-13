import React, { useState } from 'react';
import './calculator.scss';


const Calculator = React.forwardRef((props, ref) => {


  return (
    <section  ref={ref} id="calculator" className="calculator">
      {/* <div className="description">
        <h2>Sprawdzimy twoją zdolność kredytową!</h2>
        <p>
        Doradca finansowy syszka posiada uprawnienia systemowe do korzystania bezpośrednio z kalkulatorów bakowych! Dzięki temu doradca dokładnie sprawdzi Twoją zdolność kredytową, jeszcze zanim zawnioskujesz o kredyt! Da Ci to pewność, że kwota kredytu nie ulegnie zmniejszeniu w trakcie procesu kredytowego.
        </p>
      </div> */}
      <div className="descriptionHelp">
        <p>Obliczymy Twoją zdolność kredytową</p>
        <p onClick={props.scrollContact} className="contactBTN">Skontaktuj się z nami</p>
      </div>
  </section>
  );
})

export default Calculator;
