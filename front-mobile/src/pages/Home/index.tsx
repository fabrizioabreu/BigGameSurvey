import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { FontAwesome5 as Icon } from "@expo/vector-icons";
import { Text, StyleSheet, View, Image, Alert } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate("CreateRecord");
  };
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <>
        <Header />
        <View style={styles.container}>
          <Image
            source={require("../../assets/gamer.png")}
            style={styles.gamerImage}
          />
          <Text style={styles.title}>Vote agora!</Text>
          <Text style={styles.subTitle}>
            Nos diga qual é seu jogo favorito!
          </Text>
        </View>
        <View style={styles.footer}>
          <RectButton style={styles.button} onPress={handleOnPress}>
            <Text style={styles.buttonText}>COLETAR DADOS</Text>
            <View style={styles.buttonIcon}>
              <Text>
                <Icon name="chevron-right" color="#FFF" size={25} />
              </Text>
            </View>
          </RectButton>
        </View>
      </>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "15%",
    backgroundColor: "#0B1F34",
    alignItems: "center",
  },
  gamerImage: {
    width: 309,
    height: 288,
  },
  title: {
    color: "#00D4FF",
    fontSize: 36,
    fontWeight: "bold",
    marginTop: 31,
    fontFamily: "Play_700Bold",
  },
  subTitle: {
    color: "#ED7947",
    fontSize: 21,
    marginTop: 15,
    fontFamily: "Play_400Regular",
  },
  footer: {
    marginTop: "15%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#00D4FF",
    flexDirection: "row",
    borderRadius: 10,
  },
  buttonIcon: {
    backgroundColor: "#ED7947",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  buttonText: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 50,
    paddingRight: 50,
    fontFamily: "Play_700Bold",
    fontWeight: "bold",
    fontSize: 18,
    color: "#0B1F34",
  },
});

export default Home;
