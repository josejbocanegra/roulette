import React from 'react';

import Api from "../api/teamworkApi";

export default class Project extends React.Component {
	state = {
		name: "",
		description: "",
		id: "",
		totalTasks: "",
		completedTasks: ""
	}
	
	componentDidMount() {
		Api.getTasksByProject(this.props.id).then( response => {
			let completed = response.data["todo-items"].filter (e=>{
				return e.completed === false;
			});

			this.setState({
		   		totalTasks : response.data["todo-items"].length,
		   		completedTasks: completed.length
		   	});
		});
	}

	render() {
		return (
			<div>
				<h1>{this.props.name}</h1>
				<h3>{this.props.description}</h3>
				<p>Total de tareas: {this.state.totalTasks} </p>
				<p>Tareas completadas: {this.state.completedTasks} </p>
			</div>
		);
	}
}
