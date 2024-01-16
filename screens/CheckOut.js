import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";


const CheckOut = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.checkOut}>
      <View style={styles.alamat}>
        <Text style={[styles.shippingAddress, styles.shippingAddressTypo]}>
          Shipping address
        </Text>
        <Text style={[styles.expressDelivery, styles.shippingAddressTypo]}>
          Express Delivery
        </Text>
        <Text
          style={[styles.alwisSuryatmajaJl, styles.bussinesDaysTypo]}
        >{`Alwis suryatmaja
Jl. Pasar Denpasar
Denpasar
Bali, 12345
Indonesia
+62822268446767`}</Text>
        <Text style={[styles.bussinesDays, styles.bussinesDaysTypo]}>
          1 -2 Bussines days
        </Text>
        <View style={[styles.alamatChild, styles.alamatLayout]} />
        <View style={[styles.alamatItem, styles.alamatLayout]} />
        <View style={[styles.alamatInner, styles.alamatLayout]} />
        <Pressable style={[styles.change, styles.changeLayout]}>
          <View style={[styles.changeChild, styles.changeLayout]} />
          <Text style={styles.change1}>Change</Text>
        </Pressable>
      </View>
      <Pressable onPress={() => navigation.goBack()}>
        <Image
          style={styles.panahKiriIcon}
          contentFit="cover"
          source={require("../assets/panah-kiri2.png")}
        />
      </Pressable>
      <Pressable style={[styles.proses, styles.prosesLayout1]}>
        <View style={[styles.prosesChild, styles.indicatorPosition]} />
        <Text style={[styles.proceedToPayment, styles.shippingAddressTypo]}>
          proceed to payment
        </Text>
      </Pressable>
      <View style={[styles.barBawah, styles.barBawahLayout]}>
        <View style={[styles.indicator, styles.barBawahLayout]} />
      </View>
      <View style={styles.proses1}>
        <Image
          style={[styles.phnumberCircleOneFillIcon, styles.phnumberIconLayout]}
          contentFit="cover"
          source={require("../assets/phnumbercircleonefill1.png")}
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
          source={require("../assets/phnumbercirclethreefill1.png")}
        />
        <View style={[styles.prosesItem, styles.prosesLayout]} />
        <View style={[styles.prosesInner, styles.prosesLayout]} />
        <Text style={[styles.delivery, styles.paymentTypo]}>Delivery</Text>
        <Text style={[styles.payment, styles.paymentTypo]}>Payment</Text>
        <Text style={[styles.orderCheck, styles.paymentTypo]}>Order check</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shippingAddressTypo: {
    textAlign: "left",
    fontFamily: FontFamily.lato,
    position: "absolute",
  },
  bussinesDaysTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorGray_400,
    fontFamily: FontFamily.lato,
    left: 40,
    position: "absolute",
  },
  alamatLayout: {
    height: 1,
    width: 415,
    borderTopWidth: 0.5,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  changeLayout: {
    height: 36,
    width: 93,
    position: "absolute",
  },
  prosesLayout1: {
    height: 47,
    width: 206,
    position: "absolute",
  },
  indicatorPosition: {
    backgroundColor: Color.colorBlack,
    left: 0,
    top: 0,
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
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    fontWeight: "500",
    position: "absolute",
  },
  shippingAddress: {
    top: 7,
    width: 159,
    height: 30,
    color: Color.colorGray_400,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
    left: 40,
    textAlign: "left",
    fontFamily: FontFamily.lato,
  },
  expressDelivery: {
    top: 179,
    width: 147,
    height: 28,
    color: Color.colorGray_400,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
    left: 40,
    textAlign: "left",
    fontFamily: FontFamily.lato,
  },
  alwisSuryatmajaJl: {
    top: 42,
    width: 140,
    height: 137,
  },
  bussinesDays: {
    top: 212,
  },
  alamatChild: {
    top: 0,
  },
  alamatItem: {
    top: 171,
  },
  alamatInner: {
    top: 250,
  },
  changeChild: {
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  change1: {
    top: 4,
    left: 11,
    fontSize: FontSize.size_xl,
    width: 72,
    height: 20,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    fontWeight: "500",
    position: "absolute",
  },
  change: {
    top: 65,
    left: 284,
  },
  alamat: {
    top: 285,
    left: 8,
    width: 414,
    height: 250,
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
  prosesChild: {
    height: 47,
    width: 206,
    position: "absolute",
    borderRadius: Border.br_xl,
  },
  proceedToPayment: {
    top: 14,
    left: 13,
    fontSize: FontSize.size_base,
    textTransform: "uppercase",
    fontWeight: "600",
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.lato,
  },
  proses: {
    top: 579,
    left: 207,
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
  phnumberCircleOneFillIcon: {
    left: 0,
  },
  phnumberCircleTwoFillIcon: {
    left: 160,
  },
  phnumberCircleThreeFillIcon: {
    left: 321,
  },
  prosesItem: {
    left: 46,
  },
  prosesInner: {
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
  proses1: {
    top: 162,
    left: 27,
    width: 377,
    height: 51,
    position: "absolute",
  },
  checkOut: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default CheckOut;
