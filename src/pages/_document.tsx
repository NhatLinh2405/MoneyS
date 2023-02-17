/* eslint-disable @next/next/no-title-in-document-head */
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="icon" href="/assets/money-bag.png" />
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap"
					rel="stylesheet"
				></link>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<title>MoneyS - Top Money Manager</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
