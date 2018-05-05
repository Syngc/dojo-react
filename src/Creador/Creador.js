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
  }

  render() {
    return (
      <div className="App">
      {this.state.titulo}
        <table>
            <tbody>
                <tr>
                    <td>
                        <div>Titulo del articulo:</div>
                    </td>
                    <td>
                        <input type="Text" placeholder="Titulo" onChange={event => this.manejador('titulo',event.target.value)}/>
                    </td>
                </tr>

            </tbody>
        </table>
      </div>
    );
  }
}

export default Creador;
