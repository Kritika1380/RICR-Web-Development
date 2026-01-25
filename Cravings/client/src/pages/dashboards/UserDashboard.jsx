import React, { useState } from "react";
import UserSideBar from "../../components/userDashboard/UserSideBar";
import UserOverview from "../../components/userDashboard/userOverview";
import UserProfile from "../../components/userDashboard/UserProfile";
import UserOrder from "../../components/userDashboard/UserOrder";
import UserTransaction from "../../components/userDashboard/UserTransaction";
import UserHelpDesk from "../../components/userDashboard/UserHelpDesk";

const UserDashboard = () => {
  const [active, setActive] = useState("overview");
  const [isCollapsed, setIsCollapsed] = useState(false);
  useEffect(() => {
    if (!islogin) {
      navigate("/login");
    }
  });
  if (role !== "customer") {
    return (
      <>
        <div className="p-3">
         <div className="border rounded shadow p-5 w-4xl mx-auto text-center bg-gray-100">
          <div className="text-5xl text-red-600">
            ⊗
          </div>
            <div>You are not Loggedin as customer.Please login again.</div>
         </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="w-full h-[90vh] flex">
        <div className={`bg-(--color-background) duration-300 ${isCollapsed?"w-2/60":"w-12/60"}`}>
          <UserSideBar
            active={active}
            setActive={setActive}
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
          />
        </div>
        <div className={`duration-300 ${isCollapsed?"w-58/60":"w-48/60"}`}>
          {active === "overview" && <UserOverview />}
          {active === "profile" && <UserProfile />}
          {active === "orders" && <UserOrder />}
          {active === "transactions" && <UserTransaction />}
          {active === "helpdesk" && <UserHelpDesk />}
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
