let obj = {}
do{
    let key = prompt(`Enter key`)
    if(key==`stop`) break
    let value = prompt(`Enter value`)
    if(value==`stop`) break
    obj[key] = value
}while(true)

console.log(obj);



// let obj = {}
// let key
// let value
// do{
//     key = prompt(`Enter key`)
//     value = prompt(`Enter value`)
//     obj[key] = value
// }while(key!==`stop`&&value!==`stop`)

// console.log(obj);