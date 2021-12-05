import React, { Component } from 'react';
import './employees.css';

function add() {
	window.location.href = '/add';
}

function edit(employee) {
	window.location.href = `/edit?id=${employee.id}`;
}

function del(employee) {
	fetch('/employees/' + employee.id, {
		method: 'DELETE'
	});
	window.location.href = '/';
}

function view(employee) {
	window.location.href = `/view?id=${employee.id}`;
}


class Employees extends Component {
	constructor() {
		super();
		this.state = {
			employees: []
		}
	}

	componentDidMount() {
		fetch('/employees')
			.then(res => res.json())
			.then(employees => this.setState({ employees }));
	}

	render() {
		return (
			<div>
				<h2>Employees</h2>
				<button onClick={add} >Add Employee</button>
				<table>
					<thead>
						<tr>
							<td>First Name</td>
							<td>Last Name</td>
							<td>email</td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
					</thead>
					<tbody>
						{ this.state.employees.map(employee =>
							<tr key={ employee._id }>
								<td>{ employee.firstName }</td>
								<td>{ employee.lastName }</td>
								<td>{ employee.email }</td>
								<td>
									<button onClick={() => edit(employee)}>EDIT</button>
								</td>
								<td>
									<button onClick={() => del(employee)}>DELETE</button>
								</td>
								<td>
									<button onClick={() => view(employee)}>VIEW</button>
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Employees;
