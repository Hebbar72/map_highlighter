map.setZoom(4);

var l1 = new MapmyIndia.kml(map,"dist10.kml", {fitBounds:false,async: false});
var l2 = new MapmyIndia.kml(map,"dist20.kml", {fitBounds:false,async: true});
var l3 = new MapmyIndia.kml(map,"dist30.kml", {fitBounds:false,async: true});
var l4 = new MapmyIndia.kml(map,"dist40.kml", {fitBounds:false,async: true});
var l_dark = null;


l1.on("click", function(e)
{
    var point = e.latlng;
    if (l_dark !== null) map.removeLayer(l_dark);
    l1 = new MapmyIndia.kml(map,"dist1.kml", {fitBounds:false,async: true});
    l_dark = l1;
    console.log("*");
});

l2.on("click", function(e)
{
    var point = e.latlng;
    if (l_dark !== null) map.removeLayer(l_dark);
    l2 = new MapmyIndia.kml(map,"dist2.kml", {fitBounds:false,async: true});
    l_dark = l2;
    console.log("**");
});

l3.on("click", function(e)
{
    var point = e.latlng;
    if (l_dark !== null) map.removeLayer(l_dark);
    l3 = new MapmyIndia.kml(map,"dist3.kml", {fitBounds:false,async: true});
    l_dark = l3;
    console.log("***");
});

l4.on("click", function(e)
{
    var point = e.latlng;
    if (l_dark !== null) map.removeLayer(l_dark);
    l4 = new MapmyIndia.kml(map,"dist4.kml", {fitBounds:false,async: true});
    l_dark = l4;
    console.log("****");
});

map.on("click",function(e)
{
    if (l_dark !== null) {map.removeLayer(l_dark)
    l_dark = null;}
    console.log("*****");
})

