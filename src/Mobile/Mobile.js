import React, { Component } from 'react';
import Creador from './Creador/Creador';
import Visualizador from './Visualizador/Visualizador';

class Mobile extends components{
    render(){
        return(
        <div className= "App">
            <div className="titulo">{this.props.titulo=='' ? 'Titulo': this.props.titulo}</div>
            <img src={this.props.url==''
            ? 'https://www.myrenova.com/Plugins/Renova.Personalization/Content/Images/Configurador/empty.png'
            : this.props.url} className="imagen"></img>
            <div className="cuerpo">{this.props.cuerpo== '' ? 'Cuerpo del Articulo' : this.props.cuerpo}</div>
            <a padding className="referencias" href={this.props.referencias}>{this.props.referencias}</a>   
        </div>
        );   
    }
}