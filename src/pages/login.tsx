import { ReactElement } from "react";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
	return (
		<button className="px-4 py-2 space-x-4 font-mono text-white shadow-pop bg-secondary rounded-2xl flex-center hover:scale-110">
			<FcGoogle className="text-4xl" />
			<span className="text-xl">Login with Google</span>
		</button>
	);
}

Login.getLayout = function getLayout(page: ReactElement) {
	return (
		<div className="container h-screen mx-auto bg-primary flex-center">
			<div className="flex-center">{page}</div>
		</div>
	);
};
