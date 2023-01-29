/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

export const Hero = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div>
      {/* <section>
        <div className="dark:bg-violet-400">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">
              Provident blanditiis cum exercitationem
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">
              Cupiditate minima voluptate temporibus quia? Architecto beatae
              esse ab amet vero eaque explicabo!
            </p>
            <div className="flex flex-wrap justify-center">
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50"
              >
                Get started
              </button>
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-900"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
        <img
          src="./d.svg"
          alt=""
          className="w-3/6 mx-auto mb-12 -mt-20 rounded-lg lg:-mt-40 dark:bg-gray-500"
        />
      </section> */}

      <div>
        <section>
          <div className="w-full relative pb-10 px-6 xl:px-0">
            <img
              className="absolute w-full inset-0 h-full object-cover object-center"
              src="https://cdn.tuk.dev/assets/templates/weCare/hero2-bg.png"
              alt="we care family"
            />
            <nav className="lg:hidden relative z-40">
              <div className="flex py-6 justify-between items-center px-4">
                <div>
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg3.svg"
                    alt="logo"
                  />
                </div>
                <div className="flex items-center">
                  <ul
                    id="list"
                    className={`${
                      menu ? "" : "hidden"
                    } p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-16 md:mt-16`}
                  >
                    <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                      <a href="javascript:void(0)">
                        <span className="ml-2 font-bold">Products</span>
                      </a>
                    </li>
                    <li
                      className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center"
                      onclick="dropdownHandler(this)"
                    >
                      <a href="javascript:void(0)">
                        <span className="ml-2 font-bold">Claims</span>
                      </a>
                    </li>
                    <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                      <a href="javascript:void(0)">
                        <span className="ml-2 font-bold">Renewals</span>
                      </a>
                    </li>
                    <li
                      className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center"
                      onclick="dropdownHandler(this)"
                    >
                      <a href="javascript:void(0)">
                        <span className="ml-2 font-bold">Reports</span>
                      </a>
                    </li>
                  </ul>
                  <div className="xl:hidden">
                    <img
                      id="open"
                      className={` ${menu ? "hidden" : ""} close-m-menu`}
                      onClick={() => setMenu(!menu)}
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg1.svg"
                      alt="menu"
                    />
                    <div
                      id="close"
                      className={` ${menu ? "" : "hidden"} close-m-menu`}
                      onClick={() => setMenu(!menu)}
                    >
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg2.svg"
                        alt="cross"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <nav
              role="navigation"
              aria-label="Main"
              tabIndex="0"
              className="hidden relative z-10 w-full lg:flex justify-between items-center p-20"
            >
              <div className="w-5/6">
                <div className="flex items-center justify-end"></div>
              </div>
            </nav>
            <div className="pt-32 lg:flex items-center relative z-10 container mx-auto">
              <div className="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0 mr-16">
                <img src="./d.svg" alt="" />
              </div>
              <div role="contentinfo" className="w-full lg:w-1/2 h-full">
                <p
                  tabIndex="0"
                  className="text-indigo-700 uppercase text-2xl mb-4"
                >
                  Qusique Tincidun sapien
                </p>
                <h1
                  tabIndex="0"
                  className="text-indigo-700 text-4xl lg:text-6xl font-black mb-8"
                >
                  All natural ingredients
                </h1>
                <p tabIndex="0" className="text-gray-800 font-regular mb-8">
                  COMBINING SCIENCE WITH BEAUTY. L'Oreal Paris offerincare
                  products is developed and rigorously tested with leading
                  scientists. Indulge yourself in a luxurious and sensorial
                  skincare experience. Cutting-edge innovations, proven by
                  Science.
                </p>
              </div>
            </div>
          </div>
        </section>

        <style>
          {`
            /* Top menu */
            .top-100 {
                animation: slideDown 0.5s ease-in-out;
            }
            @keyframes slideDown {
                0% {
                    top: -50%;
                }
                100% {
                    top: 0;
                }
            }
            * {
                outline: none !important;
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                -webkit-tap-highlight-color: transparent;
            }`}
        </style>
      </div>
    </div>
  );
};
