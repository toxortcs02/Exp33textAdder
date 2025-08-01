import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [linea1, setlinea1] = useState('');
  const [linea2, setlinea2] = useState('');
  const onChangel1 = function (TEXTO) {
    setlinea1(TEXTO.target.value);
  };
  const onChangel2 = function (e) {
    setlinea2(e.target.value);
  };
  return (
    <div className="App">
      

      <select>1
        <option value="maelle">Maelle</option>
        <option value="Sciel">Sciel</option>
        <option value="Lune">Lune</option>
        <option value="gustave">Gustave</option>
        <option value="verso">Verso</option>
        <option value="monoco">Monoco</option>
        <option value="reno">Renoir</option>
        <option value="Clea">Clea</option>
      </select>  <br />
      <input onChange={onChangel1} type="text" placeholder="linea1"/>
      <br />
      <input onChange={onChangel2} type="text" placeholder="linea2"/>
      {/* boton exportar */}
      <button>Exportar</button>

      <div>
        <span>{linea1} </span>
        <span>{linea2}</span>
        <img src="" />  
      </div>

    </div>
  );
}

export default App;
