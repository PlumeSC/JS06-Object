let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = (obj)=>{
    let total = 0
    for(let key in obj) total += obj[key]
    if(total== 0) return `Object ว่าง`
    return total
}

console.log(sum(salaries));