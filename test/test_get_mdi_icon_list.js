
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

    const emoticonList = iconList.filter( (icon) => icon.name.indexOf("emoticon") > -1 );

    console.log(JSON.stringify(emoticonList));
    //console.log(JSON.stringify(iconList));

    

    const emoticonList2 = [{"name":"emoticon","aliases":"smiley,face,emoji"},{"name":"emoticon-angry","aliases":"smiley-angry,face-angry,emoji-angry"},{"name":"emoticon-angry-outline","aliases":"smiley-angry-outline,face-angry-outline,emoji-angry-outline"},{"name":"emoticon-confused","aliases":"face-confused,emoji-confused"},{"name":"emoticon-confused-outline","aliases":"face-confused-outline,emoji-confused-outline"},{"name":"emoticon-cool","aliases":"smiley-cool,face-cool,face-sunglasses,emoji-cool"},{"name":"emoticon-cool-outline","aliases":"smiley-cool-outline,face-cool-outline,face-sunglasses-outline,emoji-cool-outline"},{"name":"emoticon-cry","aliases":"smiley-cry,face-cry,emoji-cry"},{"name":"emoticon-cry-outline","aliases":"smiley-cry-outline,face-cry-outline,emoji-cry-outline"},{"name":"emoticon-dead","aliases":"smiley-dead,face-dead,emoji-dead"},{"name":"emoticon-dead-outline","aliases":"smiley-dead-outline,face-dead-outline,emoji-dead-outline"},{"name":"emoticon-devil","aliases":"smiley-devil,face-devil,emoji-devil"},{"name":"emoticon-devil-outline","aliases":"smiley-devil-outline,face-devil-outline,emoji-devil-outline"},{"name":"emoticon-excited","aliases":"smiley-excited,face-excited,emoji-excited"},{"name":"emoticon-excited-outline","aliases":"smiley-excited-outline,face-excited-outline,emoji-excited-outline"},{"name":"emoticon-frown","aliases":"face-frown,emoji-frown"},{"name":"emoticon-frown-outline","aliases":"face-frown-outline,emoji-frown-outline"},{"name":"emoticon-happy","aliases":"smiley-happy,face-happy,emoji-happy"},{"name":"emoticon-happy-outline","aliases":"smiley-happy-outline,face-happy-outline,emoji-happy-outline"},{"name":"emoticon-kiss","aliases":"smiley-kiss,face-kiss,emoji-kiss"},{"name":"emoticon-kiss-outline","aliases":"smiley-kiss-outline,face-kiss-outline,emoji-kiss-outline"},{"name":"emoticon-lol","aliases":"face-lol,emoji-lol"},{"name":"emoticon-lol-outline","aliases":"face-lol-outline,emoji-lol-outline"},{"name":"emoticon-neutral","aliases":"smiley-neutral,face-neutral,emoji-neutral"},{"name":"emoticon-neutral-outline","aliases":"smiley-neutral-outline,face-neutral-outline,emoji-neutral-outline"},{"name":"emoticon-outline","aliases":"insert-emoticon,mood,sentiment-very-satisfied,tag-faces,smiley-outline,face-outline,emoji-outline"},{"name":"emoticon-poop","aliases":"smiley-poop,face-poop,emoji-poop"},{"name":"emoticon-poop-outline","aliases":"face-poop-outline,emoji-poop-outline"},{"name":"emoticon-sad","aliases":"smiley-sad,face-sad,emoji-sad"},{"name":"emoticon-sad-outline","aliases":"smiley-sad-outline,face-sad-outline,emoji-sad-outline"},{"name":"emoticon-sick","aliases":"face-sick,fever,emoji-sick"},{"name":"emoticon-sick-outline","aliases":"face-sick-outline,fever-outline,emoji-sick-outline"},{"name":"emoticon-tongue","aliases":"smiley-tongue,face-tongue,emoji-tongue"},{"name":"emoticon-tongue-outline","aliases":"smiley-tongue-outline,face-tongue-outline,emoji-tongue-outline"},{"name":"emoticon-wink","aliases":"smiley-wink,face-wink,emoji-wink"},{"name":"emoticon-wink-outline","aliases":"smiley-wink-outline,face-wink-outline,emoji-wink-outline"}];

    console.log(emoticonList2);

    debugger;

})();

