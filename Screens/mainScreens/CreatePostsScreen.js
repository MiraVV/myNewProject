import React from "react";
import { View, Text, StyleSheet } from "react-native";
const CreatePostScreen = () => {
  return (
    <View style={styles.contanier}>
      {/* <View style={styles.headContainer}>
        <Text style={styles.textTitle}>Создать публикацию</Text>
      </View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  contanier: {
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
});
export default CreatePostScreen;
