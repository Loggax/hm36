let map;

function initMap () {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 48.99664, 
            lng: 24.19113
        },
        zoom: 14
    });

    let locations = [
        {
            position: new google.maps.LatLng(48.996724, 24.186315),
            name: 'ЗОШ 1-3 ступенів',
            decription: 'Це школа в якій я навчався',
            img: `<img src="https://www.karpaty.info/ua/uk/if/kl/broshniv-osada/restaurants/">`,
        },

        {
            position: new google.maps.LatLng(48.995886, 24.187850),
            name: 'Ресторан "Амур"',
            decription: 'Топовий генделик',
            img: `<img src="https://images.app.goo.gl/LG4F3M68suticKM27">`,
        }
    ];
    
    const infoWindow = new google.maps.InfoWindow();
    
    for(let i = 0; i <= locations.length; i++) {
        const marker = new google.maps.Marker({
            position: locations[i].position,
            map: map,
        });

        const content = `
        <div class = "img-holder">${locations[i].img}</div>
        <p>${locations[i].name}</p>
        <p>${locations[i].decription}</p>
        `;

        marker.addListener('click', () => {
            infoWindow.setContent(content);
            infoWindow.open({
                anchor: marker,
                map,
            });
            map.setCenter(marker.getPosition());
        })
    }
}