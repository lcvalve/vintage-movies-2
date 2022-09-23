import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { tileLayer, latLng, LeafletMouseEvent, Marker, marker, map, Icon, icon } from 'leaflet';
import { coordinatesMap, coordinatesMapWithMessage } from './coordinate';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if (this.initialCoordinates.length > 0) {
      this.options = {
        layers: [
          tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 28, attribution: 'Vintage Movies'
          })
        ],
        zoom: 15,
        center: latLng(this.initialCoordinates[0].latitude, this.initialCoordinates[0].longitude)
      };

      this.layers = this.initialCoordinates.map(value => {
        const m = marker([value.latitude, value.longitude], {
          icon: icon({
            ...Icon.Default.prototype.options,
            iconUrl: 'assets/marker-icon.png',
            iconRetinaUrl: 'assets/marker-icon-2x.png',
            shadowUrl: 'assets/marker-shadow.png'
          })
        });
        if (value.message) {
          m.bindPopup(value.message, { autoClose: false, autoPan: false });
        }
        return m;
      });
    }

  }


  @Input()
  initialCoordinates: coordinatesMapWithMessage[] = [];

  @Input()
  editMode: boolean = true;

  @Output()
  OnSelectedLocation = new EventEmitter<coordinatesMap>();

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 28, attribution: 'Vintage Movies'
      })
    ],
    zoom: 15,
    center: latLng(47.83257, -122.33402)
  };

  layers: Marker<any>[] = [];


  handleMapClick(event: LeafletMouseEvent) {
    if (this.editMode) {
      const latitude = event.latlng.lat;
      const longitude = event.latlng.lng;
      console.log({ latitude, longitude });
      this.layers = [];
      this.layers.push(marker([latitude, longitude], {
        icon: icon({
          ...Icon.Default.prototype.options,
          iconUrl: 'assets/marker-icon.png',
          iconRetinaUrl: 'assets/marker-icon-2x.png',
          shadowUrl: 'assets/marker-shadow.png'
        })
      }));
      this.OnSelectedLocation.emit({ latitude, longitude });
    }
  }
}
