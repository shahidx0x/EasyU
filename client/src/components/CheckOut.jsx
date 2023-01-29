import React, { useState } from "react";

function CheckOut() {
  const [show, setShow] = useState(true);
  return (
    <>
      <div className="flex w-full">
        <div className="w-7/12">
          <h2>here will be cart</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In commodi
            aliquid veniam? Nisi placeat nobis cumque ab, adipisci veritatis id
            dolore nam minima omnis ut voluptas quae aperiam sit iusto?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            deserunt explicabo, possimus nulla porro fuga sequi beatae libero
            cupiditate molestiae esse, nesciunt deleniti facilis excepturi!
            Deleniti nulla voluptates dignissimos eveniet.
          </p>
        </div>
        <div className="w-4/12">Here will be checkout</div>
      </div>
    </>
  );
}

export default CheckOut;
