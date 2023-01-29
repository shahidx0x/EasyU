import React from "react";
import { useGetAllUser } from "../../api/getAllUsers";
import { AiFillDelete } from "react-icons/ai";

const AllUsers = () => {
  const [alluser] = useGetAllUser();
  let t_size = 0;
  let t_admin = 0;
  let t_wp = 0;
  let t_tech = 0;
  let t_user = 0;
  return (
    <div className="flex gap-10">
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>UUID</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {alluser?.reverse().map((each_user) => {
              t_size++;
              if (each_user.role === "admin") t_admin++;
              if (each_user.role === "wp") t_wp++;
              if (each_user.role === "tech") t_tech++;
              if (each_user.role === "user") t_user++;
              return <AllUserTable key={each_user._id} props={each_user} />;
            })}
          </tbody>
        </table>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Total Admin</th>
                <th>Total tech</th>
                <th>Total wp</th>
                <th>Total Customer</th>
                <th>Total Registerd</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-2xl text-red-600">{t_admin}</td>
                <td className="text-2xl">{t_tech}</td>
                <td className="text-2xl">{t_wp}</td>
                <td className="text-2xl">{t_user}</td>
                <td className="text-2xl">{t_size}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;

const AllUserTable = ({ props }) => {
  return (
    <>
      <tr>
        <th>{props._id}</th>
        <td>{props.reg_mail}</td>
        <td>
          <span
            className={
              props.role === "admin"
                ? "badge bg-red-700 text-white"
                : props.role === "user"
                ? "badge bg-green-400 text-white"
                : props.role === "wp"
                ? "badge bg-yellow-300 text-black"
                : props.role === "tech"
                ? "badge bg-violet-500 text-white"
                : "badge"
            }
          >
            {props.role}
          </span>
        </td>
        <td>
          <button className="btn btn-error mr-5">
            <AiFillDelete className="text-white" />
          </button>
          <label htmlFor="my-modal" className="btn mr-5">
            Modify
          </label>
          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal" className="modal-toggle" />
          <div className="modal">
            <div className="w-[50rem] h-[50rem] rounded-2xl bg-white">
              <h3 className="font-bold text-lg">
                Congratulations random Internet user!
              </h3>
              <p className="py-4">
                You've been selected for a chance to get one year of
                subscription to use Wikipedia for free!
              </p>
              <div className="modal-action">
                <label htmlFor="my-modal" className="btn">
                  Done
                </label>
              </div>
            </div>
          </div>
          <button
            className={
              props.role === "admin" ? "hidden" : "btn btn-primary mr-5"
            }
          >
            Make Admin
          </button>
        </td>
      </tr>
    </>
  );
};
