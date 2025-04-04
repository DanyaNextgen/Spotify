import { ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { LuLibraryBig } from "react-icons/lu";
import { GoPlus } from "react-icons/go";
import { IoMdArrowForward, IoIosList, IoIosSearch } from "react-icons/io";
import { useState } from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
	const [searchOpen, setSearchOpen] = useState(false);
	const navigate = useNavigate(); 

	const handlePlaylistClick = () => {
		navigate("/playlist/liked-songs");
	};

	return (
		<ResizablePanel defaultSize={20} className="bg-[#121212] text-white w-full h-screen rounded-2xl hidden sm:hidden md:hidden lg:block">
		<div className="p-4 flex flex-col gap-4">
			<div className="flex justify-between items-center">
			<div className="flex items-center gap-2">
				<LuLibraryBig size={24} />
				<h2 className="text-lg font-bold">Моя медиатека</h2>
			</div>
			<div className="flex items-center gap-2">
				<Button>
				Создать
				<GoPlus />
				</Button>
				<button className="p-2 hover:bg-neutral-800 rounded">
				<IoMdArrowForward />
				</button>
			</div>
			</div>

			<div className="flex gap-2 text-sm">
			<button className="px-3 py-1 bg-neutral-800 rounded text-gray-300">Плейлисты</button>
			<button className="px-3 py-1 bg-neutral-800 rounded text-gray-300">Исполнители</button>
			</div>

			<div className="flex items-center justify-between">
			{searchOpen ? (
				<input
				type="text"
				placeholder="Что хочешь включить?"
				className="bg-neutral-800 px-3 py-1 rounded w-full"
				/>
			) : (
				<button onClick={() => setSearchOpen(true)} className="p-2 hover:bg-neutral-800 rounded">
				<IoIosSearch />
				</button>
			)}
			<Button>
				Недавние
				<IoIosList />
			</Button>
			</div>

			<div className="mt-4 flex items-center gap-3" onClick={handlePlaylistClick}>
			<img
				src="/liked-songs.png"
				alt="Любимые треки"
				className="w-14 h-14 rounded-md"
			/>
			<div>
				<h3 className="text-lg font-semibold">Любимые треки</h3>
				<p className="text-sm text-gray-400">Плейлист</p>
			</div>
			</div>
		</div>
		<ResizableHandle />
		</ResizablePanel>
	);
};

export default Sidebar;
