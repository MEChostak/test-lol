// import logo from "./logo.svg";
import React from "react";

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h2 className='text'>Simulador FaleMais</h2>
        <h5 className='text'>
          Simule o custo das suas ligações de longa distancia com o FaleMais da
          Telzir
        </h5>
        <br/>

        <div className='div-center'>
          <form>
            <br />
            <br />
            <select className="form-select" placeholder='DDD de Origem'>
              <option selected>DDD de Origem</option>
              <option value='011'>011</option>
              <option value='016'>016</option>
              <option value='017'>017</option>
              <option value='018'>018</option>
            </select>
            <hr />
            <select className="form-select" placeholder='DDD de Destino'>
              <option selected>DDD de Destino</option>
              <option value='D11'>011</option>
              <option value='D16'>016</option>
              <option value='D17'>017</option>
              <option value='D18'>018</option>
            </select>
            <hr />
            <input className="form-select" type='text' placeholder='Tempo de ligação em minutos' />
            <hr />
            <select className="form-select" placeholder='DDD de Origem'>
              <option selected>Plano Escolhido</option>
              <option value='1'>FaleMais 30</option>
              <option value='2'>FaleMais 60</option>
              <option value='3'>FaleMais 120</option>
            </select>
          </form>
        </div>
        <br/>
        <p className="text">Know more about me.</p>
        <a
          className='App-link'
          href='https://www.magsonchostak.com/'
          target='_blank'
          rel='noopener noreferrer'>
          Magson Chostak
        </a>
        <p className="text">The code repository is here.</p>
        <a
          className='App-link'
          href='https://github.com/MEChostak?tab=repositories'
          target='_blank'
          rel='noopener noreferrer'>
          Repository
        </a>
      </header>
    </div>
  );
}

export default App;
