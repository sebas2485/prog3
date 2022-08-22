const controller = require("../controller/logic/product.controller")

exports.ProductRoute = (app) => {
app.get("/productget", (req, res, next) => {
    controller.getAll(req, res, next)  
}),

app.post("/productpost", (req, res, next) => {
    controller.createProduct(req, res, next)  
}),

app.put("/product", (req, res, next) => {
    controller.updateProduct(req, res, next)  
}),

app.delete("/product", (req, res, next) => {
    controller.deleteProduct(req, res, next)  
})

}