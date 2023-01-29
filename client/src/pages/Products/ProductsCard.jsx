import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
export const ProductsCard = ({ props }) => {
  const imgStr = props.image.replaceAll("/", "[");
  return (
    <>
      <Link
        className="mx-2 w-72 lg:mb-0 mb-8 card shadow-md "
        to={`/products/${props._id}/${props.prod_name}/${props.prod_cat}/${props.price}/${imgStr}`}
      >
        <div>
          <img alt="product_image" src={props.image} className="w-full h-44" />
        </div>
        <div className="bg-white">
          <div className="flex items-center justify-between px-4 pt-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-bookmark"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
              </svg>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center">
              <h2 className="text-lg font-semibold">{props.prod_name}</h2>
              <p className="text-xs text-gray-600 pl-5">3 remaining</p>
            </div>
            <p className="text-xs text-gray-600 mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
              autem quaerat a voluptatibus? Maxime ullam ratione ad mollitia
            </p>
            <div className="flex mt-4">
              <div>
                <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                  {props.prod_cat}
                </p>
              </div>
              <div className="pl-2">
                <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                  Complete box
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between py-4">
              <h2 className="text-indigo-700 text-3xl font-semibold">
                {/* <BsCartPlus /> */}
              </h2>
              <h3 className="text-indigo-700 text-2xl font-semibold">
                ${props.price}
              </h3>
            </div>
          </div>
        </div>
      </Link>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div
            class="w-screen max-w-sm p-8 pt-4 ml-8"
            aria-modal="true"
            role="dialog"
            tabindex="-1"
          >
            <div class="mt-6 space-y-6">
              <ul class="space-y-4">
                <li class="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                    alt=""
                    class="object-cover w-16 h-16 rounded"
                  />

                  <div class="ml-4">
                    <h3 class="text-sm text-gray-900">Basic Tee 6-Pack</h3>

                    <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                      <div>
                        <dt class="inline">Size:</dt>
                        <dd class="inline">XXS</dd>
                      </div>
                      <div>
                        <dt class="inline">Color:</dt>
                        <dd class="inline">White</dd>
                      </div>
                    </dl>
                  </div>
                </li>

                <li class="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                    alt=""
                    class="object-cover w-16 h-16 rounded"
                  />

                  <div class="ml-4">
                    <h3 class="text-sm text-gray-900">Basic Tee 6-Pack</h3>

                    <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                      <div>
                        <dt class="inline">Size:</dt>
                        <dd class="inline">XXS</dd>
                      </div>

                      <div>
                        <dt class="inline">Color:</dt>
                        <dd class="inline">White</dd>
                      </div>
                    </dl>
                  </div>
                </li>

                <li class="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                    alt=""
                    class="object-cover w-16 h-16 rounded"
                  />

                  <div class="ml-4">
                    <h3 class="text-sm text-gray-900">Basic Tee 6-Pack</h3>

                    <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                      <div>
                        <dt class="inline">Size:</dt>
                        <dd class="inline">XXS</dd>
                      </div>

                      <div>
                        <dt class="inline">Color:</dt>
                        <dd class="inline">White</dd>
                      </div>
                    </dl>
                  </div>
                </li>
              </ul>

              <div class="space-y-4 text-center">
                <a
                  href="#"
                  class="block px-5 py-3 text-sm text-gray-600 transition border border-gray-600 rounded hover:ring-1 hover:ring-gray-400"
                >
                  View my cart (2)
                </a>

                <a
                  href="#"
                  class="block px-5 py-3 text-sm text-gray-100 transition bg-gray-700 rounded hover:bg-gray-600"
                >
                  Add to Cart
                </a>

                {/* <a
                  href="#"
                  class="inline-block text-sm text-gray-500 underline transition underline-offset-4 hover:text-gray-600"
                >
                  Continue shopping
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
