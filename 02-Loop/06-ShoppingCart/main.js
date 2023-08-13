let product ={}

product.name = prompt(`name`)
product.quantity = prompt(`quantity`)
product.price = prompt(`price`)
product.discount = prompt(`discount`)

if(product.discount==0)  delete product.discount

let pay = (price,discount) => {
    if(discount==undefined) return price
    return price*(1-(discount/100))
}
console.log(product);
// console.log((pay(product.price,product.discount)));

let calcPrice = (productObj)=>{
    productObj.discount ? productObj.discount : 0
    return productObj.price*productObj.quantity*(1-(productObj.discount/100))
}
console.log(calcPrice(product));