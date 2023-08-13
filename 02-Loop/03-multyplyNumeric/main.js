let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
};

let multiplyNumeric = (obj,num) =>{
    for(let key in obj) if(!isNaN(obj[key])) obj[key] *= num
}

multiplyNumeric(menu,3)
console.log(menu);