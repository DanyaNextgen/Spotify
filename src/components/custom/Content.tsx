import { playlists, todayTracks, likedAlbums, radioStations } from "@/playlists";
import { ScrollArea } from "@/components/ui/scroll-area";

const Content = () => {
  return (
    <div className="p-4 bg-[#121212] h-screen rounded-3xl">
      <ScrollArea className="w-full lg:w-[calc(100%-25px)] h-full">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {playlists.map((playlist) => (
            <div key={playlist.id} className="flex w-25 items-center gap-5">
              <img src={playlist.image} alt={playlist.name} className="w-full rounded-md" />
              <h3 className="mt-2 text-sm font-medium text-white">{playlist.name}</h3>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold mt-10 text-white">Послушай сегодня</h2>
        <ScrollArea className="whitespace-nowrap">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:flex gap-4 mt-4">
            {todayTracks.map((track) => (
              <div key={track.id} className="w-48 shrink-0">
                <img src={track.image} alt={track.name} className="w-48 h-48 rounded-md" />
                <h3 className="mt-2 text-lg font-medium text-white">{track.name}</h3>
                <p className="text-xs text-gray-400">{track.artist}</p>
              </div>
            ))}
          </div>
        </ScrollArea>

        <h2 className="text-xl font-bold mt-10 text-white">Альбомы с треками, которые тебе нравятся</h2>
        <ScrollArea className="whitespace-nowrap">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:flex gap-4 mt-4">
            {likedAlbums.map((album) => (
              <div key={album.id} className="w-48 shrink-0">
                <img src={album.image} alt={album.name} className="w-48 h-48 rounded-md" />
                <h3 className="mt-2 text-lg font-medium text-white">{album.name}</h3>
                <p className="text-xs text-gray-400">{album.artist}</p>
              </div>
            ))}
          </div>
        </ScrollArea>

        <h2 className="text-xl font-bold mt-10 text-white">Популярные радиостанции</h2>
        <ScrollArea className="whitespace-nowrap">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:flex gap-4 mt-4">
            {radioStations.map((station) => (
              <div key={station.id} className="w-48 shrink-0">
                <img src={station.image} alt={station.name} className="w-48 h-48 rounded-md" />
                <h3 className="mt-2 text-lg font-medium text-white">{station.name}</h3>
              </div>
            ))}
          </div>
        </ScrollArea>
      </ScrollArea>
    </div>
  );
};

export default Content;


