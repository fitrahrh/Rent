import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const PilihKota = () => {
  return (
    <View style={styles.pilihKota}>
      <View style={styles.pilihKota1}>
        <Text style={[styles.badung, styles.badungTypo]}>Badung</Text>
        <Text style={[styles.bangli, styles.bangliPosition]}>Bangli</Text>
        <Text style={[styles.buleleng, styles.badungTypo]}>Buleleng</Text>
        <Text style={[styles.gianyar, styles.badungTypo]}>Gianyar</Text>
        <Text style={[styles.jembrana, styles.jembranaTypo]}>Jembrana</Text>
        <Text style={[styles.karangasem, styles.badungTypo]}>karangasem</Text>
        <Text style={[styles.klungkung, styles.jembranaTypo]}>Klungkung</Text>
        <Text style={[styles.tabanan, styles.badungTypo]}>Tabanan</Text>
        <Text style={styles.denpasar}>Denpasar</Text>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector7.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector7.png")}
        />
        <Image
          style={[styles.vectorIcon2, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector7.png")}
        />
        <Image
          style={[styles.vectorIcon3, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector7.png")}
        />
        <Image
          style={[styles.vectorIcon4, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector7.png")}
        />
        <Image
          style={[styles.vectorIcon5, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector7.png")}
        />
        <Image
          style={[styles.vectorIcon6, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector8.png")}
        />
        <Image
          style={[styles.vectorIcon7, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector8.png")}
        />
        <Image
          style={[styles.vectorIcon8, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector9.png")}
        />
        <Image
          style={[styles.vectorIcon9, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector10.png")}
        />
        <Text style={styles.chooseYourCity}>Choose your city</Text>
      </View>
      <View style={[styles.barBawah, styles.barBawahLayout]}>
        <View style={[styles.indicator, styles.indicatorPosition]} />
      </View>
      <Image
        style={[styles.panahKiriIcon, styles.bangliPosition]}
        contentFit="cover"
        source={require("../assets/panah-kiri1.png")}
      />
      <Pressable style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={styles.ok}>Ok</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  badungTypo: {
    height: 23,
    color: Color.colorGray_400,
    fontSize: FontSize.size_sm,
    left: 25,
    textAlign: "left",
    fontFamily: FontFamily.lato,
  },
  bangliPosition: {
    top: 86,
    position: "absolute",
  },
  jembranaTypo: {
    width: 81,
    height: 23,
    textAlign: "left",
    color: Color.colorGray_400,
    fontFamily: FontFamily.lato,
    fontSize: FontSize.size_sm,
    left: 25,
    position: "absolute",
  },
  vectorIconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout: {
    height: "4.97%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    right: "88.31%",
    width: "11.69%",
    position: "absolute",
    overflow: "hidden",
  },
  barBawahLayout: {
    height: 5,
    width: 134,
    position: "absolute",
  },
  indicatorPosition: {
    backgroundColor: Color.colorBlack,
    left: 0,
    top: 0,
  },
  groupChildLayout: {
    height: 45,
    width: 130,
    position: "absolute",
  },
  badung: {
    top: 54,
    width: 60,
    position: "absolute",
  },
  bangli: {
    width: 48,
    height: 23,
    color: Color.colorGray_400,
    fontSize: FontSize.size_sm,
    left: 25,
    textAlign: "left",
    fontFamily: FontFamily.lato,
  },
  buleleng: {
    top: 122,
    width: 66,
    position: "absolute",
  },
  gianyar: {
    top: 158,
    width: 61,
    position: "absolute",
  },
  jembrana: {
    top: 195,
  },
  karangasem: {
    top: 231,
    width: 98,
    position: "absolute",
  },
  klungkung: {
    top: 267,
  },
  tabanan: {
    top: 303,
    width: 70,
    position: "absolute",
  },
  denpasar: {
    top: 339,
    width: 75,
    color: Color.colorBlack,
    height: 23,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    fontSize: FontSize.size_sm,
    left: 25,
    position: "absolute",
  },
  vectorIcon: {
    top: "14.92%",
    bottom: "80.39%",
    left: "0%",
    right: "88.31%",
    width: "11.69%",
    height: "4.7%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vectorIcon1: {
    top: "23.76%",
    bottom: "71.55%",
    left: "0%",
    right: "88.31%",
    width: "11.69%",
    height: "4.7%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vectorIcon2: {
    top: "33.7%",
    bottom: "61.6%",
    left: "0%",
    right: "88.31%",
    width: "11.69%",
    height: "4.7%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vectorIcon3: {
    top: "43.65%",
    bottom: "51.66%",
    left: "0%",
    right: "88.31%",
    width: "11.69%",
    height: "4.7%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vectorIcon4: {
    top: "53.59%",
    bottom: "41.71%",
    left: "0%",
    right: "88.31%",
    width: "11.69%",
    height: "4.7%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vectorIcon5: {
    top: "63.54%",
    bottom: "31.77%",
    left: "0%",
    right: "88.31%",
    width: "11.69%",
    height: "4.7%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vectorIcon6: {
    top: "73.48%",
    bottom: "21.55%",
  },
  vectorIcon7: {
    top: "83.43%",
    bottom: "11.6%",
  },
  vectorIcon8: {
    top: "93.65%",
    bottom: "1.66%",
    left: "0%",
    right: "88.31%",
    width: "11.69%",
    height: "4.7%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vectorIcon9: {
    height: "3.04%",
    width: "6.49%",
    top: "94.48%",
    right: "90.91%",
    bottom: "2.49%",
    left: "2.6%",
  },
  chooseYourCity: {
    left: 45,
    fontWeight: "500",
    width: 109,
    height: 16,
    top: 0,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  pilihKota1: {
    top: 143,
    left: 138,
    width: 154,
    height: 362,
    position: "absolute",
  },
  indicator: {
    borderRadius: Border.br_8xs,
    height: 5,
    width: 134,
    position: "absolute",
  },
  barBawah: {
    top: 914,
    left: 148,
  },
  panahKiriIcon: {
    left: 39,
    borderRadius: Border.br_mid,
    width: 40,
    height: 25,
  },
  groupChild: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorBlack,
    left: 0,
    top: 0,
  },
  ok: {
    top: 12,
    left: 51,
    fontSize: FontSize.size_mid_2,
    fontWeight: "600",
    color: Color.colorWhite,
    width: 27,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    position: "absolute",
  },
  rectangleParent: {
    top: 528,
    left: 250,
  },
  pilihKota: {
    backgroundColor: "#fffdfc",
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default PilihKota;
