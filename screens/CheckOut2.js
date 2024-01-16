import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { CheckBox } from "@ui-kitten/components";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const CheckOut2 = () => {
  const [carbonradioButtonchecked, setCarbonradioButtonchecked] =
    useState(false);
  const [carbonradioButton1checked, setCarbonradioButton1checked] =
    useState(false);

  return (
    <View style={styles.checkOut}>
      <View style={styles.proses}>
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
        <View style={[styles.prosesChild, styles.prosesLayout]} />
        <View style={[styles.prosesItem, styles.prosesLayout]} />
        <Text style={[styles.delivery, styles.paymentTypo]}>Delivery</Text>
        <Text style={[styles.payment, styles.paymentTypo]}>Payment</Text>
        <Text style={[styles.orderCheck, styles.paymentTypo]}>Order check</Text>
      </View>
      <Text style={styles.selectShipping}>Select Shipping</Text>
      <View style={[styles.checkOutChild, styles.checkLayout]} />
      <View style={[styles.checkOutItem, styles.checkLayout]} />
      <View style={[styles.checkOutInner, styles.checkLayout]} />
      <View
        style={[styles.carbonradioButtonParent, styles.carbonradioPosition1]}
      >
        <CheckBox
          style={[styles.carbonradioButton, styles.carbonradioPosition]}
          checked={carbonradioButtonchecked}
          onChange={() =>
            setCarbonradioButtonchecked(!carbonradioButtonchecked)
          }
        />
        <Text style={[styles.deliveryToMy, styles.selfPickUpTypo]}>
          Delivery To My Address
        </Text>
        <Text style={[styles.homeOffice, styles.homeOfficePosition]}>
          Home / office address
        </Text>
      </View>
      <View
        style={[styles.carbonradioButtonGroup, styles.carbonradioPosition1]}
      >
        <CheckBox
          style={styles.carbonradioPosition}
          checked={carbonradioButton1checked}
          onChange={() =>
            setCarbonradioButton1checked(!carbonradioButton1checked)
          }
        />
        <Text style={[styles.selfPickUp, styles.selfPickUpTypo]}>
          Self Pick Up
        </Text>
        <Text style={[styles.safeAndFast, styles.homeOfficePosition]}>
          Safe and fast
        </Text>
      </View>
      <Image
        style={styles.panahKiriIcon}
        contentFit="cover"
        source={require("../assets/panah-kiri1.png")}
      />
      <Pressable style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.indicatorPosition]} />
        <Text style={styles.next}>Next</Text>
      </Pressable>
      <View style={[styles.barBawah, styles.barBawahLayout]}>
        <View style={[styles.indicator, styles.barBawahLayout]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  phnumberIconLayout: {
    height: 34,
    width: 34,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  prosesLayout: {
    height: 1,
    width: 103,
    borderTopWidth: 0.5,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    top: 17,
    position: "absolute",
  },
  paymentTypo: {
    height: 16,
    textAlign: "left",
    fontSize: FontSize.size_4xs,
    top: 35,
    color: Color.colorBlack,
    fontFamily: FontFamily.lato,
    fontWeight: "500",
    position: "absolute",
  },
  checkLayout: {
    width: 409,
    borderColor: Color.colorGray_100,
    left: 11,
    height: 1,
    borderTopWidth: 0.5,
    borderStyle: "solid",
    position: "absolute",
  },
  carbonradioPosition1: {
    height: 39,
    left: 24,
    position: "absolute",
  },
  carbonradioPosition: {
    top: 9,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  selfPickUpTypo: {
    height: 21,
    color: Color.colorGray_400,
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_xs,
    left: 37,
    fontWeight: "600",
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  homeOfficePosition: {
    top: 23,
    color: Color.colorGray_400,
    fontFamily: FontFamily.poppins,
    left: 37,
    height: 16,
    textAlign: "left",
    fontSize: FontSize.size_4xs,
    position: "absolute",
  },
  groupChildLayout: {
    height: 45,
    width: 130,
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
    width: 103,
    borderTopWidth: 0.5,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    top: 17,
  },
  prosesItem: {
    left: 207,
    width: 103,
    borderTopWidth: 0.5,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    top: 17,
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
  selectShipping: {
    marginLeft: -67,
    top: 259,
    left: "50%",
    fontSize: FontSize.size_xl,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.lato,
    fontWeight: "500",
    position: "absolute",
  },
  checkOutChild: {
    top: 339,
  },
  checkOutItem: {
    top: 422,
  },
  checkOutInner: {
    top: 505,
  },
  carbonradioButton: {
    borderRadius: 99,
  },
  deliveryToMy: {
    width: 162,
  },
  homeOffice: {
    width: 115,
  },
  carbonradioButtonParent: {
    top: 361,
    width: 199,
  },
  selfPickUp: {
    width: 80,
  },
  safeAndFast: {
    width: 69,
  },
  carbonradioButtonGroup: {
    top: 444,
    width: 117,
  },
  panahKiriIcon: {
    top: 86,
    left: 30,
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
    fontSize: FontSize.size_mid_2,
    color: Color.colorWhite,
    width: 38,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.lato,
    left: 46,
    position: "absolute",
  },
  rectangleParent: {
    top: 541,
    left: 271,
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
  checkOut: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default CheckOut2;
