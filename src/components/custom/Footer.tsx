import { FaPlay, FaStepBackward, FaStepForward, FaRandom } from "react-icons/fa";
import { IoVolumeHigh } from "react-icons/io5";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FiMaximize2 } from "react-icons/fi";
import { HiOutlineQueueList } from "react-icons/hi2";
import { CgPlayButtonR } from "react-icons/cg";
import { PiRepeatFill } from "react-icons/pi";
import { PiMicrophoneStageBold } from "react-icons/pi";
import { TbDevices2 } from "react-icons/tb";
import { CgMiniPlayer } from "react-icons/cg";

const Footer = () => {
  return (
    <footer className="p-4 bg-black text-white flex items-center justify-between">
      <div className="flex items-center gap-4 w-[300px]">
        <img
          src="/minor.jpg"
          alt="Minor"
          className="w-14 h-14 rounded-md"
        />
        <div className="flex flex-col">
          <span className="text-sm font-semibold">Minor</span>
          <span className="text-xs text-gray-400">Miyagi & Andy Panda</span>
        </div>
        <IoIosCheckmarkCircle className="text-green-500 text-lg cursor-pointer" size={30}/>
      </div>

      <div className="flex flex-col items-center gap-2 w-[500px]">
        <div className="flex items-center gap-6">
          <FaRandom className="cursor-pointer" />
          <FaStepBackward className="cursor-pointer" />
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:scale-110 transition">
            <FaPlay size={20} className="cursor-pointer"/>
          </button>
          <FaStepForward className="cursor-pointer" />
		  <PiRepeatFill className="cursor-pointer"/>
        </div>

        <div className="flex items-center gap-2 w-full">
          <span className="text-xs text-gray-400">0:00</span>
          <div className="w-full h-[4px] bg-[#121212] rounded-full cursor-pointer">
            <div className="w-[10%] h-full bg-white rounded-full"></div>
          </div>
          <span className="text-xs text-gray-400">2:55</span>
        </div>
      </div>

      <div className="flex items-center gap-4 w-[300px] justify-end">
	  	<CgPlayButtonR size={30} className="cursor-pointer"/>
		<PiMicrophoneStageBold size={30} className="cursor-pointer"/>
        <HiOutlineQueueList size={30} className="cursor-pointer"/>
		<TbDevices2 size={30} className="cursor-pointer"/>
        <IoVolumeHigh className="cursor-pointer" size={30}/>
        <div className="w-24 h-[4px] bg-[#121212] rounded-full cursor-pointer">
          <div className="w-[50%] h-full bg-white rounded-full"></div>
        </div>
		<CgMiniPlayer size={30} className="cursor-pointer"/>
        <FiMaximize2 className="cursor-pointer" size={30}/>
      </div>
    </footer>
  );
};

export default Footer;

