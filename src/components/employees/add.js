import React, { Component } from 'react';
import './employees.css';

function cancel() {
	window.location.href = '/';
}

class AddEmployee extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
		}

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		this.setState({
			[name]: value
		});
	}

	handleSubmit(event) {
		event.preventDefault();

		fetch('/employees', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(this.state)
		});
		window.location.href = '/'
	}

	render() {
		return (
			<div>
				<h2>Add Employee</h2>
				<form id='userForm' onSubmit={this.handleSubmit}>
  				<label htmlFor="firstName">First name:</label><br/>
  				<input type="text" id="firstName" name="firstName" value={this.state.firstName} onChange={this.handleInputChange} required/><br/>
  				<label htmlFor="lastName">Last name:</label><br/>
  				<input type="text" id="lastName" name="lastName" value={this.state.lastName} onChange={this.handleInputChange} required/><br/>
  				<label htmlFor="email">email:</label><br/>
  				<input type="email" id="email" name="email" value={this.state.email} onChange={this.handleInputChange} required/><br/>
					<button type="sumbit">Add</button>
				</form>
				<button onClick={() => cancel()}>Cancel</button>
			</div>
		);
	}
}

export default AddEmployee;
