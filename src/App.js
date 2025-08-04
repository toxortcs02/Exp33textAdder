import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {
  const [linea1, setlinea1] = useState('');
  const [linea2, setlinea2] = useState('');
  const [imagen, setimg] = useState('');
  const onChangel1 = function (evento) {
    setlinea1(evento.target.value);
  };
  const onChangel2 = function (evento) {
    setlinea2(evento.target.value);
  };
  const onChangeImagen = function (evento) {
    setimg(evento.target.value);
  };
  
  const onClickExportar = function (evento) {

    html2canvas(document.querySelector("#characters")).then(canvas => {
      let img = canvas.toDataURL("image/jpg");
      let link = document.createElement('a');
      link.download = 'char.png';
      link.href = img;
      link.click();
    })
    }

return (
  <div className="App">
    <div className="container">
      <h1 className="title">Creador de Personajes</h1>
      <div className="form">
        <select onChange={onChangeImagen} className="select">
          <option value="">Selecciona un personaje</option>
          <option value="maelle">Maelle</option>
          <option value="Sciel">Sciel</option>
          <option value="Lune">Lune</option>
          <option value="gustave">Gustave</option>
          <option value="verso">Verso</option>
          <option value="monoco">Monoco</option>
          <option value="renoir">Renoir</option>
          <option value="Clea">Clea</option>
        </select>
        <input onChange={onChangel1} type="text" placeholder="Línea superior" className="input"/>
        <input onChange={onChangel2} type="text" placeholder="Línea inferior" className="input"/>
        <button onClick={onClickExportar} className="btn">Exportar</button>
      </div>
      <div className='characters' id="characters">
        <span className="linea">{linea1}</span>
        <img src={"/img/"+imagen+".jpg"} alt={imagen ? imagen : ""} className="personaje-img"/>
        <span className="linea">{linea2}</span>
      </div>
    </div>
  </div>
);
}

export default App;
