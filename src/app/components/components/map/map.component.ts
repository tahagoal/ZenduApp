import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  markerPositions: google.maps.LatLngLiteral[] = [
    {
      lat: 24,
      lng: 12
    },
    {
      lat:28,
      lng:28
    }
  ];
  display: any;
  center: google.maps.LatLngLiteral = {
    lat: 24,
    lng: 12
  };
  zoom = 4;
  markerOptions: google.maps.MarkerOptions = {
    draggable: false
  };
    
  ngOnInit(): void { }
  
  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.markerPositions.push(event.latLng.toJSON());
  }
}
