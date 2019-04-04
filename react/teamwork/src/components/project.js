import React from 'react';

import Api from "../api/teamworkApi";

export default class Project extends React.Component {
	state = {
		name: "",
		description: "",
		id: "",
		totalTasks: "",
		completedTasks: "",
		timeIsLogged: ""
	}
	
	componentDidMount() {
		Api.getTasksByProject(this.props.id).then( response => {
			let completed = response.data["todo-items"].filter (e=>{
				return e.completed === false;
			});

			let timeIsLogged = response.data["todo-items"].filter (e=>{
				return e.timeIsLogged !== "0";
			});

			this.setState({
		   		totalTasks : response.data["todo-items"].length,
		   		completedTasks: completed.length,
		   		timeIsLogged: timeIsLogged.length
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
				<p>Tareas con logs: {this.state.timeIsLogged} </p>
			</div>
		);
	}
}
