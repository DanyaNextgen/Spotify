import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FaSpotify, FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import { LOGIN_URL } from "../exports";

interface loginProps {}

const Login: React.FC<loginProps> = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const params = new URLSearchParams(window.location.hash);
		const token = params.get("#access_token");

		if (token) {
			localStorage.setItem("token", token);
			navigate("/");
		}
	}, []);

	return (
		<div className="flex flex-col items-center justify-center bg-gradient-to-b from-[#2a2a2a] to-black min-h-screen px-4">
			<div className="w-full max-w-xl min-h-[600px] bg-[#121212] border-none rounded-lg shadow-xl">
				<div className="flex flex-col items-center gap-2 py-6">
					<FaSpotify className="text-white text-5xl" />
					<h1 className="text-3xl font-semibold text-white">Войти в Spotify</h1>
				</div>
				<div className="flex flex-col gap-2 px-8">
					<Button variant="outline" className="flex items-center justify-center h-11 gap-3 w-full bg-[#121212] border-[#3b3b3b] text-white rounded-3xl cursor-pointer">
						<FaGoogle className="text-lg" /> Войти через Google
					</Button>
					<Button variant="outline" className="flex items-center justify-center h-11 gap-3 w-full bg-[#121212] border-[#3b3b3b] text-white rounded-3xl cursor-pointer">
						<FaFacebook className="text-lg" /> Войти через Facebook
					</Button>
					<Button variant="outline" className="flex items-center justify-center h-11 gap-3 w-full bg-[#121212] border-[#3b3b3b] text-white rounded-3xl cursor-pointer">
						<FaApple className="text-lg" /> Войти через Apple
					</Button>

					<div className="border-t border-[#3b3b3b] my-4"></div>

					<a
						href={`${LOGIN_URL}?client_id=${
							import.meta.env.VITE_CLIENT_ID
						}&redirect_uri=${
							import.meta.env.VITE_REDIRECT_URI
						}&response_type=token&scope=user-read-private user-read-email user-library-read user-library-modify 
playlist-read-private playlist-read-collaborative playlist-modify-public 
playlist-modify-private user-follow-read user-follow-modify 
user-read-playback-state user-modify-playback-state user-read-currently-playing 
user-read-recently-played user-top-read streaming`}
					>
						<Button className="w-full text-[#121212] font-bold rounded-3xl h-11 cursor-pointer bg-[#1ed760] hover:bg-[#1ed760] mt-2">
							Войти через Spotify
						</Button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Login;




