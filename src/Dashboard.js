import React from 'react';

export default function Dashboard() {
	return (
		<div className='flex flex-col'>
			<div className='overflow-x-auto'>
				<div className='p-1.5 w-full inline-block align-middle'>
					<div className='overflow-hidden border rounded-lg'>
						<table className='min-w-full divide-y divide-gray-200'>
							<thead className='bg-gray-50'>
								<tr>
									<th
										scope='col'
										className='py-3 pl-4'>
										<div className='flex items-center h-5'>
											<input
												id='checkbox-all'
												type='checkbox'
												className='text-blue-600 border-gray-200 rounded focus:ring-blue-500'
											/>
											<label
												htmlFor='checkbox'
												className='sr-only'>
												Checkbox
											</label>
										</div>
									</th>
									<th
										scope='col'
										className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase '>
										ID
									</th>
									<th
										scope='col'
										className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase '>
										Name
									</th>
									<th
										scope='col'
										className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase '>
										Email
									</th>
								</tr>
							</thead>
							<tbody className='divide-y divide-gray-200'>
								<tr>
									<td className='py-3 pl-4'>
										<div className='flex items-center h-5'>
											<input
												type='checkbox'
												className='text-blue-600 border-gray-200 rounded focus:ring-blue-500'
											/>
											<label
												htmlFor='checkbox'
												className='sr-only'>
												Checkbox
											</label>
										</div>
									</td>
									<td className='px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap'>
										1
									</td>
									<td className='px-6 py-4 text-sm text-gray-800 whitespace-nowrap'>
										Jone Doe
									</td>
									<td className='px-6 py-4 text-sm text-gray-800 whitespace-nowrap'>
										jonne62@gmail.com
									</td>
								</tr>
								{/* <tr>
									<td className='py-3 pl-4'>
										<div className='flex items-center h-5'>
											<input
												type='checkbox'
												className='text-blue-600 border-gray-200 rounded focus:ring-blue-500'
											/>
											<label
												htmlFor='checkbox'
												className='sr-only'>
												Checkbox
											</label>
										</div>
									</td>
									<td className='px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap'>
										1
									</td>
									<td className='px-6 py-4 text-sm text-gray-800 whitespace-nowrap'>
										Jone Doe
									</td>
									<td className='px-6 py-4 text-sm text-gray-800 whitespace-nowrap'>
										jonne62@gmail.com
									</td>
								</tr> */}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}
