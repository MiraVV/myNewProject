import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const PostScreen = () => {
  return (
    <View style={styles.container}>
      {/* <View style={styles.headContainer}> */}
      {/* <Text style={styles.textTitle}>Публикации</Text> */}
      {/* <Feather style={styles.icon} name="log-out" size={24} color="#BDBDBD" /> */}
      {/* </View> */}

      <View style={styles.postContainer}>
        <View style={styles.userInfo}>
          <View style={styles.imageAva}></View>
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontWeight: "700" }}>Name</Text>
            <Text>Email</Text>
          </View>
        </View>
      </View>
      {/* <View style={styles.footerContainer}>
        <Feather name="grid" size={24} color="rgba(33, 33, 33, 0.8)" />
        <TouchableOpacity style={styles.btn}>
          <Feather name="plus" size={24} color="#FFFFFF" />
        </TouchableOpacity>

        <Feather name="user" size={24} color="rgba(33, 33, 33, 0.8)" />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textTitle: {
    fontSize: 17,
    lineHeight: 22,
    marginTop: 40,
    marginRight: 100,
    textAlign: "center",
    fontWeight: "500",
  },
  headContainer: {
    flexDirection: "row",

    justifyContent: "flex-end",
    alignItems: "flex-end",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.0,
    paddingBottom: 10,
  },
  icon: {
    marginRight: 10,
    // borderWidth: 1,
  },
  postContainer: {
    flex: 1,
    padding: 16,
  },
  footerContainer: {
    paddingTop: 10,
    paddingBottom: 34,
    backgroundColor: "#fff",
    flexDirection: "row",

    justifyContent: "center",
    alignItems: "center",
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
  userInfo: { flexDirection: "row", alignItems: "center" },
});

export default PostScreen;
