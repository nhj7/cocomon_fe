export default ( context, inject ) => {
    inject('comma', value => {
        if(!value) return "";
        if( value.toString().indexOf(".") > -1){
            value = parseFloat(value).toFixed(2);
        }
        value = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        
        return value;
    } );
    inject('toTickerRate', value => {
        if(!value) return "";
        return (value * 10000 / 100).toFixed(2);
    } );
}