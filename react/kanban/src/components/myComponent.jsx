import React, { Component } from 'react';

export class MyComponent extends Component {
	state ={
		"name": "MyComponent",
		"version": "1.00",
		"likes" : this.props.likes,
		"logo" : "https://assets.dryicons.com/uploads/icon/svg/6625/fb1e99b5-5c21-4e28-a824-cc5593e5638b.svg",
		"tags" : ["tag1", "tag2", "tag3"]
	}

	handleIncrement = (value) => {
		console.log("Increment clicked", this.state.likes, value);
		let length =  this.state.tags.length + 1;
		this.setState({"likes": this.state.likes + 1, "tags": [...this.state.tags, "tag" + length ]});
		//arrayvar: [...this.state.arrayvar, newelement]

	}

	formatCount(){
		const {likes} = this.state;
		return likes === 0 ? <span>Be the first to like this component</span> : likes;
	}

	getTags(){
		return this.state.tags.map(e=><ul key={e}>{e}</ul>);
	}

	render() {
		return(
			<React.Fragment>
			<h1>{this.state.name} Version {this.state.version}</h1>
			{this.props.children}
			<button onClick={()=>this.handleIncrement(10)}>
			<img src={this.state.logo} width={20} heigth={20} alt={"thumbs up"}/>
			</button> {this.formatCount()}
			{this.getTags()}
			</React.Fragment>
		); 
	}
}
