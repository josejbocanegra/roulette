import React from 'react';

export default class Job extends React.Component {

	/*state = {
		"name": 	"Asesor comercial de hipermercado",
		"company":  "Schneider Electric", 
		"salary":   "$4.5 a $5.5 millones",
		"city":     "Bogotá, Colombia"
	};*/

	state = {
		"name": 	this.props.offer.name,
		"company":  this.props.offer.company,
		"salary":   this.props.offer.salary,
		"city":     this.props.offer.city
	};

	renderState(){
		return (
			<div>
				<h2>{this.state.name}</h2>
				<h3>{this.state.company}</h3>
				<h4>{this.state.salary}</h4>
				<h5>{this.state.city}</h5>
			</div>
		);
	}

	render() {
		return (
			<div>
				{this.renderState()}
			</div>
		);
	}
}