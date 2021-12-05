import React, { Component } from 'react';
import './employees.css';

let params = new URLSearchParams(window.location.search);


class ViewEmployee extends Component {
	constructor(props) {
		super(props);
		this.state = {
			employee: [],
			isLoaded: false
		}
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
				<h2>View Employee</h2>
				<p>
					First Name: {employee.firstName}<br/>
					Last Name: {employee.lastName}<br/>
					email: {employee.email}
				</p>
					
			</div>
		);
	}
}

export default ViewEmployee;
