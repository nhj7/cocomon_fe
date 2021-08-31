const newsReader = require("./newsReader")
(async() => {
    const result = await newsReader();
    console.log(result);
})();