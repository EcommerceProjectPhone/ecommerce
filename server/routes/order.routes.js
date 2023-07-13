const express = require("express")
const router = express.Router()

const {getAllOrders,createOrder,updateOrder,deleteOrder} = require("../controllers/orderController")

router.get("/getAll",getAllOrders)
router.get("/getone/:usersId",getAllOrders)
router.post("/add/:userId",createOrder)
router.delete("/:id",deleteOrder)
router.put("/:id",updateOrder)




module.exports = router