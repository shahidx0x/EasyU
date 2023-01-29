import useAuth from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";
import ControlPanel from "../components/ControlPanel";

export const AdminOutlet = () => {
  const { user, role } = useAuth();

  return (
    <>
      <main className="flex">
        {user && role?.tech === true ? (
          <div className="flex gap-10 flex-column">
            <ControlPanel />
            <Outlet />
          </div>
        ) : (
          <Navigate to="/login" />
        )}
      </main>
    </>
  );
};
