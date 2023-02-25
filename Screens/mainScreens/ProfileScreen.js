import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

const ProfileScreen = () => {
  return (
    <View style={styles.contanier}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/images/photoBG.png")}
      ></ImageBackground>
      <View style={styles.formContainer}>
        <View>
          <View style={styles.imageAdd}>
            <View style={styles.plusSign}>
              <Image source={require("../../assets/images/add.png")} />
            </View>
          </View>
          <Feather
            style={styles.icon}
            name="log-out"
            size={24}
            color="#BDBDBD"
          />
        </View>
        <Text style={styles.userName}>Name</Text>
        <View>
          <Text>Post</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    resizeMode: "cover",
  },
  formContainer: {
    backgroundColor: "#fff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    alignItems: "center",
  },
  imageAdd: {
    width: 120,
    height: 120,
    position: "relative",
    backgroundColor: "#F6F6F6",
    marginTop: -60,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 16,
  },
  plusSign: {
    position: "absolute",
    right: -12,
    bottom: 14,
    width: 25,
    height: 25,
    borderColor: "#FF6C00",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  userName: {
    fontSize: 30,
    marginTop: 32,
    marginBottom: 33,
    textAlign: "center",
    fontWeight: "500",
    color: "#212121",
  },
});
export default ProfileScreen;
