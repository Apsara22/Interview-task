import {
  IoClipboardOutline,
  IoGridOutline,
  IoHomeOutline,
  IoLogOutOutline,
  IoNewspaperOutline,
  IoNotificationsCircleOutline,
  IoPeopleCircleOutline,
  IoPieChartOutline,
} from "react-icons/io5";
export default function Sidebar() {
  const navLinks = [
    {
      title: "Home",
      icon: <IoHomeOutline color="#555" width={"22px"} height={"22px"} />,
      active: false,
    },

    {
      title: "Boards",
      icon: <IoClipboardOutline color="#555" width={"22px"} height={"22px"} />,
      active: true,
    },
    {
        title: "Projects",
        icon: <IoGridOutline color="#555" width={"22px"} height={"22px"} />,
        active: false,
      },
      {
        title: "Analytics",
        icon: <IoPieChartOutline color="#555" width={"22px"} height={"22px"} />,
        active: false,
      },
      {
        title: "Workflow",
        icon: <IoPeopleCircleOutline color="#555" width={"22px"} height={"22px"} />,
        active: false,
      },
      {
        title: "Notification",
        icon: <IoNotificationsCircleOutline color="#555" width={"22px"} height={"22px"} />,
        active: false,
      },
      {
        title: "Newsletter",
        icon: <IoNewspaperOutline color="#555" width={"22px"} height={"22px"} />,
        active: false,
      },
  ];
  return (
    <>
      <div className="fixed left-0 top-0 md:w-[230px] w-[60px] overflow-hidden h-full flex flex-col">
        <div className="w-full flex items-center md:justify-start justify-center md:pl-5 h-[70px] bg-white">
          <span className="text-orange-300 font-semibold text-2xl md:block hidden">
            LOGO
          </span>
          <span className="text-orange-300 font-semibold text-2xl md:hidden block">
            L.
          </span>
        </div>
        <div className="w-full h-[calc(100vh-70px)]  border-r flex flex-col md:items-start items-center gap-2 border-slate-300 bg-white py-5 md:px-3 relative">
          {navLinks.map((link) => {
            return (
              <div
                key={link.title}
                className={`flex items-center gap-2 w-full rounded-lg hover:bg-pink-300 px-2 py-3 cursor-pointer ${
                  link.active ? "bg-pink-300" : "bg-transparent"
                }`}
              >
                {link.icon}
                <span className="font-medium text-[15px] md:block hidden">
                  {link.title}
                </span>
              </div>
            );
          })}
          <div className="flex absolute bottom-4 items-center md:justify-start justify-center gap-2 md:w-[90%] w-[70%] rounded-lg hover:bg-opink-300 px-2 py-3 cursor-pointer bg-gray-200">
            <IoLogOutOutline />
            <span className="font-medium text-[15px] md:block hidden">
              Logout
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
