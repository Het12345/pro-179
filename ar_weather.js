let cordinates{
    
}
$(document ).ready(function (){
    get_cordinates();

})

function get_cordinates() {
let serachpanles =new URLSearchParams(window.locations.search)
if (serachParams.has('source')serachParams&serachParams.has)
{
    let source = serachParams.get('source')
    let destination = searchParams.get('source')
    cordinates.source_lat = source.split(",")[0]
    cordinates.source_lon = source.split(",")[1]
    cordinates.destination_lat = destination.split(",")[0]
    cordinates.destination_lon = destination.split(",")[1]
}
else {
    window.history.back();
}
}