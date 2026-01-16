import React from "react";
import { TbChartTreemap } from "react-icons/tb";
import { ImProfile } from "react-icons/im";
import { TiShoppingCart } from "react-icons/ti";
import { TbTransactionRupee } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

const SideBar = ({ active, setActive }) => {
  return (
    <>
      <div className="p-3">
        <div className="text-xl font-bold flex items-center gap-3">
          {" "}
          <GiHamburgerMenu />
          User Dashboard
        </div>
        <hr />
        <div className="grid gap-3 p-6">
          <button
            className={`flex gap-3 items-center p-3 rounded-xl ${
              active === "overview"
                ? "bg-(--color-secondary) text-white"
                : " hover:bg-gray-100/70"
            } `}
            onClick={() => setActive("overview")}
          >
            <TbChartTreemap />
            Overview
          </button>
          <button
            className={`flex gap-3 items-center p-3 rounded-xl ${
              active === "profile"
                ? "bg-(--color-secondary) text-white"
                : " hover:bg-gray-100/70"
            } `}
            onClick={() => setActive("profile")}
          >
            <ImProfile />
            Profile
          </button>
          <button
            className={`flex gap-3 items-center p-3 rounded-xl ${
              active === "order"
                ? "bg-(--color-secondary) text-white"
                : " hover:bg-gray-100/70"
            } `}
            onClick={() => setActive("orders")}
          >
            <TiShoppingCart />
            Order
          </button>
          <button
            className={`flex gap-3 items-center p-3 rounded-xl ${
              active === "transaction"
                ? "bg-(--color-secondary) text-white"
                : " hover:bg-gray-100/70"
            } `}
            onClick={() => setActive("transactions")}
          >
            <TbTransactionRupee />
            Transaction
          </button>
          <button
            className={`flex gap-3 items-center p-3 rounded-xl ${
              active === "helpdesk"
                ? "bg-(--color-secondary) text-white"
                : " hover:bg-gray-100/70"
            } `}
            onClick={() => setActive("helpdesk")}
          >
            <RiCustomerService2Line />
            Help Desk
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
