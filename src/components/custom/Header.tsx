import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { BsThreeDots } from "react-icons/bs";
import { MdArrowBackIosNew, MdArrowForwardIos, MdOutlinePreview } from "react-icons/md";
import { GoHomeFill } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import { PiUsersThree } from "react-icons/pi";
import { Link } from "react-router-dom";

const Header = () => {
  const [search, setSearch] = useState("");

  return (
    <header className="p-5 flex items-center justify-between bg-[#000000] text-white gap-4">
        <div className="flex gap-3">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="sm: hidden md:block lg:block p-2 hover:bg-neutral-800 hover:text-white">
                    <BsThreeDots className="text-xl" />
                </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="bg-neutral-800 text-white border border-neutral-700 rounded-md shadow-md">
                <DropdownMenuItem className="hover:bg-neutral-700 px-4 py-2 cursor-pointer">Файл</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-neutral-700 px-4 py-2 cursor-pointer">Правка</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-neutral-700 px-4 py-2 cursor-pointer">Вид</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-neutral-700 px-4 py-2 cursor-pointer">Воспроизведение</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-neutral-700 px-4 py-2 cursor-pointer">Справка</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" className="sm: hidden md:hidden lg:block p-2 hover:bg-neutral-800 hover:text-white">
                <MdArrowBackIosNew className="text-3xl"/>
            </Button>
            <Button variant="ghost" className="sm: hidden md:hidden lg:block p-2 hover:bg-neutral-800 hover:text-white">
                <MdArrowForwardIos className="text-xl" />
            </Button>
        </div>
        
        <div className="flex gap-4">
            <Link to="/">
                <Button variant="ghost" className="sm:hidden md:block lg:block p-2 hover:bg-neutral-800 hover:text-white">
                    <GoHomeFill className="text-2xl" />
                </Button>
            </Link>

            <div className="relative flex-1 max-w-md">
                <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                <Input
                    type="text"
                    placeholder="Что хочешь включить?"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="pl-10 pr-12 bg-neutral-800 border border-neutral-700 text-white rounded-full h-10"
                />
                <MdOutlinePreview className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            </div>
        </div>

        <div className="flex gap-5">
            <Button variant="outline" className="sm: hidden md:hidden lg:block text-black rounded-3xl">
                Узнать больше о премиум
            </Button>
            <Button variant="ghost" className="sm: hidden md:block lg:block p-2 hover:bg-neutral-800 hover:text-white">
                <FaRegBell className="text-xl" />
            </Button>
            <Button variant="ghost" className="sm: hidden md:block lg:block p-2 hover:bg-neutral-800 hover:text-white">
                <PiUsersThree className="text-xl" />
            </Button>

            <div className="w-10 h-10 rounded-full bg-gray-500"></div>
        </div>
    </header>
  );
};

export default Header;

