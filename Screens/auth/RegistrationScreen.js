import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const initialState = {
  login: "",
  email: "",
  password: "",
};
export default function RegistrationScreen({ navigation, route }) {
  const [value, setValue] = useState("");
  const [state, setState] = useState(initialState);
  const [active, setActive] = useState({
    login: false,
    email: false,
    password: false,
  });
  const [keyboardShown, setKeyboardShown] = useState(false);
  const hideKeyboard = () => {
    setKeyboardShown(false);
    Keyboard.dismiss();
  };
  const submitForm = () => {
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  const handleLoginFocus = () => {
    setActive(() => ({ login: true }));
    setKeyboardShown(true);
  };
  const handleEmailFocus = () => {
    setActive(() => ({ email: true }));
    setKeyboardShown(true);
  };
  const handlePasswordFocus = () => {
    setActive(() => ({ password: true }));
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
              marginBottom: keyboardShown ? -140 : 0,
            }}
          >
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <View style={styles.imageAdd}>
                <View style={styles.plusSign}>
                  <Image source={require("../../assets/images/add.png")} />
                </View>
              </View>
              <Text style={styles.formTitle}>Регистрация</Text>
              <TextInput
                style={styles.input}
                placeholder={"Логин"}
                value={state.login}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, login: value }))
                }
                onFocus={handleLoginFocus}
              />
              <TextInput
                style={styles.input}
                placeholder={"Адрес электронной почты"}
                value={state.email}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))
                }
                onFocus={handleEmailFocus}
              />
              <TextInput
                style={styles.input}
                placeholder={"Пароль"}
                value={state.password}
                onChangeText={(value) =>
                  setState((prevState) => ({
                    ...prevState,
                    password: value,
                  }))
                }
                onFocus={handlePasswordFocus}
              />

              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btn}
                onPress={submitForm}
              >
                <Text style={styles.btnTitle}>Зарегистрироваться</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.login}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={styles.loginText}>Уже есть аккаунт? Войти</Text>
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
  formContainerInput: {},
  formTitle: {
    fontSize: 30,
    marginTop: 32,
    marginBottom: 33,
    textAlign: "center",
    fontWeight: "500",
    color: "#212121",
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
  input: {
    borderWidth: 1,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    marginBottom: 16,
    borderRadius: 8,
    height: 50,
    color: "#212121",
    padding: 16,
    placeholderTextColor: "#BDBDBD",
    width: 343,
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
