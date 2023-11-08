import React, { useEffect, useState } from "react";

const Profile = () => {
	const [getSession, setGetSession] = useState({});

	useEffect(() => {
		if (typeof window !== "undefined") {
			const sessionData = sessionStorage.getItem("user");
			if (sessionData) {
				setGetSession(JSON.parse(sessionData));
			}
		}
	}, []);

	const [formState, setFormState] = useState(getSession);

	const handleOnchange = (e) => {
		const { name, value } = e.target;
		setFormState((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const updateProfile = () => {
		const updatedData = { ...getSession, ...formState };
		sessionStorage.setItem("user", JSON.stringify(updatedData));
		alert("Profile updated successfully!");
		window.location.reload();
	};

	return (
		<div>
			<div className='h-full'>
				<div className='border-b-2 block md:flex'>
					<div className='w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md'>
						<div className='flex justify-between'>
							<span className='text-xl font-semibold block text-black'>
								User Profile
							</span>
							<a
								onClick={updateProfile}
								href='#'
								className='-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800'>
								Save
							</a>
						</div>

						<span className='text-gray-600'>
							This information is secret so be careful
						</span>
						<br />
						<br />
						<br />
						<span className='text-gray-600 font-bold'>
							FullName : {getSession?.fullName}
						</span>
						<br />
						<span className='text-gray-600 font-bold'>
							Email : {getSession?.email}
						</span>
						<br />
						<span className='text-gray-600 font-bold'>
							Age : {getSession?.age}
						</span>
						<br />
						<span className='text-gray-600 font-bold'>
							bio : {getSession?.bio}
						</span>
					</div>

					<div className='w-full md:w-3/5 p-8 lg:ml-4 shadow-md'>
						<div className='rounded shadow p-6'>
							<div className='pb-6'>
								<label
									htmlFor='FullName'
									className='font-semibold text-white block pb-1'>
									FullName
								</label>
								<div className='flex'>
									<input
										onChange={handleOnchange}
										id='FullName'
										className='border-1 text-black rounded-r px-4 py-2 w-full'
										type='text'
										name='fullName'
										defaultValue={getSession.fullName}
									/>
								</div>
							</div>
							<div className='pb-6'>
								<label
									htmlFor='Email'
									className='font-semibold text-white block pb-1'>
									Email
								</label>
								<div className='flex'>
									<input
										onChange={handleOnchange}
										id='Email'
										className='border-1 text-black rounded-r px-4 py-2 w-full'
										type='text'
										name='email'
										defaultValue={getSession.email}
									/>
								</div>
							</div>
							<div className='pb-6'>
								<label
									htmlFor='age'
									className='font-semibold text-white block pb-1'>
									Age
								</label>
								<div className='flex'>
									<input
										onChange={handleOnchange}
										id='age'
										className='border-1 text-black rounded-r px-4 py-2 w-full'
										type='number'
										name='age'
										defaultValue={getSession.age}
									/>
								</div>
							</div>
							<div className='pb-6'>
								<label
									htmlFor='PhoneNumber'
									className='font-semibold text-white block pb-1'>
									PhoneNumber
								</label>
								<div className='flex'>
									<input
										onChange={handleOnchange}
										id='PhoneNumber'
										className='border-1 text-black rounded-r px-4 py-2 w-full'
										type='text'
										name='PhoneNumber'
										defaultValue={getSession.PhoneNumber}
									/>
								</div>
							</div>
							<div className='pb-6'>
								<label
									htmlFor='bio'
									className='font-semibold text-white block pb-1'>
									Bio
								</label>
								<div className='flex'>
									<textarea
										onChange={handleOnchange}
										id='bio'
										className='border-1 text-black rounded-r px-4 py-2 w-full'
										type='text'
										name='bio'
										defaultValue={getSession.bio}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
