import ProductService from "./product.service.js"

export const add = (req, res) => {

    try{

    const product = new ProductService().add(req.body)

        return res.status(200).send({
            status: "success",
            code: 1,
            cause: "",
            message: "",
            result: product
        })    
         
    } catch (error){
        console.log(error);
        return res.status(500).send({
            status: "fail",
            code: 0,
            cause: "",
            message: "error.message",
            result: ""
        })

    }
}

export const read = (req, res) => {

    try{

    const product = new ProductService().getProduct(req.body)

        return res.status(200).send({
            status: "success",
            code: 1,
            cause: "",
            message: "",
            result: product
        })    
         
    } catch (error){
        console.log(error);
        return res.status(500).send({
            status: "fail",
            code: 0,
            cause: "",
            message: "error.message",
            result: ""
        })

    }
}