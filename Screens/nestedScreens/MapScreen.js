import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = () => {
  return (
    <View style={styles.contanier}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 41.390205,
          longitude: 2.154007,
          latitudeDelta: 0.001,
          longitudeDelta: 0.006,
        }}
      >
        <Marker
          coordinate={{ latitude: 41.3902, longitude: 2.154007 }}
          title="Place for photo"
        />
      </MapView>
    </View>
  );
};
const styles = StyleSheet.create({
  contanier: {
    flex: 1,
  },
});
export default MapScreen;
