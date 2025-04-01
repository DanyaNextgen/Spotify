import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FaSpotify, FaGoogle, FaFacebook, FaApple } from "react-icons/fa";

const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (!email) return;

        try {
            const response = await fetch("https://accounts.spotify.com/api/token", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams({
                    grant_type: "client_credentials",
                    client_id: "cc6a7522dbb54e99b975469c11004441",
                    client_secret: "202bc0e730af4d85a4a4c937b25e5d77", 
                }),
            });

            const data = await response.json();

            localStorage.setItem("spotify_token", data.access_token);
            localStorage.setItem("isAuthenticated", "true");
            navigate("/me");
        } catch (err: any) {
            setError(err.message);
            console.error("Ошибка входа:", err.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center bg-gradient-to-b from-[#2a2a2a] to-black min-h-screen">
            <div className="w-full max-w-xl min-h-[600px] bg-[#121212] border-none rounded-lg">
                <div className="flex flex-col items-center gap-2 py-6">
                    <FaSpotify className="text-white text-5xl" />
                    <h1 className="text-3xl font-semibold text-white">Войти в Spotify</h1>
                </div>
                <div className="flex flex-col gap-2 px-30">
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

                    <label className="text-sm text-white font-medium">Электронная почта или имя пользователя</label>
                    <input
                        type="email"
                        placeholder="Электронная почта или имя пользователя"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-[#121212] border-[#3b3b3b] text-white h-11"
                    />

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <Button
                        onClick={handleLogin}
                        className="w-full text-[#121212] font-bold rounded-3xl h-11 cursor-pointer bg-[#1ed760] hover:bg-[#1ed760] mt-2"
                    >
                        Продолжить
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Login;






