import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export class Canvas extends Component {
    render() {
        return (
            <div className="container-fluid text-left">
				<nav className="navbar navbar-light bg-light">
  					<span className="navbar-text">
    					Kanban application
  					</span>
				</nav>
				<hr/>
				<div>
					<div className="row">
						<div className="col-1">
						</div>
						
						<div className="col-3">
							Todo<br/><hr/>
							<button>+</button>
						</div>
						
						<div className="col-1">
						</div>
						
						<div className="col-3">
							Doing<br/><hr/>
							<button>+</button>
						</div>
						
						<div className="col-1">
						</div>
						
						<div className="col-3">
							Done<br/><hr/>
							<button>+</button>
						</div>
					</div>
				</div>	
			</div>
        );
    }
}