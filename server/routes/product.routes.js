const express = require("express")
const router = express.Router()

const {getAllProducts,createProduct,updateProduct,deleteProduct} = require("../controllers/productController")


router.get("/getAll",getAllProducts)
router.post("/add",createProduct)
router.delete("/:idusers",deleteProduct)
router.put("/:idusers",updateProduct)


module.exports = router