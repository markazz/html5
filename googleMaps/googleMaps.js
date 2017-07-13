
document.write('I am javascript');


function myMap(){

var mapOptions = {
	center : new google.maps.LatLng(51.5, -0.12),
	zoom:10,
	mapTypeId: google.maps.MapTypeID.HYBRID
}//object

var map = new google.maps.Map(document.getElementById('map'), mapOptions);
					}// myMap function

				