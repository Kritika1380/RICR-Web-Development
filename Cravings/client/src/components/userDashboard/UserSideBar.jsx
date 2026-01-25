import React from "react";
import { TbChartTreemap } from "react-icons/tb";
import { ImProfile } from "react-icons/im";
import { TiShoppingCart } from "react-icons/ti";
import { TbTransactionRupee } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import api from "../../config/Api";
import toast from "react-hot-toast";
import { useAuth } from "../../context/authContext";
import { MdLogout } from "react-icons/md";

const UserSideBar = ({ active, setActive, isCollapsed, setIsCollapsed }) => {
  const { setUser, setIsLogin } = useAuth();
  const menuItems = [
    { key: "overview", title: "OverView", icon: <TbChartTreemap /> },
    { key: "profile", title: "Profile", icon: <ImProfile /> },
    { key: "orders", title: "Orders", icon: <TiShoppingCart /> },
    { key: "transaction", title: "Transaction", icon: <TbTransactionRupee /> },
    { key: "helpdesk", title: "Help desk", icon: <RiCustomerService2Line /> },
  ];

  const handleLogout = async () => {
    try {
      const res = await api.get("/auth/logout");
      toast.success(res.data.message);
      setUser("");
      setIsLogin(false);
      sessionStorage.removeItem("CravingUser");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Unknown Error");
    }
  };
  return (
    <>
      <div className="p-2 flex h-full flex-col">
        <div>
          <div
            className=" h-10 font-bold text-xl flex items-center gap-5 mb-3"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {" "}
            <button className="hover:scale-105 ms-2">
              <GiHamburgerMenu />
            </button>
            {!isCollapsed && (
              <span className="overflow-hidden text-nowrap">
                User Dashboard
              </span>
            )}
          </div>
          <hr />
          <div className="space-y-6 py-6 w-full">
            {menuItems.map((item, idx) => (
              <button
                className={`flex gap-3 items-center ps-2 rounded-xl h-10 w-full text-nowrap overflow-hidden duration-300 ${
                  active === item.key
                    ? "bg-(--color-secondary) text-white"
                    : " hover:bg-gray-100/70"
                } 
              `}
                onClick={() => setActive(item.key)}
                key={idx}
              >
                {item.icon}
                {!isCollapsed && item.title}
              </button>
            ))}
          </div>
        </div>
        <div>
          <button
            className="flex gap-3 items-center text-lg ps-2 rounded-xl h-10 w-full text-nowrap overflow-hidden duration-300"
            onClick={handleLogout}
          >
            <MdLogout />
            {!isCollapsed && "Logout"}
          </button>
        </div>
      </div>
    </>
  );
};

export default UserSideBar;
