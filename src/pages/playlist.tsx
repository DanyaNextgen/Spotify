import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { tokenCTX } from "@/layouts/BaseLayout";
import { BASE_URL } from "@/exports";

const Playlist = () => {
	const { playlistId } = useParams();
	const [tracks, setTracks] = useState([]);
	const token = useContext(tokenCTX); 

	useEffect(() => {
		const fetchTracks = async () => {
		try {
			const response = await fetch(BASE_URL + "/me/playlists", {
			headers: {
				Authorization: `Bearer ${token}`,
			},
			});
			const data = await response.json();
			setTracks(data.items);
		} catch (err) {
			console.error("Error fetching tracks:", err);
		}
		};
		fetchTracks()
	}, [playlistId, token]);

	return (
		<div>
			<Card className="p-4 bg-[#121212] text-white">
				<h2 className="text-2xl font-bold mb-4">Треки из плейлиста</h2>
				<Table>
				<TableHeader>
					<TableRow>
					<TableHead className="text-white">#</TableHead>
					<TableHead className="text-white">Название</TableHead>
					<TableHead className="text-white">Исполнитель</TableHead>
					<TableHead className="text-white">Альбом</TableHead>
					<TableHead className="text-white">Длительность</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{tracks.map((track: any, index: number) => (
					<TableRow key={track.track.id}>
						<TableCell>{index + 1}</TableCell>
						<TableCell>{track.track.name}</TableCell>
						<TableCell>
						{track.track.artists.map((artist: any) => artist.name).join(", ")}
						</TableCell>
						<TableCell>{track.track.album.name}</TableCell>
						<TableCell>
						{Math.floor(track.track.duration_ms / 60000)}:
						{(track.track.duration_ms % 60000 / 1000).toFixed(0).padStart(2, "0")}
						</TableCell>
					</TableRow>
					))}
				</TableBody>
				</Table>
			</Card>
		</div>
  	);
};

export default Playlist;
