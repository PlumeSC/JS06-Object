// copy by value
// copy by reference


// primative variable   ****assign value****
let message = `hello`
let world = message     // copy by value
// จะเกบvalue

// console.log(world);
// log(world)


// non-primative variable   ****assign address****
// user เกบ address ของ literal Obj
let user = {
    namr : `john`
}

// assign address ของ user ให้กับ employee
let employee = user     // copy by reference
// จะเกบaddress memory
// employee.name=`kkkkk`
user.name = `kkkkk`
// console.log(user,employee);