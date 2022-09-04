import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {tileLayer, latLng, LeafletMouseEvent, Marker, marker, map} from 'leaflet';
import { coordinatesMap } from './coordinate';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.layers = this.initialCoordinates.map(value => marker([value.latitude, value.longitude])); 
  }

  @Input()
  initialCoordinates: coordinatesMap[] = [];

  @Output()
  OnSelectedLocation = new EventEmitter<coordinatesMap>();

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
        maxZoom: 28, attribution: 'Vintage Movies' })
    ],
    zoom: 15,
    center: latLng(47.83257, -122.33402)
  };

  layers: Marker<any>[] = [];


  handleMapClick(event: LeafletMouseEvent){
    const latitude = event.latlng.lat;
    const longitude = event.latlng.lng;
    console.log({latitude, longitude});
    this.layers = [];
    this.layers.push(marker([latitude,longitude]));
    this.OnSelectedLocation.emit({latitude, longitude});
  }

}
