import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const TampilanAwal = () => {
  return (
    <View style={styles.tampilanAwal}>
      <Image
        style={styles.logoIcon}
        contentFit="cover"
        source={require("../assets/logo.png")}
      />
      <View style={[styles.barBawah, styles.barBawahLayout]}>
        <View style={[styles.indicator, styles.barBawahLayout]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  barBawahLayout: {
    height: 5,
    width: 134,
    position: "absolute",
  },
  logoIcon: {
    top: 316,
    left: 62,
    borderRadius: Border.br_142xl,
    width: 307,
    height: 208,
    position: "absolute",
  },
  indicator: {
    top: 0,
    left: 0,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorBlack,
  },
  barBawah: {
    top: 914,
    left: 148,
  },
  tampilanAwal: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default TampilanAwal;
