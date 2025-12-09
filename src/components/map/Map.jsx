import React, { useEffect } from 'react';
import styles from './map.module.css';
import { LoadScript } from '@react-google-maps/api';

const Map = () => {
    useEffect(() => {
        const myLatLng = { lat: 37.73914882422805, lng: 29.099903542328892 };
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

    return (
        <div
            id='map'
            style={{
                maxWidth: '1248px',
                width: '100%',
                height: '400px',
                margin: '0 auto',
            }}
        ></div>
    );
};

const WrappedMap = () => (
    <div className={styles.container}>
        <LoadScript googleMapsApiKey='AIzaSyD1f6-u7U4CDW0pEU3zFDthvZZzvqfPoUg'>
            <Map />
        </LoadScript>
    </div>
);

export default WrappedMap;
