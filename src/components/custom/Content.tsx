import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";

const Content = () => {
    const [token, setToken] = useState<string | null>(null);
    const [data, setData] = useState({
        playlists: [],
        todayTracks: [],
        likedAlbums: [],
        radioStations: [],
    });

    const navigate = useNavigate();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.hash.replace("#", "?"));
        const accessToken = urlParams.get("access_token");
        if (accessToken) {
            setToken(accessToken);
            localStorage.setItem("spotify_token", accessToken);
        } else {
            const savedToken = localStorage.getItem("spotify_token");
            if (savedToken) {
                setToken(savedToken);
            } else {
                navigate("/login");
            }
        }
    }, [navigate]);

    useEffect(() => {
        if (!token) return;

        const fetchData = async () => {
            try {
                const headers = {
                    Authorization: `Bearer ${token}`,
                };

                const playlistsResponse = await fetch("https://api.spotify.com/v1/me/playlists", { headers });
                const playlistsData = await playlistsResponse.json();
                console.log("Плейлисты:", playlistsData);

                const tracksResponse = await fetch("https://api.spotify.com/v1/me/top/artists", { headers });
                const tracksData = await tracksResponse.json();
                console.log("Треки:", tracksData);

                setData({
                    playlists: playlistsData.items,
                    todayTracks: tracksData.items,
                    likedAlbums: playlistsData.items, 
                    radioStations: [], 
                });
            } catch (error) {
                console.error("Ошибка загрузки данных с Spotify:", error);
            }
        };

        fetchData();
    }, [token]);

    return (
        <div className="p-4 bg-[#121212] h-screen rounded-3xl">
            <ScrollArea className="w-full lg:w-[calc(100%-25px)] h-full">
                <h2 className="text-xl font-bold mt-10 text-white">Плейлисты</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                    {data.playlists.map((playlist: any) => (
                        <div key={playlist.id} className="flex w-25 items-center gap-5">
                            <img
                                src={playlist.images[0]?.url || ""}
                                alt={playlist.name}
                                className="w-full rounded-md"
                            />
                            <h3 className="mt-2 text-sm font-medium text-white">{playlist.name}</h3>
                        </div>
                    ))}
                </div>

                <h2 className="text-xl font-bold mt-10 text-white">Треки, которые тебе понравились</h2>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:flex gap-4 mt-4">
                    {data.todayTracks.map((track: any) => (
                        <div key={track.id} className="w-48 shrink-0">
                            <img
                                src={track.images[0]?.url || ""}
                                alt={track.name}
                                className="w-48 h-48 rounded-md"
                            />
                            <h3 className="mt-2 text-lg font-medium text-white">{track.name}</h3>
                            <p className="text-xs text-gray-400">{track.artist}</p>
                        </div>
                    ))}
                </div>
            </ScrollArea>
        </div>
    );
};

export default Content;



