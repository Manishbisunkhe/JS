const accountId = 144553
let accountEmail = "manish1@gmail.com"
var accountPassword = "123"
accountCity = "Kathmandu"
// accountId = 2    comment key ctrl+/
let accountState;
console.log(accountId);         
// var =>function-scoped
// let,const=> block-scoped`
accountEmail="shekhar0@gmail.com"
accountPassword = "321"
accountCity = "lalitpur"

/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountPassword, accountCity, accountEmail, accountState])
