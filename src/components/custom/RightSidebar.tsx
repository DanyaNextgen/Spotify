import { BsFillBackspaceReverseFill, BsThreeDots } from "react-icons/bs";
import { LuMaximize2 } from "react-icons/lu";
import { CiSaveUp2 } from "react-icons/ci";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { Button } from "../ui/button";

const RightSidebar = () => {
  return (
    <ResizablePanel 
      defaultSize={20} 
      className="hidden sm:hidden md:hidden lg:block bg-[#121212] text-white w-full h-screen rounded-2xl p-4 flex-col"
    >
      <div className="flex justify-between items-center">
        <BsFillBackspaceReverseFill size={24} />
        <h2 className="text-lg font-bold">Название трека</h2>
        <div className="flex gap-3">
          <BsThreeDots size={24} />
          <LuMaximize2 size={24} />
        </div>
      </div>

      <img src="/minor.jpg" alt="Трек" className="w-full rounded-lg mt-4" />

      <div className="flex justify-between items-center mt-4">
        <div>
          <h3 className="text-lg font-semibold">Minor</h3>
          <p className="text-sm text-gray-400">Miyagi & Andy Panda</p>
        </div>
        <div className="flex gap-3">
          <CiSaveUp2 size={24} />
          <IoIosCheckmarkCircle className="text-green-500 cursor-pointer" size={30} />
        </div>
      </div>

      <div className="bg-[#222222] rounded-lg p-6 mt-4">
        <div className="flex justify-between items-center">
            <h3 className="text-lg">Сведения</h3>
            <button className="text-sm text-gray-400">Показать все</button>
        </div>

        <div className="flex justify-between items-center mt-4">
            <div>
            <h3 className="text-lg font-semibold text-white">Miyagi & Andy Panda</h3>
            <p className="text-sm text-gray-400">Основной исполнитель</p>
            </div>
            <Button className="bg-[#222222] text-white border text-sm px-4 py-2 rounded-3xl transition">
                Подписаться
            </Button>
        </div>

        <div className="mt-4">
            <h3 className="text-lg font-semibold text-white">Velocity</h3>
            <p className="text-sm text-gray-400 mt-2">Композитор</p>
            <h3 className="text-lg font-semibold text-white">MiyaGi</h3>
            <p className="text-sm text-gray-400 mt-2">Автор текстов</p>
        </div>
      </div>

      <ResizableHandle className="hidden sm:hidden md:hidden lg:block"/>
    </ResizablePanel>
  );
};

export default RightSidebar;

