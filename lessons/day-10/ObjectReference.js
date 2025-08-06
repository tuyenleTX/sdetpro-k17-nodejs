let teo = {
    name: "Teo",
    age: 18,
    //nested object 
    bankAccounts: {
        checking: {
            accountNumber: '123456789'
        },
        saving: {
            accountNumber: '987654321'
        }
    }
}


/*let tun = teo;
tun.bankAccounts.checking.accountNumber = '1234567891'
tun.bankAccounts.checking.accountNumber = '9876543211'
tun.name = 'Tun';
tun.age = 17;*/

//to not changing value: if not having nested object - use SHALLOW copy using spread syntax
let tun = { ...teo }
tun.name = "Tun";
//tun.bankAccounts.checking.accountNumber = '9876543211'//if nested object, then teo bank account will be overriden

//Shallow copy - handel nested objects - This way will help to not override nested objects
let ti = JSON.parse(JSON.stringify(teo));
ti.name = "Ti";
ti.bankAccounts.checking.accountNumber = '9876543211'


console.log(teo);
console.log(tun);
console.log(ti);
