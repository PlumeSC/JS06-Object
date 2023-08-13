let obj={xxx:123}
function isEmpty(obj){
    for(let key in obj) return `ไม่ว่าง`
    return `ว่าง`
}


console.log(isEmpty(obj));