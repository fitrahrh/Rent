import * as React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const Profile = () => {
  return (
    <View style={styles.profile}>
      <Image
        style={styles.screenshot20231128185738RIcon}
        contentFit="cover"
        source={require("../assets/screenshot-20231128-185738removebgpreview-1.png")}
      />
      <Text
        style={[styles.completeYourProfile, styles.saveTypo]}
      >{`Complete Your Profile `}</Text>
      <View style={[styles.profileInner, styles.eMailParentShadowBox]}>
        <View style={styles.profileParent}>
          <Image
            style={[styles.profileIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/profile.png")}
          />
          <TextInput
            style={[styles.username, styles.eMailTypo]}
            placeholder="Username"
            placeholderTextColor="#fff"
          />
        </View>
      </View>
      <View style={[styles.eMailParent, styles.eMailParentShadowBox]}>
        <TextInput
          style={[styles.eMail, styles.eMailTypo]}
          placeholder="E-Mail"
          placeholderTextColor="#fff"
        />
        <Image
          style={[styles.emailIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/email.png")}
        />
      </View>
      <Pressable style={styles.input}>
        <Text style={[styles.save, styles.saveTypo]}>Save</Text>
      </Pressable>
      <Image
        style={styles.panahKiriIcon}
        contentFit="cover"
        source={require("../assets/panah-kiri1.png")}
      />
      <View style={[styles.barBawah, styles.barBawahLayout]}>
        <View style={[styles.indicator, styles.barBawahLayout]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  saveTypo: {
    textAlign: "left",
    fontFamily: FontFamily.lato,
    left: "50%",
    position: "absolute",
  },
  eMailParentShadowBox: {
    height: 50,
    width: 300,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_21xl,
    left: 65,
    backgroundColor: Color.colorBlack,
    position: "absolute",
  },
  iconLayout: {
    height: 15,
    position: "absolute",
    overflow: "hidden",
  },
  eMailTypo: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.lato,
    position: "absolute",
  },
  barBawahLayout: {
    height: 5,
    width: 134,
    position: "absolute",
  },
  screenshot20231128185738RIcon: {
    top: 205,
    left: 119,
    width: 193,
    height: 204,
    position: "absolute",
  },
  completeYourProfile: {
    marginLeft: -150,
    top: 155,
    fontSize: FontSize.size_11xl,
    fontWeight: "700",
    color: Color.colorGray_300,
    width: 301,
    height: 36,
  },
  profileIcon: {
    top: 6,
    width: 20,
    left: 0,
  },
  username: {
    top: 3,
    left: 27,
  },
  profileParent: {
    top: 13,
    left: 14,
    width: 143,
    height: 24,
    position: "absolute",
  },
  profileInner: {
    top: 456,
  },
  eMail: {
    top: 15,
    left: 41,
  },
  emailIcon: {
    top: 18,
    left: 15,
    width: 19,
  },
  eMailParent: {
    top: 539,
  },
  save: {
    height: "40.71%",
    marginLeft: -21,
    top: "24.52%",
    fontSize: FontSize.size_lg,
    fontWeight: "600",
    color: Color.colorWhite,
    width: 45,
  },
  input: {
    height: "4.51%",
    width: "25.12%",
    top: "68.24%",
    right: "15.12%",
    bottom: "27.25%",
    left: "59.77%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorBlack,
    position: "absolute",
  },
  panahKiriIcon: {
    top: 86,
    left: 30,
    borderRadius: Border.br_mid,
    width: 40,
    height: 25,
    position: "absolute",
  },
  indicator: {
    top: 0,
    borderRadius: Border.br_8xs,
    left: 0,
    backgroundColor: Color.colorBlack,
  },
  barBawah: {
    top: 914,
    left: 148,
  },
  profile: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default Profile;
