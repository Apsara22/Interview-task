import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Rootlayout() {
  return (
    <>
      <div className="w-screen h-screen relative">
        <Navbar />
        <Sidebar/>

        <main className="md:pl-[250px] pl-[60px] pr-[20px] p-[70px] w-full h-full overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </>
  );
}
