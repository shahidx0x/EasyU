import useAuth from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";
import ControlPanel from "../components/ControlPanel";
import UserDashbord from "../components/Dashbord/UserDashbord";

export const CustomerOutlet = () => {
  const { user, role } = useAuth();

  return (
    <>
      <main className="flex">
        {user && role?.user === true ? (
          <div className="flex w-full">
            <UserDashbord />
            <Outlet />
          </div>
        ) : (
          <Navigate to="/login" />
        )}
      </main>
    </>
  );
};
