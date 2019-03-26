let animation;
let map;
let locations;
let request;
let infowindow;
let markers = [];

function initialize() {
    let center = new google.maps.LatLng(47.5260, 15.2551);
    animation = google.maps.Animation.DROP;

    map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 3,
        disableDefaultUI: true
    });

    locations = [
                    ['Paris, France', 48.8566, 2.3522],
                    ['Santorini, Greece', 36.3932, 25.4615],
                    ['Mykonos, Greece', 37.4467, 25.3289],
                    ['Rome, Italy', 41.9028, 12.4964],
                    ['Marrakesh, Morocco', 31.6295, -7.9811],
                    ['Lisbon, Portugal', 38.7223, -9.1393],
                    ['Barcelona, Spain', 41.3851, 2.1734],
                ];

    let marker;
    let i;

    for(i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            animation: animation,
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            title: locations[i][0],
        });
        
        google.maps.event.addListener(marker, 'click', function() {
            map.setZoom(12);
            map.setCenter(this.position);

            request = {
                location: this.position,
                radius: 8047 * 2,
                types: ['amusement_park', 'art_gallery', 'bar', 'museum', 'night_club', 'shopping_mall', 'zoo'],
                fields: ['name', 'formatted_address', 'website',],
            };

            infowindow = new google.maps.InfoWindow();

            service = new google.maps.places.PlacesService(map);
            service.nearbySearch(request, callback);
        });
            
        document.addEventListener('click', function(e) {
            if (!e.target.matches('#reset-button')) return;

            e.preventDefault();

            map.setZoom(3);
            map.setCenter({lat:47.5260, lng:15.2551});
            clearMarkers(markers);
        });
    }
}

function callback(results, status) {
    if(status == google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
            markers.push(createMarker(results[i]));
        }
    }
}

function createMarker(place) {
    let placeLocation = place.geometry.location;

    let placeIcon = {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: '#ff6a6f',
        fillOpacity: 1,
        scale: 4.5,
        strokeColor: 'white',
        strokeWeight: 1,
    };

    let marker = new google.maps.Marker({
        map: map,
        position: placeLocation,
        icon: placeIcon,
    });

    google.maps.event.addListener(marker, 'click', function() {
        let request = {
            reference: place.reference,
        };

        service.getDetails(request, function(place_details, status) {
            infowindow.setContent('<p><strong>' + place_details.name + '</strong></p><p>' + place_details.formatted_address + '</p><p><a href="' +  place_details.website + '" target="_blank" rel="noopener">View Website</a></p>');
            infowindow.open(map, marker);
        });
    });

    return marker;
}

function clearMarkers(markers) {
    for (let m in markers) {
        markers[m].setMap(null)
    }
    markers = [];
}

$(window).on('load', function() {
    initialize();
});