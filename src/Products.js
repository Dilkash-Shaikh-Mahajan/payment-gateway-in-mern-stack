import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
const Products = () => {
	const [product, setProduct] = useState([]);
	let backURL = 'https://dilkash-razorpay-backend.onrender.com';
	let backTestURL = 'http://localhost:5000';
	const getProducts = () => {
		axios.get(`${backURL}/api/products`)
			.then((res) => setProduct(res.data))
			.catch((err) => console.error(err));
	};
	useEffect(() => {
		getProducts();
	}, []);
	const handlePayment = async (price) => {
		const { data } = await axios.post(`${backURL}/api/create-order`, {
			price,
		});
		const { amount, id } = data;
		const options = {
			key: 'rzp_test_DXb4qOZFFJhsDu',
			amount: amount,
			currency: 'INR',
			name: 'Dilkash Shaikh Mahajan',
			description: 'Tutorial of RazorPay',
			image: 'https://razorpay.com/docs/build/browser/static/razorpay-docs-dark.6f09b030.svg',
			order_id: id,
			handler: async function (response) {
				let { data } = await axios.post(
					`${backURL}/api/paymentSuccess`,
					{
						razorpay_order_id:
							response.razorpay_order_id,
						razorpay_payment_id:
							response.razorpay_payment_id,
						razorpay_signature:
							response.razorpay_signature,
					},
				);
				if (data.success) {
					toast.success('Payment Success');
				} else {
					toast.warning('Some thing went wrong');
				}
			},
			prefill: {
				name: 'Dilkash Mahajan',
				email: 'dilkash@gmail7.com',
				contact: '9000090000',
			},
			notes: {
				address: 'Razorpay Corporate Office',
			},
			theme: {
				color: '#121212',
			},
		};

		var rzp1 = new window.Razorpay(options);

		rzp1.open();
	};
	return (
		<div className='grid grid-cols-1 md:grid-cols-4 my-4 lg:grid-cols-4 xl:grid-cols-4 gap-5'>
			<Toaster
				position='top-right'
				reverseOrder={false}
				toastOptions={{
					style: {
						fontSize: '14px',
					},
				}}
			/>
			{product.map((product, index) => (
				<div
					key={index}
					className=' w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
					<div className='w-full h-80'>
						<img
							className='rounded-t-lg w-full h-full object-cover object-top'
							alt='payment'
							src={product.image}
						/>
					</div>

					<div className='py-4 px-5'>
						<h5 className='mb-2 text-2xl font-bold product-title-clamp tracking-tight text-gray-900 dark:text-white'>
							{product.title}
						</h5>

						<p className='mb-3 font-normal text-gray-700 product-desc-clamp dark:text-gray-400'>
							{product.description}
						</p>
					</div>
					<div className='w-full px-2 py-5'>
						<button
							onClick={() =>
								handlePayment(product.price)
							}
							type='button'
							className='focus:outline-none w-full text-black font-bold bg-green-400 hover:bg-green-800 focus:ring-4 hover:text-white focus:ring-green-300 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>
							Buy Now
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default Products;
