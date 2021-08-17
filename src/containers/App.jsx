import React from 'react';

import '../assets/styles/main.scss';
import logo from '@icons/logo.svg';

const App = () => {
  return (
    <div className='main-container'>
      <div className='title-container'>
        <span></span>
        <h1>Esta es una plantilla para trabajar con React</h1>
      </div>

      <section>
        <h3>Contiene las siguientes caracteristicas:</h3>
        <ul>
          <li>Prepocesador de CSS - SASS</li>
          <li>Alias para carpetas</li>
          <li>Copia de imágenes</li>
        </ul>
      </section>
    </div>
  );
};

export default App;
