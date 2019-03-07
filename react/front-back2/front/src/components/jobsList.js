import React from 'react';
import Job from "./job";
import JobPost from "./jobPost";

export default class JobsList extends React.Component {
	/*
	state = { 
		offers: [
			{
				"name": 	"Asesor comercial de hipermercado",
				"company":  "Schneider Electric", 
				"salary":   "$4.5 a $5.5 millones",
				"city":     "Bogotá, Colombia"
			}, 
			{
				"name": 	"Desarrollador de software",
				"company":  "Google Inc.", 
				"salary":   "$20 a 25 millones",
				"city":     "Palo Alto, CA, USA"
			},
		]
	};*/

	state = {
		"offers" : [],
		"value" : "empty"
	};

	componentDidMount(){
		fetch("/jobOffers").then(responseApi => {
			return responseApi.json();
		}).then(responseJson => {
			this.setState({"offers" : responseJson})
		});
	}

	
	render() {
		return (
			<div>
				{this.state.offers.map( (e,i) => <Job key={i} offer={e}/>)}
				<JobPost action={this.componentDidMount.bind(this)}/>
			</div>
		);
	}
}