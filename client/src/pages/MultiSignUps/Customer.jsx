import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import initializeAuthentication from "../../firebase/firebase.init";
import useAuth from "../../hooks/useAuth";
import { saveToServer } from "../../utils/saveToServer";

initializeAuthentication();
export const Customer = () => {
  const { registerUser } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    registerUser(data.mail, data.pass)
      .then((res) => {
        console.log(res);
        saveToServer(data.mail, "user", "adduser");
        saveToServer(undefined, undefined, "addcusinfo", data);
        navigate("/login");
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div className="mt-10">
      <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 swing-in-top-fwd">
            <h1 className="text-center font-bold text-3xl mt-3">
              Customer Signup
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body w-96">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="input input-bordered"
                  {...register("full_name", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Contact Number</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your 11 digit contact number"
                  className="input input-bordered"
                  {...register("cont_no", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="input input-bordered"
                  {...register("mail", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">NID</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter National ID card Number"
                  className="input input-bordered"
                  {...register("nid", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Image</span>
                </label>
                <input
                  type="text"
                  placeholder="Upload Image in https://ibb.co"
                  className="input input-bordered"
                  {...register("image", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter 6 digit password"
                  className="input input-bordered"
                  {...register("pass", { required: true })}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Confirm Password</span>
                </label>
                <input
                  type="text"
                  placeholder="Retype your password"
                  className="input input-bordered"
                  {...register("pass1", { required: true })}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <>
                <div
                  className={
                    error ? "alert alert-error shadow-lg mt-3" : "hidden"
                  }
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-current flex-shrink-0 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{error.toString()}</span>
                  </div>
                </div>
              </>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary text-bold">
                  Signup
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
