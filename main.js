// markers array
var arrayMarker;
// map
var map;

let contents = [
    {header:"Juan's Accident", speed:79, date:'10/31/18', title: 'Accident'},
    {header:"Mario's Accident", speed:88, date:'05/27/17', title: 'Accident'},
    {header:"Robert's Accident", speed:93, date:'02/18/18', title: 'Accident'}
];

function init(){
    // array marker
    arrayMarker = [
        {
            coords:{lat:32.460935,lng:-116.875984},
            content: '<h2>Aurrera Store</h2>',
            title: 'DGNR'
        },
        {
            coords:{lat:32.462419,lng:-116.873088},
            content: '<h2>Michoacana Store</h2>',
            title: 'DGNR'
        },
        {
            coords:{lat:32.463071,lng:-116.875576},
            content: '<h2>COBACH El Florido</h2>',
            title: 'DGNR'
        },
        {
            coords:{lat:32.460826,lng:-116.880681},
            content: '<h2>Swap Meet La Joya</h2>',
            title: 'DGNR'
        }
    ];

    var u = {header:"Ana's Accident", speed:59, date:'04/11/16', title: 'Accident'};
    
    contents.push(u);

    // change contents
    for(var i = 0; i< arrayMarker.length; i++){
        var x = contents[i];
        // add marker
        arrayMarker[i].content = setContent(x);
        arrayMarker[i].title = x.title;
    }
}

function setContent(data){
    // create content with HTML code, adding variable data
    var content = "<div class='' style='max-width: 15rem; height:100%;'>" + 
                    "<div class='header'><h5>" + data.header + "</h5></div>" +
                    "<div class='body text-dark'>" + 
                        "<h6 class='subtitle mb-1 text-muted'>Speed: " + data.speed + " KM/H</h6>" +
                        "<h6 class='subtitle mb-1 text-muted'>Date: " + data.date + "</h6>" +
                    "</div>"+
                "</div>";
    // return content
    return content;
}

function initMap(){
    init();
    //div
    var div = document.getElementById('map');
    // map options
    var options = {
        zoom: 16,
        center:{lat:32.460935,lng:-116.875984}
    }
    
    map = new google.maps.Map(div, options);    

    // loop to add markers
    for(var i = 0; i< arrayMarker.length; i++){
        // add marker
        addMarker(arrayMarker[i]);
    }

}

// Add Marker Function
function addMarker(props){
    // add marker
    var marker = new google.maps.Marker({
        position:props.coords,
        map:map,
        title: props.title
    });

    //check if there's content
    if(props.content){
        var infoWindow = new google.maps.InfoWindow({
            content:props.content
        });

        marker.addListener('click', function(){
            infoWindow.open(map, marker);
        });
    }
}