import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import PaymentSuccessFull from './PaymentSuccessFull';
import Products from './Products';
function App() {
	return (
		<div className='App px-10'>
			<Routes>
				<Route path='/' element={<Products />} />
				<Route
					path='/paymentsuccess'
					element={<PaymentSuccessFull />}
				/>
				<Route path='/dashboard' element={<Dashboard />} />
			</Routes>
		</div>
	);
}

export default App;

