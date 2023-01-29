import axios from "axios";
import React from "react";
import { useGetEmrServices } from "../../api/getEmrServices";
import useGetTechinfo from "../../api/getTechinfo";
import useGetWPinfo from "../../api/getWPinfo";

const ManageTech = () => {
  const [techInfo] = useGetTechinfo();
  const [wpInfo] = useGetWPinfo();
  const [emrServices] = useGetEmrServices();

  return (
    <div className="flex flex-column gap-5">
      <div className="card shadow-xl w-[70rem] h-[120rem]">
        <h2 className="text-center text-3xl mt-5">Manage Technetian and Wp</h2>
        <div className="flex flex-row flex-wrap justify-center gap-4 mt-10">
          {techInfo
            ?.filter((each_tech) => each_tech.status !== "active")
            ?.map((data, index) => (
              <CardList key={index} props={data} />
            ))}
          {wpInfo?.map((data, index) => (
            <CardListFwp key={index} props={data} />
          ))}
        </div>
      </div>
      <div className=" w-[40rem] ">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-xl bg-base-100">
          <div className="card">
            <h2 className="text-center text-2xl font-bold">Accepted Tec/Wp</h2>
            <div className="flex flex-row flex-wrap justify-center gap-4 mt-10">
              {emrServices?.map((data, index) => (
                <CardListRight key={index} props={data} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageTech;

const CardList = ({ props }) => {
  const handleDelete = (id) => {
    const url = `http://localhost:5000/api-v1/techinfo/remove/${id}`;
    axios.delete(url);
  };
  const handleAccept = (id, tech_name, srv_area, cont_no, image, exp_area) => {
    const payload = { tech_name, srv_area, cont_no, image, exp_area };
    axios.post("http://localhost:5000/api-v1/add-emr-services", payload);
    const patchURL = `http://localhost:5000/api-v1/techinfo/update/${id}`;
    axios.patch(patchURL, { status: "active" });
  };
  return (
    <>
      <div className="w-[25rem] rounded-3xl">
        <div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <div className="w-2/3 bg-cover">
            <img src={props.image} alt="" />
          </div>

          <div className="w-2/3 p-4 md:p-4">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              {props.full_name}
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {props.exp_area}
            </p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {props.srv_area}
            </p>
            <h1 class="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
              {props.cont_no}
            </h1>

            <div class="flex  mt-3">
              <label
                htmlFor="my-modal-6"
                class="mr-3 px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600"
              >
                View
              </label>
              {/* modal start */}
              <input type="checkbox" id="my-modal-6" className="modal-toggle" />
              <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                  <h3 className="font-bold text-lg text-center">
                    Signdup Technetian Information
                  </h3>
                  <h1 className="mt-5 text-2xl font-mono text-gray-800 dark:text-white">
                    Full Name :{" "}
                    <span className="font-thin">{props.full_name}</span>
                  </h1>
                  <p className="font-mono mt-2 text-md text-gray-600 dark:text-gray-400">
                    Expertise Area :{" "}
                    <span className="font-mono">{props.exp_area}</span>
                  </p>
                  <p className="font-mono mt-2 text-md text-gray-600 dark:text-gray-400">
                    Service Area : {props.srv_area}
                  </p>
                  <p className="font-mono mt-2 text-md text-gray-600 dark:text-gray-400">
                    mail : {props.mail}
                  </p>
                  <p className="font-mono mt-2 text-md text-gray-600 dark:text-gray-400">
                    contact number : 0{props.cont_no}
                  </p>
                  <p className="font-mono mt-2 text-md text-gray-600 dark:text-gray-400">
                    nid number : {props.nid}
                  </p>
                  <p className="font-mono mt-2 text-md text-gray-600 dark:text-gray-400">
                    parmanent address : {props.par_add}
                  </p>
                  <p className="font-mono mt-2 text-md text-gray-600 dark:text-gray-400">
                    present address : {props.pre_add}
                  </p>
                  <div className="modal-action">
                    <label htmlFor="my-modal-6" className="btn">
                      done
                    </label>
                  </div>
                </div>
              </div>
              {/* modal end */}
              <button
                onClick={() =>
                  handleAccept(
                    props._id,
                    props.full_name,
                    props.srv_area,
                    props.cont_no,
                    props.image,
                    props.exp_area
                  )
                }
                class="mr-3 px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-green-400 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600"
              >
                Accept
              </button>

              <button
                onClick={() => handleDelete(props._id)}
                class="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-red-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const CardListFwp = ({ props }) => {
  const handleDelete = (id) => {
    const url = `http://localhost:5000/api-v1/wpinfo/remove/${id}`;
    axios.delete(url);
  };
  return (
    <>
      <div className="w-[25rem] rounded-3xl">
        <div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <div className="w-2/3 bg-cover">
            <img src={props.image} alt="" />
          </div>

          <div className="w-2/3 p-4 md:p-4">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              {props.full_name}
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">""</p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {props.srv_area}
            </p>
            <h1 class="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
              {props.cont_no}
            </h1>

            <div class="flex  mt-3">
              <button class="mr-3 px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
                View
              </button>
              <button class="mr-3 px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-green-400 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
                Accept
              </button>
              <button
                onClick={() => handleDelete(props._id)}
                class="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-red-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const CardListRight = ({ props }) => {
  const handleDelete = (id) => {
    const url = `http://localhost:5000/api-v1/emr-services/remove/${id}`;
    axios.delete(url);
  };
  return (
    <>
      <div className="w-[25rem] rounded-3xl">
        <div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <div className="w-2/3 bg-cover">
            <img src={props.image} alt="" />
          </div>

          <div className="w-2/3 p-4 md:p-4">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              {props.tech_name}
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {props.exp_area}
            </p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {props.srv_area}
            </p>
            <h1 class="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
              0{props.cont_no}
            </h1>

            <div class="flex  mt-3">
              <button
                onClick={() => handleDelete(props._id)}
                class="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-red-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
