import * as React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";


const DetailProduk = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.detailProduk}>
      <Pressable onPress={() => navigation.goBack()}>
        <Image
          style={styles.panahKiriIcon}
          contentFit="cover"
          source={require("../assets/panah-kiri.png")}
        />
      </Pressable>
      <Image
        style={[styles.bajuHitamIcon, styles.frame1Position]}
        contentFit="cover"
        source={require("../assets/baju-hitam.png")}
      />
      <Text style={styles.graduation01}>Graduation 01</Text>
      <View style={styles.detailProdukChild} />
      <Text style={styles.text}>1/5</Text>
      <Text style={styles.idr200000}>IDR 200.000</Text>
      <Text style={[styles.off, styles.offTypo]}>20% OFF</Text>
      <Text style={[styles.idr250000, styles.offTypo1]}>IDR 250.000</Text>
      <Text style={[styles.size, styles.sizeTypo]}>{`SIZE `}</Text>
      <Text style={styles.itemsLeft}>9 items left</Text>
      <View style={[styles.frame, styles.frameFlexBox1]}>
        <Pressable style={[styles.xsWrapper, styles.wrapperBorder]}>
          <Text style={[styles.xs, styles.sTypo]}>XS</Text>
        </Pressable>
        <Pressable style={[styles.sWrapper, styles.wrapperBorder]}>
          <Text style={[styles.s, styles.sTypo]}>S</Text>
        </Pressable>
        <Pressable style={[styles.mWrapper, styles.wrapperBorder]}>
          <Text style={[styles.xs, styles.sTypo]}>M</Text>
        </Pressable>
        <Pressable style={[styles.lWrapper, styles.wrapperBorder]}>
          <Text style={[styles.xs, styles.sTypo]}>L</Text>
        </Pressable>
        <Pressable style={[styles.xlWrapper, styles.wrapperBorder]}>
          <Text style={[styles.xs, styles.sTypo]}>XL</Text>
        </Pressable>
        <Pressable style={[styles.xxlWrapper, styles.wrapperBorder]}>
          <Text style={[styles.xs, styles.sTypo]}>XXL</Text>
        </Pressable>
      </View>
      <View style={[styles.frame1, styles.frameFlexBox]}>
        <Text style={styles.sizeTypo}>RENT</Text>
      </View>
      <View style={[styles.frame2, styles.frameFlexBox]}>
        <View style={[styles.frame3, styles.frameLayout1]}>
          <View style={styles.frameLayout}>
            <Pressable style={[styles.dayWrapper, styles.wrapperBorder]}>
              <Text style={[styles.day, styles.sTypo]}>1 DAY</Text>
            </Pressable>
            <Pressable style={[styles.dayContainer, styles.dayLayout]}>
              <Text style={[styles.xs, styles.sTypo]}>2 DAY</Text>
            </Pressable>
          </View>
          <View style={[styles.frame5, styles.frameLayout]}>
            <Pressable style={styles.dayLayout}>
              <Text style={[styles.xs, styles.sTypo]}>3 DAY</Text>
            </Pressable>
            <Pressable style={[styles.framePressable, styles.dayWrapperLayout]}>
              <Text style={[styles.xs, styles.sTypo]}>4 DAY</Text>
            </Pressable>
          </View>
          <View style={[styles.frame6, styles.frameLayout1]}>
            <Pressable style={styles.dayWrapperLayout}>
              <Text style={[styles.xs, styles.sTypo]}>5 DAY</Text>
            </Pressable>
            <Pressable style={[styles.dayWrapper2, styles.dayWrapperLayout]}>
              <Text style={[styles.xs, styles.sTypo]}>6 DAY</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={[styles.frame7, styles.frame7Position]}>
        <Text style={styles.sizeTypo}>DESCRIPTION</Text>
      </View>
      <Text style={[styles.readMore, styles.frame7Position]}>Read more</Text>
      <Image
        style={[styles.heart3Fill8Icon, styles.frameLayout1]}
        contentFit="cover"
        source={require("../assets/heart3fill-8.png")}
      />
      <View style={[styles.barBawah, styles.barBawahLayout]}>
        <View style={[styles.indicator, styles.indicatorPosition]} />
      </View>
      <Text
        style={[styles.pinggangElastisMemakai, styles.framePosition]}
      >{`- Pinggang Elastis memakai karet
- Elastisitas/Melar hingga 2-3 cm
- High Waist
- Resetling di belakang
- Nyaman dipakai....`}</Text>
      <Pressable
        style={[styles.rent1, styles.rentLayout]}
        onPress={() => navigation.navigate("CheckOut")} // Ganti "Checkout" dengan nama stack/halaman Checkout.js
      >
        <View style={[styles.rentChild, styles.rentLayout]} />
        <Text style={[styles.rentNow, styles.offTypo]}>Rent Now</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  frame1Position: {
    left: 18,
    position: "absolute",
  },
  offTypo: {
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  offTypo1: {
    top: 563,
    color: Color.colorRed_100,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppins,
  },
  sizeTypo: {
    color: Color.colorGray_400,
    fontSize: FontSize.size_smi,
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.lato,
  },
  frameFlexBox1: {
    flexDirection: "row",
    alignItems: "center",
  },
  wrapperBorder: {
    paddingVertical: Padding.p_8xs,
    justifyContent: "flex-end",
    borderWidth: 0.8,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    height: 33,
  },
  sTypo: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    textAlign: "left",
  },
  frameFlexBox: {
    justifyContent: "center",
    overflow: "hidden",
  },
  frameLayout1: {
    height: 34,
    overflow: "hidden",
  },
  dayLayout: {
    paddingHorizontal: Padding.p_9xs,
    alignItems: "flex-end",
    paddingVertical: Padding.p_8xs,
    justifyContent: "flex-end",
    width: 55,
    borderWidth: 0.8,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    height: 33,
  },
  frameLayout: {
    width: 129,
    flexDirection: "row",
    height: 33,
    alignItems: "center",
    overflow: "hidden",
  },
  dayWrapperLayout: {
    paddingHorizontal: Padding.p_10xs,
    alignItems: "flex-end",
    paddingVertical: Padding.p_8xs,
    justifyContent: "flex-end",
    width: 55,
    borderWidth: 0.8,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    height: 33,
  },
  frame7Position: {
    left: 17,
    position: "absolute",
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
  framePosition: {
    left: 15,
    position: "absolute",
  },
  rentLayout: {
    height: 45,
    width: 130,
    position: "absolute",
  },
  panahKiriIcon: {
    top: 86,
    borderRadius: Border.br_mid,
    width: 40,
    height: 25,
    left: 30,
    position: "absolute",
  },
  bajuHitamIcon: {
    top: 124,
    width: 391,
    height: 383,
  },
  graduation01: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    color: Color.baseDarkBlack,
    display: "flex",
    width: 115,
    height: 33,
    alignItems: "center",
    top: 540,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    left: 30,
    position: "absolute",
  },
  detailProdukChild: {
    top: 543,
    left: 145,
    borderRadius: 9,
    backgroundColor: "rgba(220, 220, 220, 0.97)",
    width: 70,
    height: 30,
    position: "absolute",
  },
  text: {
    top: 551,
    left: 166,
    fontSize: FontSize.size_sm,
    width: 27,
    height: 14,
    color: Color.colorBlack,
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.lato,
    position: "absolute",
  },
  idr200000: {
    left: 294,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppins,
    color: Color.colorBlack,
    textAlign: "left",
    top: 540,
    position: "absolute",
  },
  off: {
    left: 355,
    color: Color.colorRed_100,
    fontSize: FontSize.size_3xs,
    top: 563,
    fontFamily: FontFamily.poppins,
  },
  idr250000: {
    left: 295,
    textDecoration: "line-through",
    color: Color.colorRed_100,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  size: {
    top: 583,
    left: 33,
    position: "absolute",
  },
  itemsLeft: {
    top: 587,
    left: 337,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    position: "absolute",
  },
  xs: {
    color: Color.colorBlack,
  },
  xsWrapper: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_8xs,
    justifyContent: "flex-end",
    borderWidth: 0.8,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    alignItems: "center",
    width: 55,
  },
  s: {
    color: Color.colorRed_100,
  },
  sWrapper: {
    width: 46,
    marginLeft: 19,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_8xs,
    justifyContent: "flex-end",
    borderWidth: 0.8,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    alignItems: "center",
  },
  mWrapper: {
    width: 50,
    marginLeft: 19,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_8xs,
    justifyContent: "flex-end",
    borderWidth: 0.8,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    alignItems: "center",
  },
  lWrapper: {
    width: 43,
    marginLeft: 19,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_8xs,
    justifyContent: "flex-end",
    borderWidth: 0.8,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    alignItems: "center",
  },
  xlWrapper: {
    width: 53,
    marginLeft: 19,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_8xs,
    justifyContent: "flex-end",
    borderWidth: 0.8,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    alignItems: "center",
  },
  xxlWrapper: {
    width: 63,
    marginLeft: 19,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_8xs,
    justifyContent: "flex-end",
    borderWidth: 0.8,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    alignItems: "center",
  },
  frame: {
    top: 628,
    width: 405,
    left: 15,
    position: "absolute",
    height: 33,
    overflow: "hidden",
  },
  frame1: {
    top: 677,
    width: 394,
    left: 18,
    position: "absolute",
  },
  day: {
    color: "#ff0202",
  },
  dayWrapper: {
    paddingHorizontal: Padding.p_6xs,
    alignItems: "flex-end",
    paddingVertical: Padding.p_8xs,
    justifyContent: "flex-end",
    borderWidth: 0.8,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    width: 55,
  },
  dayContainer: {
    marginLeft: 19,
  },
  framePressable: {
    marginLeft: 19,
  },
  frame5: {
    marginLeft: 19,
  },
  dayWrapper2: {
    marginLeft: 15,
  },
  frame6: {
    width: 125,
    marginLeft: 19,
    flexDirection: "row",
    alignItems: "center",
  },
  frame3: {
    width: 421,
    flexDirection: "row",
    alignItems: "center",
  },
  frame2: {
    top: 711,
    left: -8,
    width: 446,
    alignItems: "flex-end",
    position: "absolute",
  },
  frame7: {
    top: 748,
    width: 396,
    justifyContent: "center",
    overflow: "hidden",
  },
  readMore: {
    top: 836,
    color: Color.colorRed_100,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.lato,
  },
  heart3Fill8Icon: {
    top: 541,
    left: 239,
    width: 39,
    position: "absolute",
  },
  indicator: {
    height: 5,
    width: 134,
    position: "absolute",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorBlack,
    left: 0,
    top: 0,
  },
  barBawah: {
    top: 914,
    left: 148,
  },
  pinggangElastisMemakai: {
    top: 763,
    fontSize: FontSize.size_xs,
    color: "#333",
    textAlign: "left",
    fontFamily: FontFamily.lato,
  },
  rentChild: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorBlack,
    left: 0,
    top: 0,
  },
  rentNow: {
    top: 12,
    left: 26,
    fontSize: FontSize.size_mid_2,
    color: Color.colorWhite,
    width: 78,
    fontFamily: FontFamily.lato,
  },
  rent1: {
    top: 820,
    left: 269,
  },
  detailProduk: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default DetailProduk;
