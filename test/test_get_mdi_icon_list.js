
// https://api.upbit.com/v1/market/all

const axios = require("axios");


(async () => {
    console.log("async start");
    const result = await axios.get("https://materialdesignicons.com/api/package/38EF63D0-4744-11E4-B3CF-842B2B6CFE1B");
    console.log(result);
    const iconList = [];
    const icons = result.data.icons;
    for(let i = 0; i < icons.length;i++){
        iconList.push({
            name : icons[i].name
            , aliases : icons[i].aliases ? icons[i].aliases.join(",") : ''
        });
    }

    const iconGroup = {};
    iconList.map( (icon) => { 
        const groupName = icon.name.split("-")[0];
        //console.log(groupName, iconGroup[groupName]); 
        iconGroup[groupName] = iconGroup[groupName]==undefined ? 0 : iconGroup[groupName] + 1;
    });

    //const emoticonList = iconList.filter( (icon) => icon.name.indexOf("emoticon") > -1 );


    const iconGridList = [];
    let iconGrid = [];
    for(let i = 0; i < iconList.length;i++){
        if( i % 7 == 0 && iconGrid.length > 0 ){
            iconGridList.push(iconGrid);
            iconGrid = [];
        }
        iconGrid.push(iconList[i]);
    }
    if( iconGrid.length > 0  ){
        iconGridList.push(iconGrid);
        iconGrid = [];
    }
    console.log(iconGridList);
    debugger;

    return;
    const iconJSON = JSON.stringify(iconList);
    console.log(iconJSON);

    var fs = require('fs');
    fs.writeFile('mdi-icon.json', iconJSON, 'utf8', function(error){ console.log('write end') });


    //console.log(JSON.stringify(iconList));

    debugger;

})();

