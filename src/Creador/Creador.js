import React, { Component } from 'react';
import './Creador.css';
import PropTypes from 'prop-types';

const porClave = (nombreKey,valor) =>({
    [nombreKey] : valor
});

class Creador extends Component {
  constructor(){
    super();
    this.state = {
        titulo : '',
        cuerpo : '',
        referencias : '',
        url : ''
    }
  }
  
  manejador(clave, valor){
      this.setState(
          porClave(clave, valor)
    )
    this.props.sendData(this.state.titulo, this.state.cuerpo, this.state.referencias, this.state.url);
  }

  render() {
    return (
      <div className="App">
        <table>
            <tbody>
                <tr>
                    <td>
                        <div className="texto">Titulo del articulo:</div>
                    </td>
                    <td>
                        <input type="Text" placeholder="Titulo" className="campoForm" onChange={event => this.manejador('titulo',event.target.value)}/>
                    </td>
                    
                </tr>
                <tr>
                    <td>
                        <div className="texto">Url del articulo:</div>
                    </td>
                    <td>
                    <input type="Text" placeholder="Url" className="campoForm" onChange={event => this.manejador('url',event.target.value)}/>
                    </td>
                </tr>

                <tr>
                    <td>
                        <div className="texto">Cuerpo del articulo:</div>
                    </td>
                    <td>
                    <textarea rows="10" cols="50" type="text" className="campoArea"onChange={event => this.manejador('cuerpo', event.target.value)}>
                        </textarea>
                    </td>
                </tr>

                <tr>
                    <td>
                        <div className="texto" >referencia del articulo:</div>
                    </td>
                    <td>
                    <textarea rows="3" cols="50" type="text" placeholder="Referencias" className="campoArea" onChange={event => this.manejador('referencias', event.target.value)}>
                        </textarea>
                    </td>
                </tr>

            </tbody>
        </table>
      </div>
    );
  }
}

export default Creador;
