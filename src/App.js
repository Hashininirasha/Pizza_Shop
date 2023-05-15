import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from './pages/MainLayout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Posts from './pages/Login.jsx';
import Products from './pages/Products.jsx';
import SingleProduct from './pages/SingleProduct.jsx';
import Error from './pages/Error.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Appheader from './pages/Appheader';
import Login from './pages/Login.jsx';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
			<Appheader></Appheader>

				<Routes>
					<Route path='/' element={<MainLayout />}>
						<Route index element={<Home />} />
						<Route path='about' element={<About />} />
						<Route path='products' element={<Products />} />
						<Route path='products/:productId' element={<SingleProduct />} />
						<Route path='login' element={<Login />} />
						<Route path='*' element={<Error />} />
						
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
