// obj clone
// ##############################################
let todo={
    task :`DO HW`,
    complete : false
}
// clone
// 1. loop แล้ว assign ทีละkey ให้value ใหม่
let newTodo = {}

for(let key in todo){
    newTodo[key]= todo[key]
}
newTodo.complete = true
// console.log(todo,newTodo);

// 2. built-in fn เรียกว่า Object.assign() (destination,[src1,src2,...])
// Eval Direction : right ==> left 
// merge/override right ==> left 
let doto = {aaa:`bbb`}

// 2A
Object.assign(doto,todo)           // Oตัวใหญ่ constructor 
// console.log(doto);

// 2B
let newDoto =Object.assign({},todo)