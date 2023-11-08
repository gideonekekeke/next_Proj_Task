import { GetSingleMovie } from "@/utils/ApiCalls";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const detailedid = () => {
	const router = useRouter();
	const [detailedData, setDetailedData] = useState();

	const { id } = router.query;

	const ReadSingleData = async () => {
		try {
			const response = await GetSingleMovie(id);
			console.log(response);
			setDetailedData(response);
		} catch (err) {
			return err;
		}
	};

	useEffect(() => {
		ReadSingleData();
	}, []);

	return (
		<>
			<div className='md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4'>
				<div className='xl:w-2/6 lg:w-2/5 w-80 '>
					<img
						className='w-full'
						alt='image of a girl posing'
						src={detailedData?.big_image}
					/>
				</div>

				<div className='xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6'>
					<div className='border-b border-gray-200 pb-6'>
						<p className='text-sm leading-none text-gray-600 dark:text-gray-300 '>
							{detailedData?.year}
						</p>
						<h1 className='lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2'>
							{detailedData?.title}
						</h1>
					</div>
					<div className='py-4 border-b border-gray-200 flex items-center justify-between'>
						<p className='text-base leading-4 text-gray-800 dark:text-gray-300'>
							Rating
						</p>
						<div className='flex items-center justify-center'>
							<p className='text-sm leading-none text-gray-600 dark:text-gray-300'>
								{detailedData?.rating}
							</p>
						</div>
					</div>
					<div className='py-4 border-b border-gray-200 flex items-center justify-between'>
						<p className='text-base leading-4 text-gray-800 dark:text-gray-300'>
							Rank
						</p>
						<div className='flex items-center justify-center'>
							<p className='text-sm leading-none text-gray-600 dark:text-gray-300 mr-3'>
								{detailedData?.rank}
							</p>
							<svg
								className='text-gray-300 dark:text-white cursor-pointer'
								width='6'
								height='10'
								viewBox='0 0 6 10'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M1 1L5 5L1 9'
									stroke='currentColor'
									stroke-width='1.25'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
							</svg>
						</div>
					</div>

					<div>
						<p className='xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7'>
							{detailedData?.description}
						</p>
						<p className='text-base leading-4 font-bold mt-7 text-gray-600 dark:text-gray-300'>
							Director: {detailedData?.director}
						</p>
						<br />
						<p className='text-base font-bold leading-4 mt-4 text-gray-600 dark:text-gray-300'>
							Genre
						</p>
						{detailedData?.genre?.map((el) => (
							<p className='text-base leading-4 mt-4 text-gray-600 dark:text-gray-300'>
								{el}
							</p>
						))}

						<br />
						<p className='text-base font-bold leading-4 mt-4 text-gray-600 dark:text-gray-300'>
							Writers
						</p>
						{detailedData?.writers?.map((el) => (
							<p className='text-base leading-4 mt-4 text-gray-600 dark:text-gray-300'>
								{el}
							</p>
						))}

						<p className='text-base leading-4 mt-4 font-bold text-gray-600 dark:text-gray-300'>
							imdbid: {detailedData?.imdbid}
						</p>
					</div>
					<div>
						<div className='border-t border-b py-4 mt-7 border-gray-200'>
							<div
								data-menu
								className='flex justify-between items-center cursor-pointer'>
								<p className='text-base leading-4 text-gray-800 dark:text-gray-300'>
									Shipping and returns
								</p>
								<button
									className='cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded'
									role='button'
									aria-label='show or hide'>
									<svg
										className='transform text-gray-300 dark:text-white'
										width='10'
										height='6'
										viewBox='0 0 10 6'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M9 1L5 5L1 1'
											stroke='currentColor'
											stroke-width='1.25'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
									</svg>
								</button>
							</div>
							<div
								className='hidden pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 dark:text-gray-300'
								id='sect'>
								You will be responsible for paying for your own shipping costs
								for returning your item. Shipping costs are nonrefundable
							</div>
						</div>
					</div>
					<div>
						<div className='border-b py-4 border-gray-200'>
							<div
								data-menu
								className='flex justify-between items-center cursor-pointer'>
								<p className='text-base leading-4 text-gray-800 dark:text-gray-300'>
									Contact us
								</p>
								<button
									className='cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded'
									role='button'
									aria-label='show or hide'>
									<svg
										className='transform text-gray-300 dark:text-white'
										width='10'
										height='6'
										viewBox='0 0 10 6'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M9 1L5 5L1 1'
											stroke='currentColor'
											stroke-width='1.25'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
									</svg>
								</button>
							</div>
							<div
								className='hidden pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 dark:text-gray-300'
								id='sect'>
								If you have any questions on how to return your item to us,
								contact us.
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default detailedid;
