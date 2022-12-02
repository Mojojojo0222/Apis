const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// const userRoute = require("./routes/user");
// const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const bodyParser = require("body-parser");
const  db  = require("./models/Product");
// const cartRoute = require("./routes/cart");
// const orderRoute = require("./routes/order");
// const stripeRoute = require("./routes/stripe");
// const cors = require("cors");

//dotenv.config();

mongoose
  .connect('mongodb://127.0.0.1/myapp')
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });
app.get("/",function(req,res){
    db.find(function(err,products){

    
    res.send(products);
})
})
// app.use(cors());
// db.find(function(err,products){
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(products);
//     }
// })
app.use(express.json());
// app.use("/api/auth", authRoute);
// app.use("/api/users", userRoute);
 app.use("/api/products", productRoute);
// app.use("/api/carts", cartRoute);
// app.use("/api/orders", orderRoute);
// app.use("/api/checkout", stripeRoute);

app.listen( 5000, () => {
  console.log("Backend server is running!");
});
