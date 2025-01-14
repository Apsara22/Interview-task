import { IoMdArrowDropdown } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { IoNotificationsCircle } from "react-icons/io5";

export default function Navbar() {
  return (
    <>
      <div className="md:w-[calc(100%)-230px] w-[calc(100%-60px)] fixed flex items-center justify-between pl-2 pr-6 h-[70px] top-0 md:left-[230px] left-[60px] border-b border-slate-300 bg-[#fff]">
        <div className="flex items-center gap-3 cursor-pointer">
          <IoPersonCircle className="w-[20px] h-[20px] text-pink-300" />
          <span className="text-pink-300 font-semibold md:text-lg text-sm whitespace-nowrap">
            board Name
          </span>
          <IoMdArrowDropdown className="w-[20px] h-[20px] text-pink-300" />
        </div>
        <div className="flex items center gap-2 md:w-[400px] w-[190px] bg-gray-100 rounded-lg px-3 py-[10px]">
          <IoSearch />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-100 outline-none text-[15px]"
          />
        </div>
        <div className="flex  items-center gap-4 pr-[150px] ">
          
          <div className="grid place-items-center bg-gray-100 rounded-full p-2 cursor-pointer">
            <IoSettings />
          </div>
          <div className="grid place-items-center bg-gray-100 rounded-full p-2 cursor-pointer">
            <IoNotificationsCircle />
          </div>
        </div>
      </div>
    </>
  );
}
