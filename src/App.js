  import React, { Component } from 'react';
  import logo from './logo.svg';
  import './App.css';
  import Creador from './Creador/Creador';
  import Visualizador from './Visualizador/Visualizador';

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
                {mobile ? (
                  <Visualizador titulo = {tituloArticulo} 
                                cuerpo = {cuerpoArticulo} 
                                referencias = {referenciasArticulo}
                                url = {urlArticulo} 
                                />)
                                : ( <div>Holiwi</div>)
                              }

                </td>
              </tr>
            </tbody>
            </table>)
            :
     
          
          </div>
        </div>
      );
    }
  }

  export default App;
