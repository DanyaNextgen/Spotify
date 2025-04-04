import React, { useContext, useEffect, useState } from "react";
import { tokenCTX } from "@/layouts/BaseLayout";
import { BASE_URL } from "@/exports";
import { ScrollArea } from "@/components/ui/scroll-area";

interface homeProps {}

const Home: React.FC<homeProps> = () => {
	const [tracks, setTracks] = useState([]);
	const [albums, setAlbums] = useState([]);
	const [newAlbums, setNewAlbums] = useState([]);
	const token = useContext(tokenCTX);

	useEffect(() => {
		const getTracks = async () => {
			try {
				const response = await fetch(BASE_URL + "/me/tracks", {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});

				const data = await response.json();

				setTracks(data.items);
			} catch (err) {
				console.error(err);
			}
		};

		getTracks();

		const getAlbums = async () => {
			try {
				const response = await fetch(BASE_URL + "/me/albums", {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});

				const data = await response.json();
				setAlbums(data.items);
			} catch (err) {
				console.error(err);
			}
		};

		getAlbums();

		const getPLaylists = async () => {
			try {
				const response = await fetch(BASE_URL + "/me/playlists", {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});

				const data = await response.json();
				// console.log(data);	
				setAlbums(data.items);
			} catch (err) {
				console.error(err);
			}
		};

		getPLaylists();

		const getReleases = async () => {
			try {
				const response = await fetch(
					BASE_URL + "/browse/new-releases",
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);

				const data = await response.json();
				console.log(data);

				setNewAlbums(data.albums.items);
			} catch (err) {
				console.error(err);
			}
		};

		getReleases();

	}, []);

	return (
		<ScrollArea className="p-4">
			<div className="flex flex-col bg-black text-white rounded-lg shadow-lg">
				<main className="flex-1">
					<section className="mb-8">
						<h1 className="text-3xl font-bold mb-6">Tracks</h1>
						<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
						{tracks.map((track: any) => (
							<div key={track.track.id} className="bg-neutral-800 rounded-lg p-4 hover:bg-neutral-700 transition-all duration-300">
							<img
								src={track.track.album.images[2].url || ""}
								alt={track.track.name}
								className="w-full h-40 object-cover rounded-md mb-4"
							/>
							<h3 className="text-lg font-semibold text-white">{track.track.name}</h3>
							<p className="text-sm text-gray-400 mt-2">{track.track.artists[0].name}</p>
							</div>
						))}
						</div>
					</section>

					<section className="mb-8">
						<h1 className="text-3xl font-bold mb-6">Albums</h1>
						<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
						{albums.map((album: any) => (
							<div key={album.album.id} className="bg-neutral-800 rounded-lg p-4 hover:bg-neutral-700 transition-all duration-300">
							<img
								src={album.album.images[2].url || ""}
								alt={album.album.name}
								className="w-full h-40 object-cover rounded-md mb-4"
							/>
							<h3 className="text-lg font-semibold text-white">{album.album.name}</h3>
							<p className="text-sm text-gray-400 mt-2">{album.album.artists[0].name}</p>
							</div>
						))}
						</div>
					</section>

					<section className="mb-8">
						<h1 className="text-3xl font-bold mb-6">New Albums</h1>
						<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
						{newAlbums.map((album: any) => (
							<div key={album.id} className="bg-neutral-800 rounded-lg p-4 hover:bg-neutral-700 transition-all duration-300">
							<img
								src={album.images[0].url || ""}
								alt={album.name}
								className="w-full h-40 object-cover rounded-md mb-4"
							/>
							<h3 className="text-lg font-semibold text-white">{album.name}</h3>
							<p className="text-sm text-gray-400 mt-2">{album.artists[0].name}</p>
							</div>
						))}
						</div>
					</section>
				</main>
			</div>
		</ScrollArea>
	  );
};

export default Home;
