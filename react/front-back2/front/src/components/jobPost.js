import React from 'react';

export default class JobPost extends React.Component {
	
	state={
		"name": "",
		"company": "",
		"salary": "", 
		"city": ""
	}

  handleSubmit = (event) => {
    fetch("/createOffer", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
      }).then(res=>{
        this.props.action();
        console.log(res);
      });

      event.preventDefault();
  }

  handleChange = (event) => {
  	const target = event.target;
  	const value = target.type === 'checkbox' ? target.checked : target.value;
  	const name = target.name;
  	this.setState({
  		[name]: value
  	});
  }

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
    			<label>
      				Name:
      				<input type="text" name="name"  onChange={this.handleChange} />
    			</label>
    			<label>
      				Company:
      				<input type="text" name="company" onChange={this.handleChange} />
    			</label>
    			<label>
      				Salary:
      				<input type="text" name="salary" onChange={this.handleChange} />
    			</label>
    			<label>
      				City:
      				<input type="text" name="city" onChange={this.handleChange} />
    			</label>
    			<input type="submit" value="Submit" />
  			</form>
			</div>
		);
	}
}