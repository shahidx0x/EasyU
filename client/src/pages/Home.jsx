import { Carousel } from "../components/Carousel";
import Help from "../components/Help";
import { Hero } from "../components/Hero";
import Partner from "../components/Partner";
import Review from "../components/Review";
import { ServiceCard } from "../components/ServiceCard";
import States from "../components/States";

import { scd } from "../Data/ServiceCardData";

export const Home = () => {
  return (
    <main>
      <Hero />
      <States />
      <Carousel />
      <div className="xl:mx-auto xl:container 2xl:px-20 px-6 py-20">
        <h1 className="text-5xl font-semibold leading-10 text-gray-800 text-center">
          Our Top Services
        </h1>
        <div className="flex flex-wrap items-stretch xl:justify-between justify-center mt-16 xl:gap-6 gap-4">
          <div className="lg:w-96 w-80">
            <img
              src="https://www.uei.edu/wp-content/uploads/sites/5/2022/08/how-to-become-automotive-technician.jpg"
              className="h-72 w-full object-cover object-center rounded-t-md"
              alt="woman smiling"
            />
            <div className="bg-white shadow-md rounded-md py-4 text-center">
              <p className=" font-medium leading-6 text-gray-600 text-2xl">
                Technician
              </p>
              <p className="text-base leading-6 mt-2 text-gray-800">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque repudiandae necessitatibus quia cumque, mollitia
              </p>
            </div>
          </div>
          <div className="bg-indigo-700 rounded-md lg:w-96 w-80 flex flex-col items-center justify-center md:py-0 py-12">
            <h3 className="text-2xl font-semibold leading-6 text-center text-white">
              About Our Popular Services
            </h3>
            <p className="lg:w-80 lg:px-0 px-4 text-base leading-6 text-center text-white mt-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
              assumenda hic nostrum magnam? Quisquam laborum at rerum maiores
              fugit voluptatem, perspiciatis eum ducimus. Nostrum animi corrupti
              expedita hic enim mollitia!
            </p>
          </div>
          <div className="lg:w-96 w-80">
            <img
              src="https://rightlook.com/wp-content/uploads/2022/07/rightlook_supplies_equipment_callout_hero.png"
              className="h-72 w-full object-cover object-center rounded-t-md"
              alt="woman in black dress"
            />
            <div className="bg-white shadow-md rounded-md py-4 text-center">
              <p className="text-2xl font-medium leading-6 text-gray-600">
                Equipment
              </p>
              <p className="text-base leading-6 mt-2 text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, excepturi maxime, ipsam consectetur cupiditate quam
              </p>
            </div>
          </div>
          <div className="lg:w-96 w-80">
            <img
              src="https://vinsautogroup.com.sg/wp-content/uploads/2017/12/workshop-banner.jpg"
              className="h-72 w-full object-cover object-center rounded-t-md"
              alt="woman smiling"
            />
            <div className="bg-white shadow-md rounded-md py-4 text-center">
              <p className="text-2xl font-medium leading-6 text-gray-600">
                Workshop
              </p>
              <p className="text-base leading-6 mt-2 text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                nam fugit impedit nobis, enim voluptatibus, illum commodi
                consequatur
              </p>
            </div>
          </div>
          <div className="lg:w-96 w-80">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Sandakan_Sabah_Shell-Station-Labuk_Road-01.jpg"
              className="h-72 w-full object-cover object-center rounded-t-md"
              alt="woman smiling"
            />
            <div className="bg-white shadow-md rounded-md py-4 text-center">
              <p className="text-2xl font-medium leading-6 text-gray-600">
                Filling Station
              </p>
              <p className="text-base leading-6 mt-2 text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore est neque consectetur facilis, voluptas aperiam.
                Dolorem inventore sint debitis
              </p>
            </div>
          </div>
          <div className="lg:w-96 w-80">
            <img
              src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyJTIwd2FzaHxlbnwwfHwwfHw%3D&w=1000&q=80"
              className="h-72 w-full object-cover object-center rounded-t-md"
              alt="woman smiling"
            />
            <div className="bg-white shadow-md rounded-md py-4 text-center">
              <p className="text-2xl font-medium leading-6 text-gray-600">
                Washing
              </p>
              <p className="text-base leading-6 mt-2 text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                error sed, quibusdam eligendi eius magnam nemo labore facere
                vero
              </p>
            </div>
          </div>
        </div>
      </div>
      <Help />
      <Review />
      <Partner />
    </main>
  );
};
