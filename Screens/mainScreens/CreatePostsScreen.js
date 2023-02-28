import React, { useState } from "react";
import * as Location from "expo-location";
import { Camera } from "expo-camera";
import { FontAwesome, SimpleLineIcons, AntDesign } from "@expo/vector-icons";

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

const initialState = {
  photoUri: "",
  name: "",
  place: "",
};

const CreatePostScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState("");
  const [postInfo, setPostInfo] = useState(initialState);
  const [location, setLocation] = useState("");

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync({ pictureSize: 250 });
    setPhoto(photo.uri);
  };
  const addLocation = async () => {
    console.log("Click");
    const geoLocation = await Location.getCurrentPositionAsync({});
    setLocation(geoLocation);
    console.log("location", geoLocation);
  };
  const sendData = () => {
    navigation.navigate("DefaultScreen", { photo });
  };

  return (
    <View style={styles.container}>
      <View style={styles.camera}>
        <Camera ref={setCamera}>
          {photo && (
            <View style={styles.imgContainer}>
              <Image
                source={{ uri: photo }}
                style={{ height: 100, width: 100 }}
              />
            </View>
          )}
          <TouchableOpacity onPress={takePhoto} style={styles.snapContainer}>
            <FontAwesome name="camera" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </Camera>
      </View>
      <Text style={styles.loadImgText}>Загрузите фото</Text>
      <TextInput
        style={styles.inputText}
        placeholder={"Название..."}
        onChangeText={(value) =>
          setPostInfo((prevState) => ({ ...prevState, name: value }))
        }
      />
      <View style={{ position: "relative" }}>
        <TextInput
          onFocus={addLocation}
          value={location}
          placeholder={"Местность..."}
          style={{ ...styles.inputText, paddingLeft: 28 }}
          // onChangeText={() => {}}
        />
        <SimpleLineIcons
          style={{ position: "absolute", bottom: 15 }}
          name="location-pin"
          size={24}
          color="#BDBDBD"
        />
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.button}
        onPress={sendData}
      >
        <Text style={{ fontSize: 16, color: "#BDBDBD" }}>Опубликовать</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.7}
        style={{ ...styles.button, width: 70, height: 40 }}
        onPress={() => {}}
      >
        <AntDesign name="delete" size={24} color="#BDBDBD" />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#E5E5E5",
    paddingHorizontal: 16,
  },
  camera: {
    // position: "relative",
    height: 240,
    backgroundColor: "#F6F6F6",
    marginTop: 32,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  snapContainer: {
    backgroundColor: "#fff",
    fill: "#fff",
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  imgContainer: {
    // position: "absolute",
    // top: "-100%",
    // left: 10,
    // // borderColor: "black",
    // borderRadius: 8,
    // borderWidth: 1,
  },
  loadImgText: {
    color: "#BDBDBD",
    marginTop: 8,
    fontSize: 16,
  },
  inputText: {
    marginTop: 48,
    paddingBottom: 15,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    placeholderTextColor: "#BDBDBD",
    fontSize: 16,
  },
  button: {
    width: 343,
    height: 51,
    marginTop: 32,
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default CreatePostScreen;
