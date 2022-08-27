import { Component, OnInit } from '@angular/core';
import {tileLayer, latLng, LeafletMouseEvent, Marker, marker, map} from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
        maxZoom: 18, attribution: 'Vintage Movies' })
    ],
    zoom: 5,
    center: latLng(47.87859187064733, -122.23388671875001)
  };

  layers: Marker<any>[] = [];


  handleMapClick(event: LeafletMouseEvent){
    const latitude = event.latlng.lat;
    const longitude = event.latlng.lng;
    console.log({latitude, longitude});
    this.layers = [];
    this.layers.push(marker([latitude,longitude]));
  }

}
