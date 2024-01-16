import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PengecekanPesanan = () => {
  return (
    <View style={styles.pengecekanPesanan}>
      <Image
        style={styles.iaa09553Icon}
        contentFit="cover"
        source={require("../assets/iaa0955-3.png")}
      />
      <Text style={styles.graduation01}>Graduation 01</Text>
      <Text style={[styles.s, styles.sTypo]}>S</Text>
      <Text style={[styles.text, styles.textTypo]}>1</Text>
      <Text style={styles.size}>Size</Text>
      <Text style={[styles.quantity, styles.dayTypo]}>Quantity</Text>
      <Text style={[styles.day, styles.dayTypo]}>Day</Text>
      <Text style={[styles.text1, styles.textTypo]}>1</Text>
      <Text style={styles.idr200000}>IDR 200.000</Text>
      <Text style={[styles.off, styles.offTypo]}>20% OFF</Text>
      <Text style={[styles.idr250000, styles.offTypo]}>IDR 250.000</Text>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.indicatorPosition]} />
        <Text style={[styles.shipping, styles.shippingTypo]}>Shipping</Text>
        <Text style={[styles.expressDelivery, styles.shippingTypo]}>
          Express Delivery
        </Text>
        <Text style={styles.free}>FREE</Text>
        <Text style={[styles.subTotal, styles.productTypo]}>Sub total</Text>
        <Text style={[styles.product, styles.productTypo]}>(1 product)</Text>
        <Text style={[styles.idr2000001, styles.idrLayout]}>IDR 200.000</Text>
        <Text style={[styles.idr2000002, styles.totalTypo]}>IDR 200.000</Text>
        <Text style={[styles.total, styles.totalTypo]}>Total</Text>
        <View style={styles.groupItem} />
      </View>
      <Pressable
        style={[styles.pengecekanPesananChild, styles.pengecekanLayout]}
      />
      <Pressable
        style={[styles.pengecekanPesananItem, styles.pengecekanLayout]}
      />
      <Text style={[styles.pay, styles.payTypo]}>Pay</Text>
      <Text style={[styles.cancel, styles.payTypo]}>Cancel</Text>
      <View style={[styles.barBawah, styles.barBawahLayout]}>
        <View style={[styles.indicator, styles.barBawahLayout]} />
      </View>
      <Image
        style={styles.panahKiriIcon}
        contentFit="cover"
        source={require("../assets/panah-kiri2.png")}
      />
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
      <Text style={[styles.orderCheck1, styles.sTypo]}>Order Check</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sTypo: {
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    position: "absolute",
  },
  textTypo: {
    width: 10,
    height: 14,
    color: Color.colorBlack,
    top: 406,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  dayTypo: {
    top: 385,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  offTypo: {
    color: Color.colorRed_100,
    top: 471,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppins,
    textAlign: "left",
    position: "absolute",
  },
  groupChildLayout: {
    height: 138,
    width: 428,
    position: "absolute",
  },
  indicatorPosition: {
    top: 0,
    left: 0,
  },
  shippingTypo: {
    fontSize: FontSize.size_smi,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    position: "absolute",
  },
  productTypo: {
    height: 16,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    top: 0,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    position: "absolute",
  },
  idrLayout: {
    height: 22,
    width: 74,
    left: 334,
  },
  totalTypo: {
    top: 76,
    fontSize: FontSize.size_smi,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    position: "absolute",
  },
  pengecekanLayout: {
    height: 39,
    width: 183,
    borderRadius: Border.br_3xs,
    top: 741,
    position: "absolute",
  },
  payTypo: {
    color: Color.colorWhite,
    top: 751,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.lato,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  barBawahLayout: {
    height: 5,
    width: 134,
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
    borderColor: Color.colorBlack,
    top: 17,
    height: 1,
    borderTopWidth: 0.5,
    borderStyle: "solid",
    position: "absolute",
  },
  paymentTypo: {
    fontSize: FontSize.size_4xs,
    top: 35,
    height: 16,
    fontWeight: "500",
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    position: "absolute",
  },
  iaa09553Icon: {
    left: 7,
    borderRadius: 30,
    width: 146,
    height: 146,
    top: 352,
    position: "absolute",
  },
  graduation01: {
    left: 180,
    lineHeight: 24,
    color: Color.baseDarkBlack,
    display: "flex",
    alignItems: "center",
    width: 115,
    height: 33,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    fontSize: FontSize.size_base,
    top: 352,
    position: "absolute",
  },
  s: {
    left: 189,
    width: 7,
    height: 14,
    top: 406,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
  },
  text: {
    left: 249,
  },
  size: {
    left: 179,
    top: 385,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  quantity: {
    left: 222,
  },
  day: {
    left: 305,
  },
  text1: {
    left: 316,
  },
  idr200000: {
    top: 446,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppins,
    left: 179,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  off: {
    left: 239,
    fontWeight: "600",
    color: Color.colorRed_100,
    top: 471,
  },
  idr250000: {
    textDecoration: "line-through",
    color: Color.colorRed_100,
    top: 471,
    left: 179,
  },
  groupChild: {
    left: 0,
    height: 138,
    width: 428,
    position: "absolute",
    backgroundColor: Color.colorWhite,
    top: 0,
  },
  shipping: {
    top: 29,
    width: 51,
    left: 13,
    height: 14,
  },
  expressDelivery: {
    top: 31,
    width: 109,
    height: 15,
    left: 81,
  },
  free: {
    top: 36,
    left: 361,
    width: 25,
    height: 17,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    position: "absolute",
  },
  subTotal: {
    width: 57,
    left: 13,
  },
  product: {
    width: 76,
    left: 81,
  },
  idr2000001: {
    top: 5,
    fontSize: FontSize.size_smi,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    position: "absolute",
  },
  idr2000002: {
    height: 22,
    width: 74,
    left: 334,
  },
  total: {
    width: 38,
    height: 23,
    fontWeight: "500",
    left: 13,
  },
  groupItem: {
    top: 59,
    borderColor: "#a4a4a4",
    height: 1,
    borderTopWidth: 0.5,
    borderStyle: "solid",
    left: 0,
    width: 428,
    position: "absolute",
  },
  rectangleParent: {
    top: 555,
    left: -1,
  },
  pengecekanPesananChild: {
    left: 25,
    backgroundColor: "#080000",
  },
  pengecekanPesananItem: {
    left: 217,
    backgroundColor: Color.colorBlack,
  },
  pay: {
    left: 296,
  },
  cancel: {
    left: 92,
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
  panahKiriIcon: {
    top: 86,
    left: 39,
    borderRadius: Border.br_mid,
    width: 40,
    height: 25,
    position: "absolute",
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
  orderCheck1: {
    marginLeft: -56,
    top: 281,
    left: "50%",
    fontSize: FontSize.size_xl,
    fontWeight: "500",
  },
  pengecekanPesanan: {
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default PengecekanPesanan;
