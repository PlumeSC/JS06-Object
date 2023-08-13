// let obj={}

// let key = prompt(`fruit`)
// let value = prompt(`number`)

// while(key!=`stop` && value!=`stop`){
//     obj[key]=value
//     key = prompt(`fruit`)
//     if(key==`stop`) break
//     value = prompt(`number`)
// }
// for(let key in obj){
//     if(obj[key]>=2){
//         obj[`${key}s`]= obj[key]
//         delete obj[key]
//     }
// }
// console.log(obj);


let obj={}

while(true){
    let key = prompt(`Enter key`)
    if(key===`stop`) break
    let value = prompt(`Enter value`)
    if(value===`stop`) break

    if(value >=2 ) obj[`${key}s`] = value
    else obj[key] = value 
}

console.log(obj);