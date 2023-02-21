const express = require("express");
const app = express();
require("dotenv").config({ path: require("find-config")(".env") });
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const SSLCommerzPayment = require("sslcommerz-lts");
const store_id = "shahi63e5ab1ce27e1";
const store_passwd = "shahi63e5ab1ce27e1@ssl";
//Router Path

const product_router = require("./routes/ProductServiceRoute");
const fwp_router = require("./routes/FindWpServiceRoute");
const emrs_router = require("./routes/EmrServiceRoute");
const users_router = require("./routes/UsersRoute");
const cusinfo_router = require("./routes/CusInfoRoute");
const techinfo_router = require("./routes/TechInfoRoute");
const wpinfo_router = require("./routes/WpInfoRoute");
const location_router = require("./routes/LiveLocationRoute");
const fsm_router = require("./routes/FSMRoute");
const carts_router = require("./routes/CartsRoute");
const booking_router = require("./routes/BookingRoute");

//middleware

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes

app.use("/api-v1", fwp_router);
app.use("/api-v1", emrs_router);
app.use("/api-v1", product_router);
app.use("/api-v1", users_router);
app.use("/api-v1", cusinfo_router);
app.use("/api-v1", techinfo_router);
app.use("/api-v1", wpinfo_router);
app.use("/api-v1", product_router);
app.use("/api-v1", location_router);
app.use("/api-v1", fsm_router);
app.use("/api-v1", carts_router);
app.use("/api-v1", booking_router);

//view

app.get("/s", (req, res) => {
  res.sendFile(path.join(__dirname + "/view/index.html"));
});

//SSL-PAYMENT
app.get("/payment/:am/:cus/:mail", async (req, res) => {
  /**
   * Create ssl session request
   */

  const data = {
    total_amount: req.params.am || "200",
    currency: "BDT",
    tran_id: "REF123",
    success_url: `http://localhost:5000/ssl-payment-success`,
    fail_url: `http://localhost:5000/ssl-payment-fail`,
    cancel_url: `http://localhost:5000/ssl-payment-cancel`,
    shipping_method: "No",
    product_name: "Computer.",
    product_category: "Electronic",
    product_profile: "general",
    cus_name: req.params.cus || "rsile",
    cus_email: req.params.mail || "r@g.com",
    cus_add1: "Dhaka",
    cus_add2: "Dhaka",
    cus_city: "Dhaka",
    cus_state: "Dhaka",
    cus_postcode: "1000",
    cus_country: "Bangladesh",
    cus_phone: "01711111111",
    cus_fax: "01711111111",
    multi_card_name: "mastercard",
    value_a: "ref001_A",
    value_b: "ref002_B",
    value_c: "ref003_C",
    value_d: "ref004_D",
    ipn_url: `http://localhost:5000/ssl-payment-notification`,
  };

  const sslcommerz = new SSLCommerzPayment(store_id, store_passwd, false);
  sslcommerz.init(data).then((data) => {
    if (data?.GatewayPageURL) {
      return res.status(200).redirect(data?.GatewayPageURL);
    } else {
      return res.status(400).json({
        message: "Session was not successful",
      });
    }
  });
});

app.post("/ssl-payment-notification", async (req, res) => {
  /**
   * If payment notification
   */

  return res.status(200).json({
    data: req.body,
    message: "Payment notification",
  });
});

app.post("/ssl-payment-success", async (req, res) => {
  /**
   * If payment successful
   */

  // return res.status(200).json({
  //   data: req.body,
  //   message: "Payment success",
  // });
  return res.status(200).redirect("http://localhost:3000/payment-success");
});

app.post("/ssl-payment-fail", async (req, res) => {
  /**
   * If payment failed
   */

  return res.status(200).json({
    data: req.body,
    message: "Payment failed",
  });
});

app.post("/ssl-payment-cancel", async (req, res) => {
  /**
   * If payment cancelled
   */
  return res.status(200).json({
    data: req.body,
    message: "Payment cancelled",
  });
});

//Database Connection
mongoose
  .connect(
    `mongodb+srv://${process.env.EXP_MDB_USER}:${process.env.EXP_MDB_PASS}@cluster0.udqkyom.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() =>
    app.listen(PORT, () => {
      console.log("[*] DB Connected => Server Running on Port : ", PORT);
    })
  )
  .catch((error) => {
    console.log("[*] DB Connection Error \n\n", error);
  });
