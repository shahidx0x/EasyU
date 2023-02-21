import { Link, Link as LL } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { BsCart4 } from "react-icons/bs";
export const Navbar = () => {
  const { user, logout, role } = useAuth();

  return (
    <div>
      <div style={{ backgroundColor: "#f2faff" }} className="navbar">
        <div className="flex-none">
          <LL
            className="btn btn-ghost normal-case text-xl font-extrabold "
            to="/home"
          >
            easyU
          </LL>
        </div>
        <div className="flex-auto w-64">
          <div className="lg:max-w-[452px]  w-full mx-auto mt-3  pb-5 rounded flex">
            <div className="relative">
              <svg
                className="absolute z-20 cursor-pointer top-[18px] left-4"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2716 13.1684L11.3313 10.2281C12.0391 9.28574 12.4213 8.13865 12.42 6.96C12.42 3.94938 9.97063 1.5 6.96 1.5C3.94938 1.5 1.5 3.94938 1.5 6.96C1.5 9.97063 3.94938 12.42 6.96 12.42C8.13865 12.4213 9.28574 12.0391 10.2281 11.3313L13.1684 14.2716C13.3173 14.4046 13.5114 14.4756 13.711 14.47C13.9105 14.4645 14.1004 14.3827 14.2415 14.2415C14.3827 14.1004 14.4645 13.9105 14.47 13.711C14.4756 13.5114 14.4046 13.3173 14.2716 13.1684ZM3.06 6.96C3.06 6.18865 3.28873 5.43463 3.71727 4.79328C4.14581 4.15192 4.7549 3.65205 5.46754 3.35687C6.18017 3.06169 6.96433 2.98446 7.72085 3.13494C8.47738 3.28542 9.17229 3.65686 9.71772 4.20228C10.2631 4.74771 10.6346 5.44262 10.7851 6.19915C10.9355 6.95567 10.8583 7.73983 10.5631 8.45247C10.268 9.1651 9.76808 9.77419 9.12673 10.2027C8.48537 10.6313 7.73135 10.86 6.96 10.86C5.92604 10.8588 4.93478 10.4475 4.20365 9.71635C3.47253 8.98522 3.06124 7.99396 3.06 6.96Z"
                  fill="#4B5563"
                />
              </svg>
              <input
                className="relative text-sm leading-none text-gray-600 bg-white  rounded lg:max-w-[60rem] w-[35rem] px-10 py-4 outline-none"
                type="text"
                name
                id
                placeholder="Search"
              />
            </div>
            <button className="mx-2 my-2 mt-[-3px] bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white p-5 text-xs">
              Search
            </button>
          </div>
        </div>

        <div className="flex flex-row gap-3">
          <div className={Object.keys(user).length !== 0 ? "hidden" : "block"}>
            <Link
              to="/login"
              className="mx-2 my-2 bg-white transition duration-150 ease-in-out hover:border-indigo-600 hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-8 py-3 text-sm"
            >
              Sign In
            </Link>
            <Link
              to="/creating-new-user"
              className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm"
            >
              Sign Up
            </Link>
          </div>

          <div className="flex justify-center items-center gap-5">
            <div>
              <h1>
                <span
                  className={
                    Object.keys(user).length !== 0 ? "font-bold" : "hidden"
                  }
                >
                  Login as :{" "}
                </span>
                {user.email}
              </h1>
            </div>

            {/* //user */}
            <div
              className={
                Object.keys(user).length !== 0 && role.user === true
                  ? "dropdown dropdown-end"
                  : "hidden"
              }
            >
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" alt="x" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link className="justify-between">Profile</Link>
                </li>
                <li>
                  <Link to="/customer/my-carts">Dashbord</Link>
                </li>
                <li>
                  <Link onClick={logout}>Logout</Link>
                </li>
              </ul>
            </div>
            {/* //admin */}
            <div
              className={
                Object.keys(user).length !== 0 && role.admin === true
                  ? "dropdown dropdown-end"
                  : "hidden"
              }
            >
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" alt="x" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link className="justify-between">Profile</Link>
                </li>
                <li>
                  <Link to="/admin/all/user/list">Control Pannel</Link>
                </li>
                <li>
                  <Link onClick={logout}>Logout</Link>
                </li>
              </ul>
            </div>
            {/* //wp */}
            <div
              className={
                Object.keys(user).length !== 0 && role.wp === true
                  ? "dropdown dropdown-end"
                  : "hidden"
              }
            >
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" alt="x" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link className="justify-between">Profile</Link>
                </li>
                <li>
                  <Link>My Order</Link>
                </li>
                <li>
                  <Link onClick={logout}>Logout</Link>
                </li>
              </ul>
            </div>
            {/* tech */}
            <div
              className={
                Object.keys(user).length !== 0 && role.tech === true
                  ? "dropdown dropdown-end"
                  : "hidden"
              }
            >
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" alt="x" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link className="justify-between">Profile</Link>
                </li>
                <li>
                  <Link>My order</Link>
                </li>
                <li>
                  <Link onClick={logout}>Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#f2faff" }} className="navbar shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link to="/home">Home</Link>

              <li>
                <Link>Item 3</Link>
              </li>
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl"></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/home" className="font-bold">
                Home
              </Link>
            </li>
            <li>
              <Link className="font-bold" to="/emergency-service">
                Emergency Service
              </Link>
            </li>

            <Link
              className="btn-ghost p-3 rounded-lg font-bold"
              to="/wp-service"
            >
              Find W/P
            </Link>
            <Link className="btn-ghost p-3 rounded-lg font-bold" to="/booking">
              Booking
            </Link>
            <Link
              className="btn-ghost p-3 rounded-lg font-bold"
              to="/buy-products"
            >
              Equipment
            </Link>

            <li>
              <Link to="/contact-us" className="font-bold">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="font-bold">
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end"></div>
      </div>
    </div>
  );
};
