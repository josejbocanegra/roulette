import React, { Component } from 'react';
import {MyComponent} from "../components/myComponent";

export class Components extends Component {
	state ={
		"comps" : [
			{id: 1, value: 3},
			{id: 2, value: 30},
			{id: 3, value: 300}
		]
	}
	render() {
		return (
			<div>
				{ 
					this.state.comps.map(i=>
						<MyComponent key={i.id} likes={i.value}>
							<h6>Module No. {i.id}</h6>
						</MyComponent>
					)
				}
			</div>
		);
	}
}
