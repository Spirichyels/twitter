// const os = require("os");
// const { date, printMessage } = require("./greeting");

// const userName = os.userInfo().homedir;

// console.log(`Дата запроса: ${date}`);
// printMessage(userName);

// const User = require("./user.js");
// const eugene = new User("Eugene", 22);
// eugene.print();
// eugene.sayHi();
//////////////////////////
// const greeting1 = require("./greeting");
// console.log(`Hello ${greeting1.name}`);

// const greeting2 = require("./greeting");
// greeting2.name = "bob";

// console.log(`Hello ${greeting1.name}`);
// console.log(`Hello ${greeting2.name}`);
/////////////////////////////////////////////
const messages = require("./messages");

messages.getMorningMessage();
messages.getEveningMessage();
