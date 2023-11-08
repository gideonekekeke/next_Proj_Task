import SharedProp from "@/components/SharedProps";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
		const showHeader = false;
	return (
		<SharedProp showHeader = {showHeader}>
			<Component {...pageProps} />
		</SharedProp>
	);
}

export default MyApp;
