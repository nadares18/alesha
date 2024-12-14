import { Component } from '@angular/core';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css'],
  standalone: false
})
export class MapViewComponent {
  qbigMallLocation = 'QBig Mall BSD, Indonesia';
  // urltest = "gojek://ride?destination=QBig+Mall+BSD,Indonesia";

  constructor() {}

  openGoogleMaps(location: string): void {
    const query = encodeURIComponent(location);
    const url = `https://www.google.com/maps/search/?api=1&query=${query}`;
    window.open(url, '_blank');
  }

  openDirections(destination: string): void {
    const destinationQuery = encodeURIComponent(destination);

    // Using the "geo" scheme for deep linking to the Google Maps app
    const directionsUrl = navigator.userAgent.match(/iPhone|iPad|Android/i)
      ? `https://www.google.com/maps/dir/?api=1&destination=${destinationQuery}`
      : `https://www.google.com/maps/dir/?api=1&destination=${destinationQuery}`;

    window.open(directionsUrl, '_blank');
  }
}
