import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View, TextInput } from "react-native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";
import { useNavigation } from '@react-navigation/native';

const Masuk = () => {
  const navigation = useNavigation();

  const handleSignIn = () => {
    // You can add any logic here before navigating
    // For now, let's navigate to 'HalamanAwal'
    navigation.navigate('HalamanAwal');
  };

  return (
    <View style={styles.masuk}>
      <Image
        style={styles.logoIcon}
        contentFit="cover"
        source={require("../assets/logo.png")}
      />
      <View style={styles.usernameDanPassword}>
        <Image
          style={[styles.usernameDanPasswordChild, styles.usernameLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-1.png")}
        />
        <View style={[styles.customer, styles.ownerLayout]}>
          <Pressable style={[styles.customer1, styles.owner1Position]} />
          <Text style={[styles.customer2, styles.owner2Typo]}>Customer</Text>
        </View>
        <Pressable style={[styles.owner, styles.ownerLayout]}>
          <View style={[styles.owner1, styles.owner1Position]} />
          <Text style={[styles.owner2, styles.owner2Typo]}>Owner</Text>
        </Pressable>
        <TextInput
          style={[styles.username, styles.passwordTypo]}
          placeholder="Username"
          placeholderTextColor="#000"
        />
        <Image
          style={[styles.groupIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group.png")}
        />
        <Image
          style={[styles.usernameDanPasswordItem, styles.usernameLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-1.png")}
        />
        <TextInput
          style={[styles.password, styles.passwordTypo]}
          placeholder="Password"
          placeholderTextColor="#000"
          secureTextEntry={true}r
        />
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Text style={[styles.forgotYourPassword, styles.passwordTypo]}>
          Forgot your password?
        </Text>
        <Text style={[styles.signIn, styles.signInClr]}>Sign in</Text>

        <Pressable onPress={handleSignIn}>
        <Text style={[styles.signIn, styles.signInClr]}>Sign in</Text>
        </Pressable>
        <Text style={[styles.dontHaveAnContainer, styles.signInClr]}>
          {`Don’t have an account? `}
          <Text style={styles.signUp}>Sign Up</Text>
        </Text>
      </View>
      <Image
        style={styles.panahKananIcon}
        contentFit="cover"
        source={require("../assets/panah-kanan.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  usernameLayout: {
    height: 50,
    width: 300,
    left: 3,
    position: "absolute",
  },
  ownerLayout: {
    height: 36,
    width: 110,
    top: 0,
    position: "absolute",
  },
  owner1Position: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Border.br_5xs,
    left: 0,
    width: 110,
    top: 0,
    position: "absolute",
  },
  owner2Typo: {
    fontFamily: FontFamily.lato,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    position: "absolute",
  },
  passwordTypo: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.lato,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "6.6%",
    position: "absolute",
    overflow: "hidden",
  },
  signInClr: {
    color: Color.colorGray_200,
    fontFamily: FontFamily.lato,
    position: "absolute",
  },
  logoIcon: {
    top: 87,
    left: 66,
    borderRadius: Border.br_142xl,
    width: 307,
    height: 208,
    position: "absolute",
  },
  usernameDanPasswordChild: {
    top: 66,
  },
  customer1: {
    backgroundColor: Color.colorWhite,
    justifyContent: "center",
    borderRadius: Border.br_5xs,
  },
  customer2: {
    top: 8,
    left: 24,
    color: "#323334",
    textAlign: "center",
  },
  customer: {
    left: 167,
  },
  owner1: {
    backgroundColor: Color.colorBlack,
  },
  owner2: {
    top: 7,
    left: 33,
    color: Color.colorWhite,
    textAlign: "center",
  },
  owner: {
    left: 43,
  },
  username: {
    top: 82,
    left: 52,
    fontSize: FontSize.size_mini,
  },
  groupIcon: {
    height: "5.13%",
    width: "4.69%",
    top: "23.36%",
    right: "88.71%",
    bottom: "71.51%",
  },
  usernameDanPasswordItem: {
    top: 138,
  },
  password: {
    top: 155,
    left: 52,
    fontSize: FontSize.size_mini,
  },
  vectorIcon: {
    height: "4.99%",
    width: "4.62%",
    top: "44.16%",
    right: "88.78%",
    bottom: "50.85%",
  },
  forgotYourPassword: {
    top: 208,
    left: 133,
    color: Color.colorBlack,
    width: 162,
    height: 18,
    textAlign: "left",
  },
  signIn: {
    top: 252,
    left: 173,
    fontSize: 25,
    fontWeight: "700",
    width: 77,
    height: 29,
    textAlign: "left",
  },
  dontHaveAnContainer: {
    top: 318,
    fontSize: FontSize.size_xl,
    width: 286,
    height: 33,
    textAlign: "center",
    left: 0,
    color: Color.colorGray_200,
  },
  usernameDanPassword: {
    top: 355,
    left: 70,
    width: 303,
    height: 351,
    position: "absolute",
  },
  panahKananIcon: {
    top: 611,
    left: 333,
    borderRadius: Border.br_mid,
    width: 40,
    height: 25,
    position: "absolute",
  },
  masuk: {
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Masuk;
