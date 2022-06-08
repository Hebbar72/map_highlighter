map.setZoom(4);
L.marker([28.61, 77.23]).addTo(map);

pts = 
[ 
new L.LatLng(map.getCenter().lat - 10 / 1000, map.getCenter().lng - 10 / 1000),
new L.LatLng(map.getCenter().lat + 0 / 1000, map.getCenter().lng - 10 / 1000),
new L.LatLng(map.getCenter().lat + 10 / 1000, map.getCenter().lng - 20 / 1000),
new L.LatLng(map.getCenter().lat + 0 / 1000, map.getCenter().lng - 20 / 1000),
new L.LatLng(map.getCenter().lat + 5 / 1000, map.getCenter().lng - 5 / 1000),
new L.LatLng(map.getCenter().lat + 15 / 1000, map.getCenter().lng - 15 / 1000),
new L.LatLng(map.getCenter().lat + 15 / 1000, map.getCenter().lng + 15 / 1000),
new L.LatLng(map.getCenter().lat + 0 / 1000, map.getCenter().lng + 0 / 1000),
new L.LatLng(map.getCenter().lat + 10 / 1000, map.getCenter().lng + 20 / 1000),
new L.LatLng(map.getCenter().lat - 15 / 1000, map.getCenter().lng + 20 / 1000),
new L.LatLng(map.getCenter().lat - 10 / 1000, map.getCenter().lng + 0 / 1000)
];

p1 = new L.polygon(pts, {color: "red", draggable: true});
map.addLayer(p1);

var kmlLayer0=new MapmyIndia.kml(map,"doc0.kml", {fitBounds:false,async: true});
var kmlLayer1 = 0;
//var kmlLayer1=new MapmyIndia.kml(map,"doc.kml", {fitBounds:true,async: true});

  
kmlLayer0.on("click", function (e) 
{ 
var pt = e.latlng; //event returns lat lng of clicked point
console.log(pt);
//Do your related operation here

kmlLayer1=new MapmyIndia.kml(map,"doc01.kml", {fitBounds:true,async: true});
console.log("*");
});


{
  map.on("click", function(e)
  {
    var point = e.latlng;
    console.log(point);
    map.removeLayer(kmlLayer1);
    kmlLayer1 = null;
  });
}









  

