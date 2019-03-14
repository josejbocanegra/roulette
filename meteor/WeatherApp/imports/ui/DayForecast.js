import React, { Component } from 'react';
 
export default class DayForecast extends Component {
  render() {
    return (
      <div className="col-sm contenedor">
        <img src="/images/frame.png"/>
      	<div className="textoDay">{this.props.report.dayName}</div>
        <div className="textoTempMax">{this.props.report.minTemp}</div>
        <p>{this.props.report.maxTemp}</p>
        <p>{this.props.report.status}</p>
      </div>
    );
  }
}