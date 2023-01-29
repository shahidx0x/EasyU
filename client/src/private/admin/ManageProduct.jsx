import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useGetProductServices } from "../../api/getProductService";

const ManageProduct = () => {
  const [productService] = useGetProductServices();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/api-v1/add-prod-services", data);
  };

  return (
    <div className="flex flex-column gap-5">
      <div className="card shadow-xl w-[70rem] h-[120rem]">
        <h2 className="text-center text-3xl mt-5">Manage All Product</h2>
        <div className="flex flex-row flex-wrap justify-center gap-4 mt-10">
          {productService?.map((data, index) => (
            <CardList key={index} props={data} />
          ))}
        </div>
      </div>
      <div className="fixed ml-[72rem] w-[40rem] h-[30rem]">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                type="text"
                placeholder=""
                className="input input-bordered"
                {...register("prod_name", { required: true })}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Category</span>
              </label>
              <input
                type="text"
                placeholder=""
                className="input input-bordered"
                {...register("prod_cat", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                placeholder=""
                className="input input-bordered"
                {...register("price", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="text"
                placeholder=""
                className="input input-bordered"
                {...register("image", { required: true })}
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;

const CardList = ({ props }) => {
  const handleDelete = (id) => {
    const url = `http://localhost:5000/api-v1/prod-services/remove/${id}`;
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
              {props.prod_name}
            </h1>

            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {props.prod_cat}
            </p>
            <h1 class="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
              $220
            </h1>

            <div class="flex  mt-3">
              <button class="mr-5 px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
                Modify
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
