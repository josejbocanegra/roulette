import React from 'react';
import Project from "./project";

import Api from "../api/teamworkApi";


/*const p = {
    status: "completed"
}*/

export default class ProjectsList extends React.Component {

	state = {
		projects : []
	}

	componentDidMount() {
		Api.getProjects().then( (response)=> {
		    this.setState({projects : response.data.projects});
		});
	}

	renderList(){

	}

	render() {
		return (
			<div>
				{this.state.projects.map( e => <Project key={e.id} id={e.id} name = {e.name} description = {e.description}/>)}
			</div>
		);
	}
}






 

