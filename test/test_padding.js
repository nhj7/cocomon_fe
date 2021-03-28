function pad(value) {
    if (value.length == 2) {
        return value + ".00";
    }
    if (value.indexOf(".") > -1) {
        return value.padEnd(5, '0');
    } else if( value.length < 4 ){
        return (value+".").padEnd(5, '0');
    }
    return value;
}

console.log(pad("","+1.1"))


