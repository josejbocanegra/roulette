import React, { Component } from "react";
 
export default class Likes extends Component {
	state = {
	"likes" : 0,
	"icon" : "https://www.ecreativeim.com/blog/wp-content/uploads/2011/05/facebook-like-icon.png",
	"alt" : "likes"
	};

	renderLikes(){
		return this.state.likes === 0 ? "Give us a like" : this.state.likes;
	}

	clickHandler = () => {
		this.setState ({ likes: this.state.likes + 1 } );
	}

	render () {
		return (
			<div>
				<button onClick={this.clickHandler}>
					<img src={this.state.icon} alt={this.state.alt} heigth="20" width="20"/>
				</button>
				<span>
					{this.renderLikes()}
				</span>
			</div>
		);
	}
}