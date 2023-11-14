import {
  SafeAreaView,
  StyleSheet,
  View,
  ImageBackground,
  Text,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import UserIcon from "../components/UserIcon";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../store/context/ThemeContext";
const TicketScreen = () => {
  const { colors } = useTheme();
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <View style={styles.ticketContainer}>
        <ImageBackground
          source={{
            uri: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/apFcKjQlxzFj2MY9d0rxdyT0ykv.jpg",
          }}
          style={styles.ticketBGImage}
        >
          {/* <LinearGradient>
            <View
              style={[
                styles.blackCircle,
                { position: "absolute", bottom: -40, left: -40 },
              ]}
            ></View>
            <View
              style={[
                styles.blackCircle,
                { position: "absolute", bottom: -40, right: -40 },
              ]}
            ></View>
          </LinearGradient> */}
        </ImageBackground>
        <View style={styles.linear}></View>

        <View style={styles.ticketFooter}>
          <View
            style={[
              styles.blackCircle,
              { position: "absolute", top: -40, left: -40 },
            ]}
          ></View>
          <View
            style={[
              styles.blackCircle,
              { position: "absolute", top: -40, right: -40 },
            ]}
          ></View>
          <View style={styles.ticketDateContainer}>
            <View style={styles.subtitleContainer}>
              <Text style={styles.dateTitle}>1</Text>
              <Text style={styles.subtitle}>1</Text>
            </View>
            <View style={styles.subtitleContainer}>
              <Ionicons name="add" />
              <Text style={styles.subtitle}>1</Text>
            </View>
          </View>
          <View style={styles.ticketSeatContainer}>
            <View style={styles.subtitleContainer}>
              <Text style={styles.subheading}>Hall</Text>
              <Text style={styles.subtitle}>02</Text>
            </View>
            <View style={styles.subtitleContainer}>
              <Text style={styles.subheading}>Row</Text>
              <Text style={styles.subtitle}>04</Text>
            </View>
            <View style={styles.subtitleContainer}>
              <Text style={styles.subheading}>Seats</Text>
            </View>
          </View>
          {/* <Image
            source={require('../assets/image/barcode.png')}
            style={styles.barcodeImage}
          /> */}
        </View>
      </View>
    </SafeAreaView>
  );
};
export default TicketScreen;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: 0,
    position: "relative",
  },
});
