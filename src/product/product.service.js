const testArrayProduct = [
    { id: 1, productname: 'computer', price: "200"},
    { id: 2, productname: 'notebook', price: "200"},
    { id: 3, productname: 'keyboard', price: "200"}
]

export default class ProductService{

    add(data){

        let{ id, productname, price } = data

        testArrayProduct.push({ id, productname, price})

        return testArrayProduct
    }

    getProduct(){

        return testArrayProduct
    }
    
}