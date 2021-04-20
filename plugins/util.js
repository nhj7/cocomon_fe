export default ( context, inject ) => {
    inject('comma', value => {
        if(!value) return "";
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } );
    inject('toTickerRate', value => {
        if(!value) return "";
        return (value * 10000 / 100).toFixed(2);
    } );
}