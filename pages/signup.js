import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import RandomIdGenerator from "@/components/helpers/RandomIdGenerator";

const SignUp = () => {
	const router = useRouter();
	const [formState, setFormState] = useState({
		fullName: "",
		email: "",
		password: "",
	});

	const handleOnchange = (e) => {
		const { name, value } = e.target;
		setFormState((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const registerUser = () => {
		sessionStorage.setItem(
			"user",
			JSON.stringify({
				...formState,
				id: RandomIdGenerator(),
				Age: "",
				PhoneNumber: "",
				bio: "",
			}),
		);
		alert("registration successfull");

		router.push("/login");
	};

	return (
		<div className='h-screen  flex justify-center items-center'>
			<div className='lg:w-[500px] md:w-1/2 w-2/3'>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						registerUser();
					}}
					className='bg-white p-10 rounded-lg shadow-lg min-w-full'>
					<h1 className='text-center text-2xl mb-6 text-gray-600 font-bold font-sans'>
						Formregister
					</h1>
					<div>
						<label
							className='text-gray-800 font-semibold block my-3 text-md'
							for='fullName'>
							fullName
						</label>
						<input
							required
							onChange={handleOnchange}
							className='w-full bg-gray-100 text-black px-4 py-2 rounded-lg focus:outline-none'
							type='text'
							name='fullName'
							id='fullName'
							placeholder='fullName'
						/>
					</div>
					<div>
						<label
							className='text-gray-800 font-semibold block my-3 text-md'
							for='email'>
							Email
						</label>
						<input
							onChange={handleOnchange}
							className='w-full bg-gray-100 text-black px-4 py-2 rounded-lg focus:outline-none'
							type='text'
							name='email'
							id='email'
							placeholder='@email'
							required
						/>
					</div>
					<div>
						<label
							className='text-gray-800 font-semibold block my-3 text-md'
							for='password'>
							Password
						</label>
						<input
							required
							onChange={handleOnchange}
							className='w-full bg-gray-100 text-black px-4 py-2 rounded-lg focus:outline-none'
							type='password'
							name='password'
							id='password'
							placeholder='password'
						/>
					</div>

					<button
						type='submit'
						className='w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans'>
						Register
					</button>
					<Link href='/login'>
						<button
							type='submit'
							className='w-full mt-6 mb-3 bg-indigo-100 rounded-lg px-4 py-2 text-lg 
text-gray-800 tracking-wide font-semibold font-sans'>
							Login
						</button>
					</Link>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
