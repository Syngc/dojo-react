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
          mycolor: '',
          tamano: '',
          fuente:'',
          mobile : false
      }
      this.getData = this.getData.bind(this);
    }

    getData(tituloR, cuerpoR, refR, urlR, colorR, tamanoR, fuenteR){
      this.setState({
        tituloArticulo : tituloR,
        cuerpoArticulo : cuerpoR,
        referenciasArticulo : refR,
        urlArticulo : urlR,
        colorArticulo: colorR,
        tamanoArticulo : tamanoR,
        fuenteArticulo: fuenteR
      })
    }

    setMobile(mobileR){
      this.setState({
        mobile : !this.state.mobile
      })
    }

    render() {
      const {
        tituloArticulo,
        cuerpoArticulo,
        referenciasArticulo,
        urlArticulo,
        colorArticulo,
        tamanoArticulo,
        fuenteArticulo,
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
                                mycolor = {colorArticulo}
                                tamano = {tamanoArticulo}
                                fuente = {fuenteArticulo}
                                />)
                                : (
                  <Mobile titulo = {tituloArticulo} 
                          cuerpo = {cuerpoArticulo} 
                          referencias = {referenciasArticulo}
                          url = {urlArticulo} 
                          mycolor = {colorArticulo}
                          tamano = {tamanoArticulo}
                          fuente = {fuenteArticulo}
                          />)
                }
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
