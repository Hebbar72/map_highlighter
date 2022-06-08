map.setZoom(4);

var l1 = new MapmyIndia.kml(map,"dist10.kml", {fitBounds:false,async: false});
var l2 = new MapmyIndia.kml(map,"dist20.kml", {fitBounds:false,async: true});
var l3 = new MapmyIndia.kml(map,"dist30.kml", {fitBounds:false,async: true});
var l4 = new MapmyIndia.kml(map,"dist40.kml", {fitBounds:false,async: true});

l1_val = 0;
l2_val = 0;
l3_val = 0;
l4_val = 0;

var l_dark = null;


l1.on("click", function(e)
{
    if(l2_val == 1)
    {
        map.removeLayer(l2);
    }
    if(l3_val == 1)
    {
        map.removeLayer(l3);
    }
    if(l4_val == 1)
    {
        map.removeLayer(l4);
    }
    var point = e.latlng;
    l1 = new MapmyIndia.kml(map,"dist1.kml", {fitBounds:false,async: true});
    l1_val = 1;
    console.log("*");
});

l2.on("click", function(e)
{
    if(l1_val == 1)
    {
        map.removeLayer(l1);
    }
    if(l3_val == 1)
    {
        map.removeLayer(l3);
    }
    if(l4_val == 1)
    {
        map.removeLayer(l4);
    }
    var point = e.latlng;
    l2 = new MapmyIndia.kml(map,"dist2.kml", {fitBounds:false,async: true});
    l2_val = 1;
    console.log("**");
});

l3.on("click", function(e)
{
    if(l1_val == 1)
    {
        map.removeLayer(l1);
    }
    if(l2_val == 1)
    {
        map.removeLayer(l2);
    }
    if(l4_val == 1)
    {
        map.removeLayer(l4);
    }
    var point = e.latlng;
    l3 = new MapmyIndia.kml(map,"dist3.kml", {fitBounds:false,async: true});
    l3_val = 1;
    console.log("***");
});

l4.on("click", function(e)
{
    if(l1_val == 1)
    {
        map.removeLayer(l1);
    }
    if(l2_val == 1)
    {
        map.removeLayer(l2);
    }
    if(l3_val == 1)
    {
        map.removeLayer(l3);
    }
    var point = e.latlng;
    l4 = new MapmyIndia.kml(map,"dist4.kml", {fitBounds:false,async: true});
    l4_val = 1;
    console.log("****");
});

map.on("click",function(e)
{
    if(l1_val == 1)
    {
        map.removeLayer(l1);
    }
    if(l2_val == 1)
    {
        map.removeLayer(l2);
    }
    if(l3_val == 1)
    {
        map.removeLayer(l3);
    }
    if(l4_val == 1)
    {
        map.removeLayer(l4);
    }
    console.log("*****");
})

