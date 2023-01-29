import { IoIosArrowDropright } from "react-icons/io";
import{Link as LL} from "react-router-dom";
export const Signup = () => {
  
  return (
    <>
      <div className="flex flex-row gap-6 ml-16 mt-6 ">
        <div className="card w-96 bg-base-100 shadow-xl image-full roll-in-blurred-left ">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Customer</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <LL to="/creating-new-customer" className="btn btn-primary  text-3xl">
                <IoIosArrowDropright />
              </LL>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full roll-in-blurred-top">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Technetian</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <LL to="/creating-new-technetian" className="btn btn-primary  text-3xl">
                <IoIosArrowDropright />
              </LL>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full roll-in-blurred-right">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">W/P Authority</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <LL to="/creating-new-wp" className="btn btn-primary  text-3xl">
                <IoIosArrowDropright />
              </LL>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
