const accountId = 12345
let accountEmail = 'yufi@gmail.com'
var accountPassword = '54321'
accountCity = 'jaipur'
let accountState = "Rajasthan"
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
//accountId = 2 this is not allowed
accountEmail = "yusuf.com"
accountPassword = "6789"
accountCity = 'Indore'
console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

