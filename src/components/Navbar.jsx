import {
  House,
  Search,
  FolderSearch,
  CircleArrowDown,
  Bell,
} from "lucide-react";
import logo from "/src/assets/spotify_white.png";
import group from "/src/assets/people-group-solid.svg";
import profile from "/src/assets/profile.png";

const Navbar = () => {
  return (
    <div
      className="h-15 bg-black flex items-center justify-between
     px-6"
    >
      <div className="flex items-center gap-4">
        <img src={logo} alt="Spotify Logo" className="w-9" />
        <div className="rounded-full w-9 h-9 flex items-center justify-center bg-[#626262] transform transition duration-300 hover:scale-110">
          <House color="#f2f2f2" className="cursor-pointer" />
        </div>
        <div className="w-100 h-11 border rounded-3xl  bg-[#323232] flex items-center px-3 justify-between">
          <div className="flex items-center">
            <Search
              size={26}
              color="#cccccc"
              className="cursor-pointer transform transition duration-300 hover:scale-120"
            />
            <input
              className=" w-76 ml-2 h-9 rounded-2xl bg-transparent border-none text-white"
              type="text"
              placeholder="What do you want to play?"
            />
          </div>
          <div className="h-8 border-r border-gray-300 mr-2"></div>
          <div>
            <FolderSearch
              color="#cccccc"
              className="transform transition duration-300 hover:scale-120"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-5 items-center ">
        <p className="bg-[#f1f1f1] text-black text-sm font-semibold py-1.5 px-3 rounded-3xl cursor-pointer transform transition duration-300 hover:scale-105">
          Explore Premium
        </p>
        <div className="flex items-center cursor-pointer transform transition duration-300 hover:scale-110">
          <CircleArrowDown color="#f1f1f1" className="w-4" />
          <p className="text-[#cccccc] text-[13px] font-semibold ml-1 ">
            Install App
          </p>
        </div>
        <div className="relative inline-block group">
          <span>
            <Bell
              color="#cccccc"
              className="cursor-pointer transform transition duration-300 hover:scale-120"
            />
          </span>
          <span
            className="absolute left-1/2 top-full mt-2 -translate-x-1/2 
               bg-gray-600 text-white text-xs rounded px-2 py-1 
               opacity-0 group-hover:opacity-100 transition whitespace-nowrap"
          >
            What's New
          </span>
        </div>
        <div className="relative inline-block group">
          <span>
            <img src={group} alt="Group Icon" className="w-5 cursor-pointer" />
          </span>
          <span
            className="absolute left-1/2 top-full mt-2 -translate-x-1/2 
               bg-gray-600 text-white text-xs rounded px-2 py-1 
               opacity-0 group-hover:opacity-100 transition whitespace-nowrap"
          >
            Friend Activity
          </span>
        </div>
        <div className="bg-[#323232] rounded-full w-12 h-12 flex items-center justify-center">
          <img
            src={profile}
            alt="profile-pic"
            className="w-7 h-7 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
