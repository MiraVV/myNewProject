import React, { useState } from "react";
import {
  Dimensions,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  TouchableOpacity,
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
} from "react-native";

const initialState = {
  email: "",
  password: "",
};

export default function LoginScreen({ navigation }) {
  const [keyboardShown, setKeyboardShown] = useState(false);
  const [state, setState] = useState(initialState);

  const hideKeyboard = () => {
    setKeyboardShown(false);
    Keyboard.dismiss();
  };

  const submitForm = () => {
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  const handleEmailFocus = () => {
    setKeyboardShown(true);
  };
  const handlePasswordFocus = () => {
    setKeyboardShown(true);
  };

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../../assets/images/photoBG.png")}
        >
          <View
            style={{
              ...styles.formContainer,
            }}
          >
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={{
                marginBottom: keyboardShown ? -180 : 0,
              }}
            >
              <Text style={styles.formTitle}>Войти</Text>
              <TextInput
                style={styles.input}
                placeholder={"Адрес электронной почты"}
                onFocus={handleEmailFocus}
                value={state.email}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))
                }
              />
              <TextInput
                style={styles.input}
                placeholder={"Пароль"}
                secureTextEntry={true}
                onFocus={handlePasswordFocus}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, password: value }))
                }
              />

              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btn}
                onPress={submitForm}
              >
                <Text style={styles.btnTitle}>Войти</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.login}
                onPress={() => navigation.navigate("Register")}
              >
                <Text style={styles.loginText}>
                  Нет аккаунта? Зарегистрироваться
                </Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
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
    padding: 16,
  },
  formTitle: {
    fontSize: 30,
    marginTop: 32,
    marginBottom: 33,
    textAlign: "center",
    fontWeight: "500",
  },
  input: {
    borderWidth: 1,
    width: 343,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    marginBottom: 16,
    borderRadius: 8,
    height: 50,
    color: "#212121",
    padding: 16,
    placeholderTextColor: "#BDBDBD",
  },
  btn: {
    borderWidth: 1,
    marginTop: 27,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    borderColor: "transparent",
    alignItems: "center",
    padding: 16,
    cursor: "pointer",
    width: 343,
  },
  login: {
    alignItems: "center",
    marginTop: 16,
    marginBottom: 66,
    cursor: "pointer",
  },
  loginText: {
    color: "#1B4371",
    fontSize: 16,
  },
  btnTitle: {
    color: "#ffffff",
    fontSize: 16,
  },
});
