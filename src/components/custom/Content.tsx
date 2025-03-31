import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const Content = () => {
  const [playlists, setPlaylists] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  // Устанавливаем токен в localStorage при монтировании
  useEffect(() => {
    const token = "мой токен"; 
    localStorage.setItem("spotify_token", token);
    setAccessToken(token);
    console.log("✅ Токен сохранён в localStorage");
  }, []);

  const fetchPlaylists = async (token: string) => {
    setLoading(true);
    setError(null);

    if (!token) {
      setError("Ошибка: Токен отсутствует. Авторизуйтесь снова.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("https://api.spotify.com/v1/browse/featured-playlists", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        if (response.status === 401) {
          setError("Ошибка: Токен недействителен. Авторизуйтесь снова.");
        } else if (response.status === 404) {
          setError("Ошибка: Данные не найдены.");
        } else {
          setError(`Ошибка API: ${response.status}`);
        }
        setLoading(false);
        return;
      }

      const data = await response.json();
      if (!data.playlists || !data.playlists.items) {
        setError("Ошибка: Неправильный формат данных от API.");
        setLoading(false);
        return;
      }

      setPlaylists(data.playlists.items);
    } catch (err) {
      setError("Ошибка загрузки данных.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (accessToken) {
      fetchPlaylists(accessToken);
    }
  }, [accessToken]); 

  return (
    <ScrollArea className="p-6 text-white bg-[#121212] h-screen rounded-2xl">
      <div className="flex gap-2 mb-6">
        <button className="px-4 py-2 bg-white text-black text-sm font-medium rounded-full">
          Все
        </button>
        <button className="px-4 py-2 bg-[#282828] text-white text-sm font-medium rounded-full hover:bg-[#3e3e3e]">
          Музыка
        </button>
        <button className="px-4 py-2 bg-[#282828] text-white text-sm font-medium rounded-full hover:bg-[#3e3e3e]">
          Подкасты
        </button>
      </div>

      <h2 className="text-xl font-bold mb-4">Только для тебя</h2>

      {loading ? (
        <p className="text-gray-400">Загрузка...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {playlists.map((playlist) => (
            <Card key={playlist.id} className="bg-[#181818] text-white rounded-lg overflow-hidden">
              <CardContent className="p-4 flex flex-col gap-2">
                <img src={playlist.images[0]?.url} alt={playlist.name} className="rounded-md w-full" />
                <div>
                  <p className="text-sm font-bold">{playlist.name}</p>
                  <p className="text-xs text-gray-400">{playlist.owner.display_name}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </ScrollArea>
  );
};

export default Content;
