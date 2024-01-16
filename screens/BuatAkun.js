import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";

const BuatAkun = () => {
  return (
    <View style={styles.buatAkun}>
      <View style={[styles.frame, styles.frameLayout1]}>
        <View style={[styles.frameInner, styles.frameLayout]}>
          <View style={styles.profileParent}>
            <Image
              style={[styles.profileIcon, styles.profileIconLayout]}
              contentFit="cover"
              source={require("../assets/profile1.png")}
            />
            <RNPTextInput
              style={styles.username}
              placeholder="Username"
              mode="flat"
              placeholderTextColor="#000"
              theme={{
                fonts: {
                  regular: { fontFamily: "Lato", fontWeight: "Regular" },
                },
                colors: { text: "#000" },
              }}
            />
          </View>
        </View>
      </View>
      <View style={[styles.frame1, styles.frameLayout1]}>
        <View style={[styles.vectorParent, styles.frameLayout]}>
          <Image
            style={[styles.vectorIcon, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
          <RNPTextInput
            style={styles.password}
            mode="outlined"
            placeholderTextColor="#000"
            theme={{
              fonts: { regular: { fontFamily: "Lato", fontWeight: "Regular" } },
              colors: { text: "#000" },
            }}
          />
        </View>
      </View>
      <View style={styles.frame2}>
        <Text style={styles.orCreateAccount}>
          Or create account using social media
        </Text>
      </View>
      <View style={[styles.frame3, styles.frame3Layout]}>
        <View style={[styles.facebookParent, styles.frame3Layout]}>
          <Image
            style={styles.facebookIcon}
            contentFit="cover"
            source={require("../assets/facebook.png")}
          />
          <View style={[styles.twitter, styles.twitterPosition]}>
            <Image
              style={styles.vectorIcon1}
              contentFit="cover"
              source={require("../assets/vector1.png")}
            />
            <Image
              style={[styles.vectorIcon2, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector2.png")}
            />
          </View>
          <Image
            style={[styles.googleIcon, styles.twitterPosition]}
            contentFit="cover"
            source={require("../assets/google.png")}
          />
        </View>
      </View>
      <View style={[styles.frame4, styles.frameLayout1]}>
        <View style={[styles.frame5, styles.frameLayout]}>
          <View style={[styles.phoneNumberWrapper, styles.indicatorPosition]}>
            <TextInput
              style={styles.phoneNumber}
              placeholder="Phone Number"
              placeholderTextColor="#000"
            />
          </View>
          <Image
            style={[styles.iconoutlinephone, styles.profileIconLayout]}
            contentFit="cover"
            source={require("../assets/iconoutlinephone.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.panahKiriIcon, styles.panahIconLayout]}
        contentFit="cover"
        source={require("../assets/panah-kiri1.png")}
      />
      <Pressable style={styles.frame6}>
        <Text style={[styles.create, styles.createTypo]}>Create</Text>
        <Image
          style={[styles.panahKananIcon, styles.panahIconLayout]}
          contentFit="cover"
          source={require("../assets/panah-kanan.png")}
        />
      </Pressable>
      <View style={[styles.barBawah, styles.barBawahLayout]}>
        <View style={[styles.indicator, styles.barBawahLayout]} />
      </View>
      <Text style={[styles.createAccount, styles.createTypo]}>
        Create account
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout1: {
    height: 50,
    width: 310,
    left: 60,
    position: "absolute",
    overflow: "hidden",
  },
  frameLayout: {
    width: 300,
    height: 50,
    position: "absolute",
  },
  profileIconLayout: {
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  frame3Layout: {
    height: 52,
    position: "absolute",
  },
  twitterPosition: {
    bottom: "-5.77%",
    width: "25.94%",
    height: "105.77%",
    top: "0%",
    position: "absolute",
  },
  indicatorPosition: {
    left: 0,
    top: 0,
  },
  panahIconLayout: {
    height: 25,
    width: 40,
    borderRadius: Border.br_mid,
    position: "absolute",
  },
  createTypo: {
    fontWeight: "700",
    fontSize: FontSize.size_11xl,
    textAlign: "center",
    color: Color.colorGray_200,
    fontFamily: FontFamily.lato,
    position: "absolute",
  },
  barBawahLayout: {
    height: 5,
    width: 134,
    position: "absolute",
  },
  profileIcon: {
    left: 0,
    top: 0,
  },
  username: {
    top: 3,
    left: 27,
    position: "absolute",
  },
  profileParent: {
    left: 14,
    width: 143,
    height: 24,
    top: 13,
    position: "absolute",
  },
  frameInner: {
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorBisque,
    borderRadius: Border.br_21xl,
    width: 300,
    left: 10,
    top: 0,
  },
  frame: {
    top: 240,
  },
  vectorIcon: {
    height: "35%",
    width: "4.67%",
    top: "28%",
    right: "89.33%",
    bottom: "37%",
    left: "6%",
    position: "absolute",
  },
  password: {
    top: 14,
    left: 41,
    position: "absolute",
  },
  vectorParent: {
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorBisque,
    borderRadius: Border.br_21xl,
    width: 300,
    left: 10,
    top: 0,
  },
  frame1: {
    top: 332,
  },
  orCreateAccount: {
    left: 11,
    fontSize: FontSize.size_base,
    fontWeight: "500",
    width: 339,
    textAlign: "center",
    color: Color.colorGray_200,
    fontFamily: FontFamily.lato,
    height: 32,
    top: 0,
    position: "absolute",
  },
  frame2: {
    top: 574,
    left: 48,
    width: 350,
    height: 32,
    position: "absolute",
    overflow: "hidden",
  },
  facebookIcon: {
    left: -12,
    width: 55,
    height: 55,
    top: 0,
    position: "absolute",
  },
  vectorIcon1: {
    height: "100%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  vectorIcon2: {
    height: "47.27%",
    width: "58.18%",
    top: "30.36%",
    right: "19.45%",
    bottom: "22.36%",
    left: "22.36%",
    position: "absolute",
  },
  twitter: {
    right: "41.18%",
    left: "32.88%",
  },
  googleIcon: {
    right: "2.74%",
    left: "71.32%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  facebookParent: {
    width: 212,
    left: 30,
    top: 0,
  },
  frame3: {
    top: 603,
    left: 105,
    width: 242,
    overflow: "hidden",
  },
  phoneNumber: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.lato,
    left: 41,
    top: 13,
    position: "absolute",
  },
  phoneNumberWrapper: {
    width: 300,
    height: 50,
    position: "absolute",
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorBisque,
    borderRadius: Border.br_21xl,
  },
  iconoutlinephone: {
    left: 13,
    top: 13,
    width: 24,
  },
  frame5: {
    left: 10,
    top: 0,
    overflow: "hidden",
  },
  frame4: {
    top: 424,
  },
  panahKiriIcon: {
    top: 86,
    left: 30,
  },
  create: {
    left: 63,
    width: 90,
    height: 33,
    top: 0,
  },
  panahKananIcon: {
    top: 8,
    left: 162,
  },
  frame6: {
    top: 520,
    left: 149,
    width: 202,
    height: 41,
    position: "absolute",
    overflow: "hidden",
  },
  indicator: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorBlack,
    left: 0,
    top: 0,
  },
  barBawah: {
    top: 914,
    left: 148,
  },
  createAccount: {
    top: 167,
    left: 70,
    width: 206,
    height: 41,
  },
  buatAkun: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default BuatAkun;
