// Instructions to every other class
// on how they can be an argument to 'addMarker'
export interface Mappable {
  location: {
    lat: number
    lng: number
  }
  markerContent(): string
}

export class CustomMap {
  //不要讓其他人動這個class
  private googleMap: google.maps.Map

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      //必須要有 as HTMLElement
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 23,
          lng: 121,
        },
      },
    )
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    })

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        // content: '<h1>Hello World!</h1>',
        content: mappable.markerContent(),
        ariaLabel: 'Uluru',
      })

      infoWindow.open({
        anchor: marker,
        map: this.googleMap,
      })
    })
  }
}
