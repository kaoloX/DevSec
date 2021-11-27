import React from 'react';
import { Button, View, Text, TextInput,Dimensions,StyleSheet, KeyboardAvoidingView } from 'react-native';
import MapView, { Marker } from 'react-native-maps'
import styles from "./style"
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

  
export function MyComponent({navigation}) {
  const { isLoaded } = useJsApiLoader({
  id: 'google-map-script',
  googleMapsApiKey: "AIzaSyDxqsdsX3dqNTU9dgWibCdcbv7z9yPCDYM"
  })
  
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
          <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title="Cuidado você está em uma região Perigosa!"
          description="Houveram 10 crimes de Assalto a mão armada aqui!"
          icon={{
            uri:"https://img.icons8.com/ios-filled/50/000000/robber.png"
          }}  
        />  

      <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title="Cuidado você está em uma região Perigosa!"
          description="Houveram 10 crimes de Assalto a mão armada aqui!"
          icon={{
            uri:"https://img.icons8.com/ios-filled/50/000000/robber.png"
          }}
          
        />
        <Marker
          coordinate={{
            latitude: 37.78888,
            longitude: -122.4367,
          }}
          title="Cuidado você está em uma região Perigosa!"
          description="Houveram 2 crimes de Estupro aqui!"
          icon={{
            uri:"https://img.icons8.com/ios-filled/50/000000/robber.png"
          }}
          
        />
        <Marker
          coordinate={{
            latitude: 37.79145,
            longitude: -122.42148,
          }}
          title="Cuidado você está em uma região Perigosa!"
          description="Somente nesta semana 2 pessoas morreram aqui!"
          icon={{
            uri:"https://img.icons8.com/ios-filled/50/000000/robber.png"
          }}
          
        />
        <Marker
          coordinate={{
            latitude: 37.794444,
            longitude: -122.433542,
          }}
          title="DELEGACIA"
          description="Delegacia mais próxima de você"
          icon={{
            uri:"https://img.icons8.com/ios-glyphs/90/000000/police-officer.png"
          }}
          
        />
        <Marker
          coordinate={{
            latitude: 37.79041,
            longitude: -122.44903,
          }}
          title="MORTE"
          description="2 mortes neste local nos últimos dias, Tome Cuidado!"
          icon={{
            uri:"https://img.icons8.com/material/96/000000/death-insurance.png"
          }}
          
        />
        <Marker
          coordinate={{
            latitude: 37.796356,
            longitude: -122.440832,
          }}
          title="Delegacia de defesa da Mulher"
          description="Faça sua denúncia aqui"
          icon={{
            uri:"https://img.icons8.com/material/96/000000/woman-head.png"
          }}                
        />
        <Marker
          coordinate={{
            latitude: 37.796500,
            longitude: -122.432517 ,
          }}
          title="MORTE"
          description="2 mortes neste local nos últimos dias, Tome Cuidado!"
          icon={{
            uri:"https://img.icons8.com/material/96/000000/death-insurance.png"
          }}         
        />
        <Marker
          coordinate={{
            latitude: 37.793660,
            longitude: -122.439993,
          }}
          title="MORTE"
          description="2 mortes neste local nos últimos dias, Tome Cuidado!"
          icon={{
            uri:"https://img.icons8.com/material/96/000000/death-insurance.png"
          }}         
        />

        <></>
      </GoogleMap>
  ) : <></>
}

const containerStyle = {
  width: '400px',
  height: '400px'
};


export default React.memo(MyComponent)
/*
  export default function Map({navigation}) {
    return (
      <KeyboardAvoidingView>
      

  const [map, setMap] = React.useState(null)

      <View>  
      
      
        <MapView 
        style={styles.mapStyle}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title="Cuidado você está em uma região Perigosa!"
          description="Houveram 10 crimes de Assalto a mão armada aqui!"
          icon={{
            uri:"https://img.icons8.com/ios-filled/50/000000/robber.png"
          }}
          
        />
        <Marker
          coordinate={{
            latitude: 37.78888,
            longitude: -122.4367,
          }}
          title="Cuidado você está em uma região Perigosa!"
          description="Houveram 2 crimes de Estupro aqui!"
          icon={{
            uri:"https://img.icons8.com/ios-filled/50/000000/robber.png"
          }}
          
        />
        <Marker
          coordinate={{
            latitude: 37.79145,
            longitude: -122.42148,
          }}
          title="Cuidado você está em uma região Perigosa!"
          description="Somente nesta semana 2 pessoas morreram aqui!"
          icon={{
            uri:"https://img.icons8.com/ios-filled/50/000000/robber.png"
          }}
          
        />
        <Marker
          coordinate={{
            latitude: 37.794444,
            longitude: -122.433542,
          }}
          title="DELEGACIA"
          description="Delegacia mais próxima de você"
          icon={{
            uri:"https://img.icons8.com/ios-glyphs/90/000000/police-officer.png"
          }}
          
        />
        <Marker
          coordinate={{
            latitude: 37.79041,
            longitude: -122.44903,
          }}
          title="MORTE"
          description="2 mortes neste local nos últimos dias, Tome Cuidado!"
          icon={{
            uri:"https://img.icons8.com/material/96/000000/death-insurance.png"
          }}
          
        />
        <Marker
          coordinate={{
            latitude: 37.796356,
            longitude: -122.440832,
          }}
          title="Delegacia de defesa da Mulher"
          description="Faça sua denúncia aqui"
          icon={{
            uri:"https://img.icons8.com/material/96/000000/woman-head.png"
          }}                
        />
        <Marker
          coordinate={{
            latitude: 37.796500,
            longitude: -122.432517 ,
          }}
          title="MORTE"
          description="2 mortes neste local nos últimos dias, Tome Cuidado!"
          icon={{
            uri:"https://img.icons8.com/material/96/000000/death-insurance.png"
          }}         
        />
        <Marker
          coordinate={{
            latitude: 37.793660,
            longitude: -122.439993,
          }}
          title="MORTE"
          description="2 mortes neste local nos últimos dias, Tome Cuidado!"
          icon={{
            uri:"https://img.icons8.com/material/96/000000/death-insurance.png"
          }}         
        />
        </MapView> 
      </View>
      </KeyboardAvoidingView>

      */
  




  