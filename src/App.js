  import React, { Component } from 'react';
  import logo from './logo.svg';
  import './App.css';
  import Creador from './Creador/Creador';
  import Visualizador from './Visualizador/Visualizador';
  import Mobile from './Mobile/Mobile';

  class App extends Component {
    constructor(){
      super();
      this.state = {
          tituloArticulo : '',
          cuerpoArticulo : '',
          referenciasArticulo : '',
          urlArticulo : '',
          mobile : false
      }
      this.getData = this.getData.bind(this);
    }

    getData(tituloR, cuerpoR, refR, urlR){
      this.setState({
        tituloArticulo : tituloR,
        cuerpoArticulo : cuerpoR,
        referenciasArticulo : refR,
        urlArticulo : urlR
      })
    }

    setMobile(mobileR){
      this.setState({
        mobile : !this.state.mobile
      })
    }

    setEstilo(clave, valor){
      document.getElementsByClassName('text').style[clave] = valor;
    }

    render() {
      const {
        tituloArticulo,
        cuerpoArticulo,
        referenciasArticulo,
        urlArticulo,
        mobile    
      } = this.state;
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Dojo React</h1>
          </header>
          <div className="App-intro">
          <div>
          Mobile
          <label class="switch" id="Mobile" onClick = {event => this.setMobile()}>
            <input type="checkbox"/>
            <span class="slider round"></span>
          </label>
          </div>
          
         <table className="tabla">
            <tbody>
              <tr>
                <th>Publicador</th>
                <th>Visualizador</th>
              </tr>
              <tr>
                <td>
                  <Creador sendData={this.getData}/>
                </td>
                <td>
                {!mobile ? (
                  <Visualizador titulo = {tituloArticulo} 
                                cuerpo = {cuerpoArticulo} 
                                referencias = {referenciasArticulo}
                                url = {urlArticulo} 
                                />)
                                : (
                  <Mobile titulo = {tituloArticulo} 
                                cuerpo = {cuerpoArticulo} 
                                referencias = {referenciasArticulo}
                                url = {urlArticulo} 
                                />)
                }
                </td>
              </tr>
              <tr>
                    <td>
                        <label for="color" className="texto">Color</label>
                        <input type="color" name="color" id="color" onChange={event => this.setEstilo('color',event.target.value)}/>
                    </td>
                    <td>
                        <label for="tamano" className="texto">Tamaño</label>
                        <input type="number" name="tamano" id="tamano"/>
                    </td>
                    <td>
                        <label for="fuente" className="texto">Fuente</label>
                        <input list="list" name="fuente" id="fuente"/>
                        <datalist id="list">
                            <option value="Segoe UI"/>
                            <option value="Tahoma"/>
                            <option value="Geneva"/>
                            <option value="Verdana"/>
                            <option value="sans-serif"/>
                        </datalist>
                    </td>
                </tr>
            </tbody>
            </table>
          </div>
        </div>
      );
    }
  }

  export default App;
