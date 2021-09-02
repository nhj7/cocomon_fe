const marked = require("marked");

const markdownString = ` ![ㅋㅋㅋㅋ](https://www.google.co.kr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png)
### abcd `;

//const markdownString = `### [ㅋㅋㅋㅋ](https://www.google.co.kr)  `;

console.log(marked(markdownString));
