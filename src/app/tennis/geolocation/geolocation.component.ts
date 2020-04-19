import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';
import { } from '@types/googlemaps';
import {} from '@types/googlemaps';
import { AgmCoreModule, MapsAPILoader } from "@agm/core";

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.css']
})
export class GeolocationComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  currentLat: any;
  currentLong: any;
  marker: google.maps.Marker;
  constructor() { }

  ngOnInit() {
    var mapProp = {
      center: new google.maps.LatLng(73.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    this.findMe();
  }

  firstCourt(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.showfirstCourt();
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  secondCourt(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.showsecondCourt();
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  thirdCourt(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.showthirdCourt();
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  showthirdCourt(){
    this.currentLat = 42.6847;
    this.currentLong = 23.3869;

    let location = new google.maps.LatLng(this.currentLat, this.currentLong);
    this.map.panTo(location);

    if (!this.marker) {
      this.marker = new google.maps.Marker({
        position: location,
        map: this.map,
        title: 'Got you!'
      });
    }
    else {
      this.marker.setPosition(location);
    }
  }

  showsecondCourt(){
    this.currentLat = 42.7117;
    this.currentLong = 23.3529;

    let location = new google.maps.LatLng(this.currentLat, this.currentLong);
    this.map.panTo(location);

    if (!this.marker) {
      this.marker = new google.maps.Marker({
        position: location,
        map: this.map,
        title: 'Got you!'
      });
    }
    else {
      this.marker.setPosition(location);
    }
  }
  

  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.showPosition(position);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  showfirstCourt(){
    this.currentLat = 42.6477;
    this.currentLong = 23.3219;

    let location = new google.maps.LatLng(this.currentLat, this.currentLong);
    this.map.panTo(location);

    if (!this.marker) {
      this.marker = new google.maps.Marker({
        position: location,
        map: this.map,
        title: 'Got you!'
      });
    }
    else {
      this.marker.setPosition(location);
    }
  }  

  showPosition(position) {
    this.currentLat = position.coords.latitude;
    this.currentLong = position.coords.longitude;

    let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    this.map.panTo(location);

    if (!this.marker) {
      this.marker = new google.maps.Marker({
        position: location,
        map: this.map,
        title: 'Got you!'
      });
    }
    else {
      this.marker.setPosition(location);
    }
  }
  
}
