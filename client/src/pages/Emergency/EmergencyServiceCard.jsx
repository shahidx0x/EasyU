export const EmergencyServiceCard = (props) => {
  const {tech_name, srv_area, cont_no, exp_area,image} = props.props;
  return (
    <div>
      <div className="w-full rounded-3xl">
        <div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <div className="w-1/3 bg-cover">
            <img src={image} alt="" />
          </div>

          <div className="w-2/3 p-4 md:p-4">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              {tech_name}
            </h1>

            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {srv_area}
            </p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Phone : {cont_no}
            </p>

            <div className="flex mt-2 item-center"></div>

            <div className="flex justify-between mt-3 item-center">
              <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
               {exp_area}
              </h1>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
