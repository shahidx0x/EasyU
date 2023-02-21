import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import Map, { GeolocateControl, NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
const MAPBOX_TOKEN =
  "pk.eyJ1Ijoic2hhaGlkeGIiLCJhIjoiY2xkanNjY3R2MTJmNjN2bDF6a2ZjdnN3YiJ9.vLjadmSVSd7cBNKY1nKCGQ";
const EmergencyServiceMap = () => {
  const { user } = useAuth();
  const [show, setShow] = React.useState(false);
  const [viewport, setViewport] = React.useState({
    latitude: 23.7866013,
    longitude: 90.3817978,
    zoom: 12,
  });
  const sendLocation = async (lat, lng) => {
    try {
      await axios.post("http://localhost:5000/api-v1/add/location", {
        usr: user.email,
        lat,
        lng,
      });
    } catch (err) {
      console.error(err);
    }
  };
  const [location, setLocation] = useState({ lat: null, lng: null });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.error(error);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      sendLocation(location.lat, location.lng);
    }, 10000);
    return () => clearInterval(intervalId);
  }, [location]);

  return (
    <div className="flex">
      <div className="flex flex-col h-full p-3 w-80 dark:bg-gray-900 dark:text-gray-100">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="font-bold">Find Nearby Technician / Services</h2>
          </div>
          {/* <div className="w-72 border border-3"></div> */}
          <div className="bg-gray-50">
            <div className="bg-white xl:hidden flex text-gray-800  hover:text-black focus:outline-none focus:text-black justify-between w-full p-6 items-center ">
              <div
                aria-label="toggler"
                className="flex justify-center items-center"
              >
                <button
                  id="open"
                  onClick={() => setShow(!show)}
                  aria-label="open"
                  className={`${
                    show ? "" : "hidden"
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800`}
                >
                  <svg
                    className="text-gray-800"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6H20"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 12H20"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 18H20"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  id="close"
                  onClick={() => setShow(!show)}
                  aria-label="close"
                  className={`${
                    show ? "hidden" : ""
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800`}
                >
                  <svg
                    className="text-gray-800"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6L6 18"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 6L18 18"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div
              id="Main"
              className={`${
                show ? "-translate-x-full" : "translate-x-0"
              } bg-white transform  xl:translate-x-0 ease-in-out transition duration-500 flex justify-start items-start w-full sm:w-72   flex-col h-full`}
            >
              <button className="hidden xl:flex text-gray-800 hover:text-black focus:outline-none focus:text-black justify-start px-6 pt-6 items-center space-x-3 w-full"></button>
              <div className="xl:mt-6 flex flex-col justify-start items-start  px-4 w-full space-y-3 pb-5 ">
                <button
                  onClick={() => {
                    setViewport({
                      latitude: 22.7042383,
                      longitude: 90.3260904,
                      zoom: 12,
                      transitionDuration: 1000,
                    });
                  }}
                  className="focus:outline-none flex jusitfy-start hover:text-white focus:bg-indigo-700 focus:text-white hover:bg-indigo-700 text-gray-600 rounded py-3 pl-4 items-center space-x-6 w-full "
                >
                  <svg
                    className="fill-stroke "
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 4H5C4.44772 4 4 4.44772 4 5V9C4 9.55228 4.44772 10 5 10H9C9.55228 10 10 9.55228 10 9V5C10 4.44772 9.55228 4 9 4Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19 4H15C14.4477 4 14 4.44772 14 5V9C14 9.55228 14.4477 10 15 10H19C19.5523 10 20 9.55228 20 9V5C20 4.44772 19.5523 4 19 4Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 14H5C4.44772 14 4 14.4477 4 15V19C4 19.5523 4.44772 20 5 20H9C9.55228 20 10 19.5523 10 19V15C10 14.4477 9.55228 14 9 14Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19 14H15C14.4477 14 14 14.4477 14 15V19C14 19.5523 14.4477 20 15 20H19C19.5523 20 20 19.5523 20 19V15C20 14.4477 19.5523 14 19 14Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-base leading-4 ">Technician</p>
                </button>
                <button
                  onClick={() =>
                    setViewport({
                      latitude: 23.7866013,
                      longitude: 90.3817978,
                      zoom: 12,
                    })
                  }
                  className="focus:outline-none flex jusitfy-start hover:text-white focus:bg-indigo-700 focus:text-white hover:bg-indigo-700 text-gray-600 rounded py-3 pl-4 items-center space-x-6 w-full "
                >
                  <svg
                    className="fill-stroke "
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 4H5C4.44772 4 4 4.44772 4 5V9C4 9.55228 4.44772 10 5 10H9C9.55228 10 10 9.55228 10 9V5C10 4.44772 9.55228 4 9 4Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19 4H15C14.4477 4 14 4.44772 14 5V9C14 9.55228 14.4477 10 15 10H19C19.5523 10 20 9.55228 20 9V5C20 4.44772 19.5523 4 19 4Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 14H5C4.44772 14 4 14.4477 4 15V19C4 19.5523 4.44772 20 5 20H9C9.55228 20 10 19.5523 10 19V15C10 14.4477 9.55228 14 9 14Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19 14H15C14.4477 14 14 14.4477 14 15V19C14 19.5523 14.4477 20 15 20H19C19.5523 20 20 19.5523 20 19V15C20 14.4477 19.5523 14 19 14Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-base leading-4 ">Ambulance</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <Map
          {...viewport}
          onMove={(evt) => setViewport(evt.viewport)}
          style={{ width: 1000, height: 600 }}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxAccessToken={MAPBOX_TOKEN}
        >
          <GeolocateControl
            onGeolocate={(e) => console.log(e.coords.longitude)}
          />
          <NavigationControl />
        </Map>
      </div>
    </div>
  );
};

export default EmergencyServiceMap;
