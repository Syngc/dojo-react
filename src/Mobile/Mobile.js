import React, { Component } from 'react';
import './Mobile.css'
class Mobile extends Component{
    render(){
        return(
        <div className= "App">
        <div className="Movil">
            <div className="titulo">{this.props.titulo=='' ? 'TituloB': this.props.titulo}</div>
            <img src={this.props.url==''
            ? 'https://www.myrenova.com/Plugins/Renova.Personalization/Content/Images/Configurador/empty.png'
            : this.props.url} className="imagen"></img>
            <div className="cuerpo">{this.props.cuerpo== '' ? 'Cuerpo del Articulo' : this.props.cuerpo}</div>
            <a padding className="referencias" href={this.props.referencias}>{this.props.referencias}</a>   
        </div>
        </div>  
        );   
    }
}

export default Mobile;