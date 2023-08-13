/*
######### data type
- primative         : Boolean, Number
- non primative     : Obj, 
*/


function add(){
    //function scope
    if(true){
        //local scope
    }
}


// ###############################################
// Object Declaration
// ###############################################
// {}   stand for object/scope   หมายถึงสิิ่งที่อยู่เปนเซตเดียวกันสิ่งที่อยู่เปนกลุ่มก้อนเดียวกัน
/*
    each record => key : value
    key : datatype string
    value : any datatype
    record === property  == key-value pair
*/


let user = {
    'firstname':`Plume`,
    lastname:`C`,
    true:false,
    'ok ok':`ok`,       
    // key : value }=> Property , record
}
console.log(user);



// ###############################################
// ACCESS เข้าถึง, MODIFY แก้ไข, DELETE ลบ
// ###############################################

/*
    Every action need key
    Dot Notation obj.key
    ถ้าไม่มี record => return undefined
    ข้อจำกัด เข้าถึง key ที่มีspacebar ไม่ได้
*/ 
console.log(user.firstname);    //Access


// Update Modify
// obj.key = newValue           
user.firstname = `Supawit`      
console.log(user.firstname);    


// Add
// obj.newKey = newValue
user.address = `bkk`
console.log(user.address);

// Delete
// delete obj.key
delete user.address
console.log(user.address);

// ###############################################
// Nested Object
// ###############################################


let employee ={
    name : `John Doe`,
    salary : 10000,
    address : {
        district : `Phaya Thai`,
        province : `BKK`,
        country : `Thailand`
    },
    
}

console.log(employee.address.country);


// provent crash
// dot ใช้กับobj เท่านั้น
// console.log(employee.add.district);        
// error เพราะมันหาadd ไม่เจอ เอาundefinde มาdot
console.log(employee.add?.district);    //undefined 
// ? optional จะเชคว่าตัวข้างหน้าdot ต่อได้ไหมถ้าdot ต่อได้ มันจะdotต่อ
// <undefined>.<key>    พัง
// <undefined>?.<key>   แก้



// เชคว่ามี key หรือไม่????????????????????????

// 1 In Operator
// key_string in obj
// output === true , false
let product = {
    id:227,
    name : `Iphone`,
    price : 50000,
    // discount: 0.05,  
    'is mobile': true 
}

console.log(`discount` in product);

// 2 method hasOwnProperty
// obj.hasOwnProperty('key')
console.log(product.hasOwnProperty(`name`));



// ###############################################
// Bracket Notation
// ###############################################
// ข้อดีของ bracket notation สามารถเข้าถึง key ที่มี spacebar ได้
console.log(product.name);
console.log(product['name']);
console.log(product['is mobile']);