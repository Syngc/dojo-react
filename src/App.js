import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Creador from './Creador/Creador';
import Visualizador from './Visualizador/Visualizador';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
         <table className="tabla">
           <tbody>
             <tr>
               <th>Publicador</th>
               <th>Visualizador</th>
             </tr>
             <tr>
               <td>
                 <Creador/>
               </td>
               <td>
                 <Visualizador/>
               </td>
             </tr>
          </tbody>
          </table>
        </p>
      </div>
    );
  }
}

export default App;
