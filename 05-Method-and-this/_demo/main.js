// Method and this
// ********************************
let log =  console.log


// ********************************
// 1. Intro Method
// ********************************

// Object == 
// some record ==> key : fn
// called method == ความสามารถของ obj

function devFront(){
    log(`working`)
}
let programmer = {
    name : `pppp`,          // property
    age : 5,                // property
    dev : devFront,         // method      
    meet : (a)=>{           //// Alternative Syntax
        log(`${a}`)
    }
}

// log(programmer.age)
// programmer.dev()              
// programmer.meet(`kkkkk`)


// ********************************
// 2. Alternative Syntax
// ********************************

let programmer2 = {
    dev: function(){        // Alternative Syntax
        log(`iiiii`)
    },
    meet:()=>log(`meeting`),
    sleep(){log(`sleepeing`)}   // shorthand
}

// programmer2.meet()
// programmer2.sleep()

// ********************************
// 3. OOP
// ********************************
// EX
let car ={
    brand :`Tesla`,
    model:`X`,
    drive:()=> log(`Driving`),
    'auto pilot': ()=>log(`self driving`),
}

// car.drive()
// car['auto pilot']()


// ********************************
// 4. This keyword
// ********************************

// Js keyword : if ,else, for ,while,do,switch,this
// this ==> obj ของตัวมันเอง
// this ช่วยให้สามารถเข้าถึงตัวมันเองได้
// this object before the dot
let user = {
    name : `CC`,
    age : 12,
    sayHi: function(){
        log(`Hello ${this.name}`)
    },
    sayHo:()=> log(`Helloo ${this.name}`),
}

// user.sayHi()
user.name = `software park`
// user.sayHi()
// user.sayHo()

// this ถูก solve ตอนcalled method
// caller.method
// this หมายถึง caller
function dev(){
    console.log(`this feature developed by ${this.name}`);
}
let programmer3 = {
    name :`jim`,
    develop : dev
}
let programmer4 = {
    name : `jane`,
    develop :dev
}

programmer3.develop()
programmer4.develop()


// ********************************
// 5. Execution Context == Caller
// ********************************

// Global(Browser) : window Object

let names = `ddd`
function xxx(){
    log(this.names)
}

xxx()
console.log(window);




// arrow ไม่มีความสามารถ(ในการscope this ของตนเอง) context 
// loose context ==> chain to window