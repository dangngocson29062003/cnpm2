import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  useWindowDimensions,
  TouchableNativeFeedback,
  Keyboard,
} from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../store/context/ThemeContext";
// import { useFonts } from "expo-font";
// import AppLoading from "expo-app-loading";
export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigation = useNavigation();
  const { dark, colors } = useTheme();
  const { width, height } = useWindowDimensions();
  const validateForm = () => {
    let errors = {};
    if (!username) errors.username = "Vui lòng nhập tên đăng nhập !";
    if (!password) errors.password = "Vui lòng nhập mật khẩu !";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  async function handleSubmit() {
    if (validateForm()) {
      await AsyncStorage.setItem("isLoggedIn", "true");
      const login = await AsyncStorage.getItem("isLoggedIn");
      console.log(login);
      setUsername("");
      setPassword("");
      setErrors({});
      navigation.goBack();
    }
  }
  const toggle = () => {
    setShowPassword(!showPassword);
  };
  return (
    <TouchableNativeFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss}>
      <View style={{ flex: 1, backgroundColor: colors.background }}>
        <ImageBackground
          source={require("../assets/images/login.png")}
          style={styles.backgroundLogin}
        >
          <View
            style={[styles.form, { backgroundColor: colors.background700 }]}
          >
            <Text style={[styles.title, { color: colors.text }]}>Đăng kí</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <View style={{ flex: 1 }}>
                <Text style={[styles.text, { color: colors.text }]}>Họ</Text>
                <TextInput
                  style={[
                    styles.input,
                    { backgroundColor: colors.background, color: colors.text },
                  ]}
                  placeholderTextColor={colors.icon}
                  placeholder="Họ"
                  value={{}}
                  autoCorrect={false}
                  onChangeText={{}}
                  autoCapitalize="none"
                />
                {errors.password ? (
                  <Text style={styles.errorsText}>{errors.password}</Text>
                ) : null}
              </View>
              <View style={{ flex: 1, marginStart: 10 }}>
                <Text style={[styles.text, { color: colors.text }]}>Tên</Text>
                <TextInput
                  style={[
                    styles.input,
                    { backgroundColor: colors.background, color: colors.text },
                  ]}
                  placeholderTextColor={colors.icon}
                  placeholder="Tên"
                  value={password}
                  autoCorrect={false}
                  onChangeText={setPassword}
                  autoCapitalize="none"
                />
                {errors.password ? (
                  <Text style={styles.errorsText}>{errors.password}</Text>
                ) : null}
              </View>
            </View>

            <View>
              <Text style={[styles.text, { color: colors.text }]}>Email</Text>
              <TextInput
                style={[
                  styles.input,
                  { backgroundColor: colors.background, color: colors.text },
                ]}
                placeholder="Email"
                value={username}
                onChangeText={setUsername}
                placeholderTextColor={colors.icon}
              />
              {errors.username ? (
                <Text style={styles.errorsText}>{errors.username}</Text>
              ) : null}
            </View>
            <View>
              <Text style={[styles.text, { color: colors.text }]}>
                Mật khẩu
              </Text>
              <TextInput
                style={[
                  styles.input,
                  { backgroundColor: colors.background, color: colors.text },
                ]}
                placeholderTextColor={colors.icon}
                placeholder="Mật khẩu"
                value={password}
                autoCorrect={false}
                onChangeText={setPassword}
                autoCapitalize="none"
              />
              {errors.password ? (
                <Text style={styles.errorsText}>{errors.password}</Text>
              ) : null}
            </View>
            <View>
              <Text style={[styles.text, { color: colors.text }]}>
                Nhập lại mật khẩu
              </Text>
              <TextInput
                style={[
                  styles.input,
                  { backgroundColor: colors.background, color: colors.text },
                ]}
                placeholderTextColor={colors.icon}
                placeholder="Nhập lại mật khẩu"
                value={password}
                autoCorrect={false}
                onChangeText={setPassword}
                autoCapitalize="none"
              />
              {errors.password ? (
                <Text style={styles.errorsText}>{errors.password}</Text>
              ) : null}
            </View>

            <TouchableOpacity onPress={handleSubmit}>
              <LinearGradient
                colors={["#19A1BE", "#7D4192"]}
                style={styles.linear}
              >
                <View
                  style={[
                    styles.button,
                    {
                      backgroundColor: colors.background700,
                    },
                  ]}
                >
                  <Text style={[styles.title, { color: colors.text }]}>
                    Đăng kí
                  </Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
            <Text
              style={{
                marginTop: 20,
                fontWeight: "600",
                textAlign: "center",
                color: colors.text,
              }}
            >
              {" "}
              Hoặc{" "}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <TouchableOpacity style={styles.facebook}>
                <MaterialCommunityIcons
                  name="facebook"
                  size={50}
                  color="#4354CE"
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.google}>
                <FontAwesome
                  name="google-plus-official"
                  size={50}
                  color="#CE4343"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ color: colors.text }}>
              Bạn đã có tài khoản PEEKABOO?
            </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text
                style={{
                  fontWeight: "bold",
                  textDecorationLine: "underline",
                  color: "#cd5c5c",
                }}
              >
                Đăng nhập
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 100,
            }}
          >
            <Image
              source={
                dark
                  ? require("../assets/images/logo.png")
                  : require("../assets/images/logolight.png")
              }
            ></Image>
          </View>
        </ImageBackground>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  backgroundLogin: {
    height: Dimensions.get("window").height / 1.7,
    width: Dimensions.get("window").width,
    marginTop: 50,
  },
  form: {
    padding: 25,
    marginTop: 200,
    borderRadius: 10,
    marginHorizontal: 20,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elavation: 5,
  },
  input: {
    height: 40,

    borderWidth: 1,
    borderColor: "#ddd",
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
  },
  errorsText: {
    color: "red",
    textAlign: "center",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  text: {
    fontWeight: "600",
  },
  button: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    justifyContent: "center",
  },
  linear: {
    borderRadius: 10,
    padding: 2,
    width: "100%",
    height: 40,
  },
  lineContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
    width: "100%",
    opacity: 0.5,
  },
  facebook: {
    marginHorizontal: 50,
  },
  google: {
    marginHorizontal: 50,
  },
});
