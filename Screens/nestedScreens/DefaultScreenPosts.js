import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Image,
  FlatList,
} from "react-native";
import { Feather, SimpleLineIcons } from "@expo/vector-icons";

const DefaultScreenPosts = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  console.log("route.params", route.params);
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <View style={styles.imageAva}></View>
        <View style={{ flexDirection: "column" }}>
          <Text style={{ fontWeight: "700" }}>Name</Text>
          <Text>Email</Text>
        </View>
      </View>
      <View>
        <FlatList
          data={posts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View>
              <Image source={{ uri: item.photo }} style={styles.imgPost} />
              <Text style={styles.imgDescribe}>Description</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate("Comments")}
                >
                  <Feather name="message-circle" size={24} color="#BDBDBD" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Map")}
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <SimpleLineIcons
                    name="location-pin"
                    size={24}
                    color="#BDBDBD"
                  />
                  <Text style={styles.location}>Location</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        ></FlatList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  textTitle: {
    fontSize: 17,
    lineHeight: 22,
    marginTop: 40,
    marginRight: 100,
    textAlign: "center",
    fontWeight: "500",
  },

  btn: {
    borderWidth: 1,
    // marginTop: 27,
    borderRadius: 20,
    backgroundColor: "#FF6C00",
    borderColor: "transparent",
    alignItems: "center",
    padding: 13,
    cursor: "pointer",
    width: 70,
    marginHorizontal: 40,
  },
  imageAva: {
    width: 60,
    height: 60,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderRadius: 16,
    marginRight: 8,
  },
  userInfo: { flexDirection: "row", alignItems: "center", marginTop: 32 },
  imgPost: { width: "100%", height: 200, marginTop: 32, borderRadius: 8 },
  imgDescribe: {
    marginVertical: 8,
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "500",
    color: "#21212",
  },

  location: {
    marginLeft: 8,
    fontSize: 16,
    lineHeight: 19,
    textDecorationLine: "underline",
    color: "#21212",
  },
});

export default DefaultScreenPosts;
