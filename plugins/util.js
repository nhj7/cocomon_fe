export default ( context, inject ) => {
    inject('p_comma', (value, isFixed ) => {
        if(!value) return "";
        if( isFixed && value.toString().indexOf(".") > -1){
            value = parseFloat(value).toFixed(2);
        }
        value = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        
        return value;
    } );
    inject('p_toTickerRate', value => {
        if(!value) return "";
        return (value * 10000 / 100).toFixed(2);
    } );
    inject('p_usd', value => {
        if(!value) return "";
        let arrVal = value.split(".")
        return arrVal[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ( arrVal.length > 1 ? '.' + arrVal[1].substring(0, 4 - arrVal[0].length) : "" );
        
    } );

    
}