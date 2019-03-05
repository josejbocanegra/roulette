import React, { Component } from 'react';

import Likes from "../components/likes"

export default class Comments extends Component {
	
	state = {
		"likes" : ["comentario 1", "comentario 2", "comentario 3" ]
	}

	render() {
		return (
			<div>
				{this.state.likes.map(e=> <Likes key={e}/>)}
			</div>
		);
	}
}
