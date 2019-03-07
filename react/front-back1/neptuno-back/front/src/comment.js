import React from 'react';

export default class Comment extends React.Component {

	state = {
		"proveedor" : []
	};

	componentDidMount(){
		fetch("/proveedores").then(res1 => {
			console.log("res1: ", res1);
			return res1.json();
		}).then(res2 => {
			this.setState({"proveedor" : res2})
		});
	}

	renderData(){
		return this.state.proveedor.map(e=><div key={e.name}> {e.name} </div>);
	}

	render() {
		return (
			<div>
				Este es un comentario
				{this.renderData()}
			</div>
		);
	}
}
