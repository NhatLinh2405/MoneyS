import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				{" "}
				<link rel="icon" href="/assets/logo.png" />
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap"
					rel="stylesheet"
				></link>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
