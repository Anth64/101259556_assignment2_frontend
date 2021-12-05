import React, { Component } from 'react';
import './employees.css';

let params = new URLSearchParams(window.location.search);

function cancel() {
	window.location.href = '/';
}

class EditEmployee extends Component {
	constructor(props) {
		super(props);
		this.state = {
			employee: [],
			isLoaded: false
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		fetch('/employees/' + params.get('id'), {
			method: 'PUT',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(this.state.employee)
		});
		window.location.href = '/'
	}

	handleInputChange(event) {
		let value = event.target.value;
		let name = event.target.name;
		this.state.employee[name] = value;
		this.setState({
			employee: this.state.employee,
			isLoaded: true
		});
	}

	componentDidMount() {
		fetch('/employees/' + params.get('id'))
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					employee: json[0],
					isLoaded: true
				});
			})
	}

	render() {
		let {isLoaded, employee} = this.state;
		if(!isLoaded) {
			return <div>Loading...</div>
		}
	
		return (
			<div>
				<h2>Edit Employee</h2>
				<form id='userForm' onSubmit={this.handleSubmit}>
  				<label htmlFor="firstName">First name:</label><br/>
  				<input type="text" id="firstName" name="firstName" value={this.state.employee.firstName} onChange={this.handleInputChange} required/><br/>
  				<label htmlFor="lastName">Last name:</label><br/>
  				<input type="text" id="lastName" name="lastName" value={this.state.employee.lastName} onChange={this.handleInputChange} required/><br/>
  				<label htmlFor="email">email:</label><br/>
  				<input type="email" id="email" name="email" value={this.state.employee.email} onChange={this.handleInputChange} required/><br/>
					<button type="sumbit">Save</button>
				</form>
				<button onClick={() => cancel()}>Cancel</button>
			</div>
		);
	}
}

export default EditEmployee;
