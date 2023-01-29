import Slide from "react-reveal/Slide";
import { Link } from "react-router-dom";
export const ServiceCard = ({ props }) => {
  return (
    <>
      <Slide top>
        <div className="ml-6">
          <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{props.title}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <Link to={props.link} className="btn btn-primary font-semibold rounded-tl-3xl rounded-br-3xl">
                  Get Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </>
  );
};
