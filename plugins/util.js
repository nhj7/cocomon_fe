export default ( context, inject ) => {
    inject('comma', value => {
        if(!value) return "";
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } )
}