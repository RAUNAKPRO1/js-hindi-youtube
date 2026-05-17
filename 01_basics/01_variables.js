const accountID = 11
let accountEmail = "raunak@google.com"
var accountPassword = "12345"
accountCity = "patna"
let accountState;

// accountID = 2 // not allowed

accountEmail = "rs@rs.com"
accountPassword = "2112112"
accountCity = "ara"

console.log(accountID);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([
    accountID,
    accountEmail,
    accountPassword,
    accountState,
    accountCity
])