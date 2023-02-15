import { Footer, Header } from "@/components/Layout";

interface IProps {
	children: React.ReactNode;
	title?: string;
}

export default function PublicLayout({ children }: IProps) {
	return (
		<div className="mx-auto max-w-9xl bg-primary">
			<Header />
			<main className="min-h-screen">{children}</main>
			<Footer />
		</div>
	);
}
