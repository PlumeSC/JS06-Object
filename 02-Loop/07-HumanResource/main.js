const employees = {
    john: { salary: 1000, address: { district: 'Ratchathewi', province: 'Bangkok' } },
    peter: { salary: 1500, address: { district: 'Pathumwan', province: 'Bangkok' } },
    mike: { salary: 800, address: { district: 'Pakkret', province: 'Nonthaburi' } },
    sarah: { salary: 2200, address: { district: 'Sriraja', province: 'Chonburi' } }
};

let name = prompt(`Name`)


let checkName = (name)=>{
    for(let key in employees){
        if(name==key){
            return (`Name: ${key}, salary: ${employees[key].salary}, address: ${employees[key].address.district}, ${employees[key].address.province}`);
        }else{
            return `not found`;
        }
    }
}

console.log(checkName(name));