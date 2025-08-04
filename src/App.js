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
      

      <select onChange={onChangeImagen}>
        <option value="maelle">Maelle</option>
        <option value="Sciel">Sciel</option>
        <option value="Lune">Lune</option>
        <option value="gustave">Gustave</option>
        <option value="verso">Verso</option>
        <option value="monoco">Monoco</option>
        <option value="renoir">Renoir</option>
        <option value="Clea">Clea</option>
      </select>  <br />
      <input onChange={onChangel1} type="text" placeholder="linea1"/>
      <br />
      <input onChange={onChangel2} type="text" placeholder="linea2"/>
      {/* boton exportar */}
      <button onClick={onClickExportar} >Exportar</button>

      <div className='characters' id="characters">
        <span>{linea1} </span>
        <img src={"/img/"+imagen+".jpg"} />  
        <span>{linea2}</span>
      </div>

    </div>
  );
}

export default App;
