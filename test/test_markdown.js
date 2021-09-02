const marked = require("marked");

const markdownString = ` ![ㅋㅋㅋㅋ](https://www.google.co.kr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png) ` + `\n ### [바이낸스 CEO “코인베이스 따라 바이낸스US 3년 내 상장”](https://www.google.co.kr) `;

//const markdownString = `
//### [ㅋㅋㅋㅋ](https://www.google.co.kr)  `;

console.log(marked(markdownString));
