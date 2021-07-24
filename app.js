var Accounts;
(function (Accounts) {
    Accounts.sub_one = "ReactJS";
    Accounts.sub_two = "NodeJS";
    Accounts.sub_three = "mongoDB";
})(Accounts || (Accounts = {}));
/// <reference path="accounts.ts" />
console.log(Accounts.sub_one, Accounts.sub_two, Accounts.sub_three);
