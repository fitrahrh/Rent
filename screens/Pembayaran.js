import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Pembayaran = () => {
  return (
    <View style={styles.pembayaran}>
      <Text style={styles.choosePayment}>Choose Payment</Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector5.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      />
      <View style={[styles.pembayaranChild, styles.pembayaranLayout]} />
      <View style={[styles.pembayaranItem, styles.pembayaranLayout]} />
      <View style={[styles.pembayaranInner, styles.pembayaranLayout]} />
      <Text style={[styles.viaBankTransfer, styles.payOnTheTypo]}>
        Via bank transfer
      </Text>
      <Text style={[styles.payOnThe, styles.payOnTheTypo]}>
        Pay on the spot
      </Text>
      <View style={styles.proses}>
        <Image
          style={[styles.phnumberCircleOneFillIcon, styles.phnumberIconLayout]}
          contentFit="cover"
          source={require("../assets/phnumbercircleonefill.png")}
        />
        <Image
          style={[styles.phnumberCircleTwoFillIcon, styles.phnumberIconLayout]}
          contentFit="cover"
          source={require("../assets/phnumbercircletwofill.png")}
        />
        <Image
          style={[
            styles.phnumberCircleThreeFillIcon,
            styles.phnumberIconLayout,
          ]}
          contentFit="cover"
          source={require("../assets/phnumbercirclethreefill.png")}
        />
        <View style={[styles.prosesChild, styles.prosesLayout]} />
        <View style={[styles.prosesItem, styles.prosesLayout]} />
        <Text style={[styles.delivery, styles.paymentTypo]}>Delivery</Text>
        <Text style={[styles.payment, styles.paymentTypo]}>Payment</Text>
        <Text style={[styles.orderCheck, styles.paymentTypo]}>Order check</Text>
      </View>
      <View style={[styles.barBawah, styles.barBawahLayout]}>
        <View style={[styles.indicator, styles.barBawahLayout]} />
      </View>
      <Image
        style={styles.panahKiriIcon}
        contentFit="cover"
        source={require("../assets/panah-kiri2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "89.77%",
    right: "3.72%",
    width: "6.51%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPosition: {
    left: "92.09%",
    right: "6.05%",
    width: "1.86%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  pembayaranLayout: {
    height: 1,
    width: 415,
    borderTopWidth: 0.5,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: 6,
    position: "absolute",
  },
  payOnTheTypo: {
    height: 23,
    width: 123,
    color: Color.colorGray_400,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    left: 57,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    position: "absolute",
  },
  phnumberIconLayout: {
    height: 34,
    width: 34,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  prosesLayout: {
    width: 103,
    top: 17,
    height: 1,
    borderTopWidth: 0.5,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
  },
  paymentTypo: {
    height: 16,
    fontSize: FontSize.size_4xs,
    top: 35,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.lato,
    fontWeight: "500",
    position: "absolute",
  },
  barBawahLayout: {
    height: 5,
    width: 134,
    position: "absolute",
  },
  choosePayment: {
    marginLeft: -97,
    top: 281,
    left: "50%",
    fontSize: FontSize.size_xl,
    width: 194,
    height: 24,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.lato,
    fontWeight: "500",
    position: "absolute",
  },
  vectorIcon: {
    height: "3.11%",
    top: "41.52%",
    bottom: "55.36%",
  },
  vectorIcon1: {
    height: "1.72%",
    top: "42.17%",
    bottom: "56.12%",
  },
  vectorIcon2: {
    height: "3.43%",
    top: "51.18%",
    bottom: "45.39%",
  },
  vectorIcon3: {
    height: "1.82%",
    top: "51.93%",
    bottom: "46.24%",
  },
  pembayaranChild: {
    top: 355,
  },
  pembayaranItem: {
    top: 448,
  },
  pembayaranInner: {
    top: 538,
  },
  viaBankTransfer: {
    top: 391,
  },
  payOnThe: {
    top: 482,
  },
  phnumberCircleOneFillIcon: {
    left: 0,
  },
  phnumberCircleTwoFillIcon: {
    left: 160,
  },
  phnumberCircleThreeFillIcon: {
    left: 321,
  },
  prosesChild: {
    left: 46,
  },
  prosesItem: {
    left: 207,
  },
  delivery: {
    width: 42,
    left: 0,
  },
  payment: {
    width: 46,
    left: 160,
  },
  orderCheck: {
    left: 314,
    width: 63,
  },
  proses: {
    top: 162,
    left: 27,
    width: 377,
    height: 51,
    position: "absolute",
  },
  indicator: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorBlack,
    left: 0,
    top: 0,
    height: 5,
    width: 134,
  },
  barBawah: {
    top: 914,
    left: 148,
  },
  panahKiriIcon: {
    top: 86,
    left: 39,
    borderRadius: Border.br_mid,
    width: 40,
    height: 25,
    position: "absolute",
  },
  pembayaran: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default Pembayaran;
