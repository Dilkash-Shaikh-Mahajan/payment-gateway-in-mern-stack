import { Route, Routes } from 'react-router-dom';

import Products from './Products';
function App() {
	return (
		<div className='App px-10'>
			<Routes>
				<Route path='/' element={<Products />} />
			</Routes>
		</div>
	);
}

export default App;

