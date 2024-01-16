import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PilihProvinsi = () => {
  return (
    <View style={styles.pilihProvinsi}>
      <View style={styles.provinsi}>
        <Text style={[styles.save, styles.saveTypo]}>SAVE</Text>
        <Text style={[styles.aceh, styles.acehTypo]}>Aceh</Text>
        <Text style={[styles.sumatraUtara, styles.acehTypo]}>
          Sumatra Utara
        </Text>
        <Text style={[styles.riau, styles.riauTypo]}>Riau</Text>
        <Text style={[styles.kepulauanRiau, styles.riauTypo]}>
          Kepulauan Riau
        </Text>
        <Text style={[styles.jambi, styles.riauTypo]}>Jambi</Text>
        <Text style={styles.sumatraSelatan}>Sumatra Selatan</Text>
        <Text style={[styles.sumatraBarat, styles.riauTypo]}>
          Sumatra Barat
        </Text>
        <Text style={[styles.kepulauanBangkaBelitung, styles.riauTypo]}>
          Kepulauan Bangka Belitung
        </Text>
        <Text style={[styles.bengkulu, styles.acehTypo]}>Bengkulu</Text>
        <Text style={[styles.lampung, styles.acehTypo]}>Lampung</Text>
        <Text style={[styles.jakarta, styles.riauTypo]}>Jakarta</Text>
        <Text style={[styles.banten, styles.riauTypo]}>Banten</Text>
        <Text style={[styles.jawaBarat, styles.riauTypo]}>Jawa Barat</Text>
        <Text style={[styles.jawaTengah, styles.riauTypo]}>Jawa Tengah</Text>
        <Text style={[styles.yogyakarta, styles.riauTypo]}>Yogyakarta</Text>
        <Text style={[styles.jawaTimur, styles.riauTypo]}>Jawa Timur</Text>
        <Text style={styles.bali}>Bali</Text>
        <Text style={[styles.nusaTenggaraBarat, styles.acehTypo]}>
          Nusa Tenggara Barat
        </Text>
        <Text style={[styles.nusaTenggaraTimur, styles.riauTypo]}>
          Nusa Tenggara Timur
        </Text>
        <Image
          style={[styles.carbonradioButtonIcon, styles.carbonradioIconLayout1]}
          contentFit="cover"
          source={require("../assets/carbonradiobutton.png")}
        />
        <Image
          style={[styles.carbonradioButtonIcon1, styles.carbonradioIconLayout1]}
          contentFit="cover"
          source={require("../assets/carbonradiobutton.png")}
        />
        <Image
          style={[styles.carbonradioButtonIcon2, styles.carbonradioIconLayout1]}
          contentFit="cover"
          source={require("../assets/carbonradiobutton.png")}
        />
        <Image
          style={[styles.carbonradioButtonIcon3, styles.carbonradioIconLayout1]}
          contentFit="cover"
          source={require("../assets/carbonradiobutton.png")}
        />
        <Image
          style={[styles.carbonradioButtonIcon4, styles.carbonradioIconLayout]}
          contentFit="cover"
          source={require("../assets/carbonradiobutton1.png")}
        />
        <Image
          style={[styles.carbonradioButtonIcon5, styles.carbonradioIconLayout1]}
          contentFit="cover"
          source={require("../assets/carbonradiobutton.png")}
        />
        <Image
          style={[styles.carbonradioButtonIcon6, styles.carbonradioIconLayout]}
          contentFit="cover"
          source={require("../assets/carbonradiobutton1.png")}
        />
        <Image
          style={[styles.carbonradioButtonIcon7, styles.carbonradioIconLayout1]}
          contentFit="cover"
          source={require("../assets/carbonradiobutton.png")}
        />
        <Image
          style={[styles.carbonradioButtonIcon8, styles.carbonradioIconLayout1]}
          contentFit="cover"
          source={require("../assets/carbonradiobutton.png")}
        />
        <Image
          style={[styles.carbonradioButtonIcon9, styles.carbonradioIconLayout1]}
          contentFit="cover"
          source={require("../assets/carbonradiobutton.png")}
        />
        <Image
          style={[
            styles.carbonradioButtonIcon10,
            styles.carbonradioIconLayout1,
          ]}
          contentFit="cover"
          source={require("../assets/carbonradiobutton.png")}
        />
        <Image
          style={[styles.carbonradioButtonIcon11, styles.carbonradioIconLayout]}
          contentFit="cover"
          source={require("../assets/carbonradiobutton1.png")}
        />
        <Image
          style={[
            styles.carbonradioButtonIcon12,
            styles.carbonradioIconLayout1,
          ]}
          contentFit="cover"
          source={require("../assets/carbonradiobutton.png")}
        />
        <Image
          style={[styles.carbonradioButtonIcon13, styles.carbonradioIconLayout]}
          contentFit="cover"
          source={require("../assets/carbonradiobutton1.png")}
        />
        <Image
          style={[
            styles.carbonradioButtonIcon14,
            styles.carbonradioIconLayout1,
          ]}
          contentFit="cover"
          source={require("../assets/carbonradiobutton.png")}
        />
        <Image
          style={[
            styles.carbonradioButtonIcon15,
            styles.carbonradioIconLayout1,
          ]}
          contentFit="cover"
          source={require("../assets/carbonradiobutton.png")}
        />
        <Image
          style={[
            styles.carbonradioButtonCheckedIcon,
            styles.carbonradioIconLayout1,
          ]}
          contentFit="cover"
          source={require("../assets/carbonradiobuttonchecked.png")}
        />
        <Image
          style={[
            styles.carbonradioButtonIcon16,
            styles.carbonradioIconLayout1,
          ]}
          contentFit="cover"
          source={require("../assets/carbonradiobutton.png")}
        />
        <Image
          style={[
            styles.carbonradioButtonIcon17,
            styles.carbonradioIconLayout1,
          ]}
          contentFit="cover"
          source={require("../assets/carbonradiobutton.png")}
        />
        <Text style={styles.chooseYourProvince}>Choose your province</Text>
      </View>
      <Image
        style={styles.panahKiriIcon}
        contentFit="cover"
        source={require("../assets/panah-kiri1.png")}
      />
      <Pressable style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.indicatorPosition]} />
        <Text style={[styles.next, styles.saveTypo]}>Next</Text>
      </Pressable>
      <View style={[styles.barBawah, styles.barBawahLayout]}>
        <View style={[styles.indicator, styles.barBawahLayout]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  saveTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.lato,
    fontWeight: "600",
    position: "absolute",
  },
  acehTypo: {
    height: 24,
    color: Color.colorGray_400,
    left: 25,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  riauTypo: {
    height: 23,
    color: Color.colorGray_400,
    left: 25,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  carbonradioIconLayout1: {
    height: 20,
    width: 19,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  carbonradioIconLayout: {
    height: 19,
    width: 19,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  groupChildLayout: {
    height: 45,
    width: 130,
    position: "absolute",
  },
  indicatorPosition: {
    backgroundColor: Color.colorBlack,
    top: 0,
    left: 0,
  },
  barBawahLayout: {
    height: 5,
    width: 134,
    position: "absolute",
  },
  save: {
    top: 604,
    left: 153,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.lato,
    fontWeight: "600",
  },
  aceh: {
    width: 39,
    top: 38,
  },
  sumatraUtara: {
    top: 74,
    width: 114,
  },
  riau: {
    top: 147,
    width: 34,
  },
  kepulauanRiau: {
    top: 184,
    width: 120,
  },
  jambi: {
    top: 220,
    width: 50,
  },
  sumatraSelatan: {
    width: 130,
    top: 256,
    height: 23,
    color: Color.colorGray_400,
    left: 25,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  sumatraBarat: {
    top: 111,
    width: 113,
  },
  kepulauanBangkaBelitung: {
    top: 293,
    width: 212,
  },
  bengkulu: {
    width: 72,
    top: 328,
  },
  lampung: {
    top: 365,
    width: 74,
  },
  jakarta: {
    top: 401,
    width: 59,
  },
  banten: {
    top: 438,
    width: 55,
  },
  jawaBarat: {
    top: 474,
    width: 88,
  },
  jawaTengah: {
    width: 105,
    top: 510,
  },
  yogyakarta: {
    top: 547,
    width: 89,
  },
  jawaTimur: {
    top: 583,
    width: 90,
  },
  bali: {
    width: 28,
    color: Color.colorBlack,
    top: 619,
    height: 24,
    left: 25,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  nusaTenggaraBarat: {
    top: 655,
    width: 165,
  },
  nusaTenggaraTimur: {
    top: 692,
    width: 166,
  },
  carbonradioButtonIcon: {
    top: 38,
  },
  carbonradioButtonIcon1: {
    top: 73,
  },
  carbonradioButtonIcon2: {
    top: 110,
  },
  carbonradioButtonIcon3: {
    top: 146,
  },
  carbonradioButtonIcon4: {
    top: 183,
  },
  carbonradioButtonIcon5: {
    top: 219,
  },
  carbonradioButtonIcon6: {
    top: 256,
    height: 19,
  },
  carbonradioButtonIcon7: {
    top: 292,
  },
  carbonradioButtonIcon8: {
    top: 328,
  },
  carbonradioButtonIcon9: {
    top: 364,
  },
  carbonradioButtonIcon10: {
    top: 400,
  },
  carbonradioButtonIcon11: {
    top: 437,
  },
  carbonradioButtonIcon12: {
    top: 473,
  },
  carbonradioButtonIcon13: {
    top: 510,
  },
  carbonradioButtonIcon14: {
    top: 546,
  },
  carbonradioButtonIcon15: {
    top: 582,
  },
  carbonradioButtonCheckedIcon: {
    top: 619,
    width: 19,
    left: 0,
  },
  carbonradioButtonIcon16: {
    top: 654,
  },
  carbonradioButtonIcon17: {
    top: 691,
  },
  chooseYourProvince: {
    left: 45,
    fontWeight: "500",
    width: 137,
    height: 16,
    top: 0,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  provinsi: {
    top: 143,
    left: 97,
    width: 237,
    height: 715,
    position: "absolute",
  },
  panahKiriIcon: {
    top: 86,
    left: 39,
    borderRadius: Border.br_mid,
    width: 40,
    height: 25,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_6xl,
    height: 45,
    width: 130,
    position: "absolute",
  },
  next: {
    top: 12,
    left: 46,
    fontSize: FontSize.size_mid_2,
    width: 38,
  },
  rectangleParent: {
    top: 813,
    left: 269,
  },
  indicator: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorBlack,
    top: 0,
    left: 0,
  },
  barBawah: {
    top: 914,
    left: 148,
  },
  pilihProvinsi: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default PilihProvinsi;
