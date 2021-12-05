import './App.css';
import Employees from './components/employees/employees';
import AddEmployee from './components/employees/add';
import ViewEmployee from './components/employees/view';
import EditEmployee from './components/employees/edit';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
				<Router>
					<Routes>
						<Route path='/' element={<Employees />}/>
						<Route path='/add' element={<AddEmployee />}/>
						<Route path='/view' element={<ViewEmployee />}/>
						<Route path='/edit' element={<EditEmployee/>}/>
					</Routes>
				</Router>
      </header>
    </div>
  );
}

export default App;
