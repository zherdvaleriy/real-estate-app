import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';



const MapComponent = () => {
  return (
    <MapContainer center={position} zoom={13} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default MapComponent

const styles = StyleSheet.create({
    
})