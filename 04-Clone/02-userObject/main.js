const state1 = { username: 'john', point: 100, loading: true };



let b = Object.assign({},state1,{success: true,loading:false})
console.log(b);