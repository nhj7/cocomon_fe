const newsReader = require("./newsReader")

console.log(111);
(async() => {
    console.log(222);
    const result = await newsReader();
    console.log(result);
})();