import React, { useEffect } from 'react';
import styles from './map.module.css';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  useEffect(() => {
    const myLatLng = { lat: 37.738728425049814, lng: 29.092283371592714 };
    const map = new window.google.maps.Map(document.getElementById('map'), {
      zoom: 20,
      center: myLatLng,
    });

    new window.google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!',
    });
  }, []); // useEffect sadece bir kez çalışması için boş bağımlılık dizisi ile çağrılır

  return <div id='map' style={{ width: '1280px', height: '400px' }}></div>;
};

const WrappedMap = () => (
  <LoadScript googleMapsApiKey='AIzaSyD1f6-u7U4CDW0pEU3zFDthvZZzvqfPoUg'>
    <Map />
  </LoadScript>
);

export default WrappedMap;
