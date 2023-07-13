const express = require("express")
const router = express.Router()

const {getAllProducts,createProduct,updateProduct,deleteProduct} = require("../controllers/productController")


router.get("/getAll",getAllProducts)
router.get("/getAll/userId",getAllProducts)

router.post("/add",createProduct)
router.delete("/:id",deleteProduct)
router.put("/:id",updateProduct)


module.exports = router