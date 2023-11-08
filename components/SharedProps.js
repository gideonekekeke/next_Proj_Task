import Head from "next/head";
import Header from "./Header";


const SharedProp = ({ children, showHeader }) => {
	return (
		<div>
			<Head>
				<title>next app</title>
				<meta name='description' content='steps to next js' />
				<link rel='icon' href='assets/img.jpg' />
			</Head>
			{showHeader && <Header />}
			{children}
		
		</div>
	);
};

export default SharedProp;
