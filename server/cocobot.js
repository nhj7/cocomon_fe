const axios = require("axios");


const main = async () => {

    try {
        const result = await axios.get("https://www.blockmedia.co.kr/feed1");
        console.log(result);
    } catch (error) {
        console.error("",error);
    }
    

    debugger;
}

main();