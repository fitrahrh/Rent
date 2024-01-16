import * as React from "react";
import { Text, StyleSheet, View, TextInput, Pressable } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const CheckOut1 = () => {
  return (
    <View style={styles.checkOut}>
      <Text style={styles.enterTheDelivery}>Enter the delivery address</Text>
      <View style={[styles.checkOutChild, styles.childBorder]} />
      <TextInput
        style={styles.firstName}
        placeholder="First Name"
        placeholderTextColor="#000"
      />
      <View style={[styles.lineParent, styles.lineGroupLayout]}>
        <View style={[styles.groupChild, styles.childBorder]} />
        <TextInput
          style={styles.lastName}
          placeholder="Last Name"
          placeholderTextColor="#000"
        />
      </View>
      <View style={[styles.lineGroup, styles.lineGroupLayout]}>
        <View style={[styles.groupChild, styles.childBorder]} />
        <TextInput
          style={styles.lastName}
          placeholder="Address"
          placeholderTextColor="#000"
        />
      </View>
      <View style={[styles.lineContainer, styles.lineGroupLayout]}>
        <View style={[styles.groupChild, styles.childBorder]} />
        <TextInput
          style={styles.lastName}
          placeholder="State / provinces"
          placeholderTextColor="#000"
        />
      </View>
      <View style={[styles.groupView, styles.lineGroupLayout]}>
        <View style={[styles.groupChild, styles.childBorder]} />
        <TextInput
          style={styles.lastName}
          placeholder="City / district"
          placeholderTextColor="#000"
        />
      </View>
      <View style={[styles.checkOutItem, styles.childBorder]} />
      <TextInput
        style={styles.postalCode}
        placeholder="Postal code"
        placeholderTextColor="#000"
      />
      <TextInput
        style={[styles.phoneNumber, styles.phoneNumberPosition]}
        placeholder="Phone number"
        placeholderTextColor="#000"
      />
      <View style={[styles.checkOutInner, styles.phoneNumberPosition]} />
      <Text style={[styles.save, styles.saveTypo]}>SAVE</Text>
      <View style={styles.rectangleView} />
      <TextInput
        style={styles.addANote}
        placeholder="Add a note"
        placeholderTextColor="#000"
      />
      <Image
        style={styles.arrowLeftSLine13}
        contentFit="cover"
        source={require("../assets/arrowleftsline-1-3.png")}
      />
      <View style={[styles.checkOutChild1, styles.childBorder]} />
      <Text style={[styles.text, styles.saveTypo]}>+62</Text>
      <Image
        style={styles.panahKiriIcon}
        contentFit="cover"
        source={require("../assets/panah-kiri1.png")}
      />
      <Pressable style={[styles.rectangleParent, styles.rectangleLayout]}>
        <Pressable
          style={[styles.rectanglePressable, styles.indicatorPosition]}
        />
        <Text style={[styles.next, styles.saveTypo]}>Next</Text>
      </Pressable>
      <View style={[styles.barBawah, styles.barBawahLayout]}>
        <View style={[styles.indicator, styles.barBawahLayout]} />
      </View>
      <Image
        style={[styles.arrowLeftSLine131, styles.arrowPosition]}
        contentFit="cover"
        source={require("../assets/arrowleftsline-1-31.png")}
      />
      <Image
        style={[styles.arrowLeftSLine132, styles.arrowPosition]}
        contentFit="cover"
        source={require("../assets/arrowleftsline-1-31.png")}
      />
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
    </View>
  );
};

const styles = StyleSheet.create({
  childBorder: {
    height: 1,
    borderTopWidth: 0.5,
    borderColor: Color.colorGray_400,
    borderStyle: "solid",
  },
  lineGroupLayout: {
    height: 21,
    width: 355,
    left: 41,
    position: "absolute",
  },
  phoneNumberPosition: {
    left: 96,
    position: "absolute",
  },
  saveTypo: {
    textAlign: "left",
    fontFamily: FontFamily.lato,
    position: "absolute",
  },
  rectangleLayout: {
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
  arrowPosition: {
    left: 367,
    height: 17,
    width: 17,
    position: "absolute",
    overflow: "hidden",
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
    borderColor: Color.colorBlack,
    height: 1,
    borderTopWidth: 0.5,
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
  enterTheDelivery: {
    marginLeft: -116,
    top: 264,
    left: "50%",
    fontSize: FontSize.size_xl,
    textAlign: "center",
    width: 232,
    opacity: 0.8,
    color: Color.colorBlack,
    fontWeight: "500",
    fontFamily: FontFamily.lato,
    position: "absolute",
  },
  checkOutChild: {
    top: 389,
    width: 356,
    height: 1,
    borderTopWidth: 0.5,
    borderColor: Color.colorGray_400,
    borderStyle: "solid",
    position: "absolute",
    left: 41,
  },
  firstName: {
    top: 368,
    fontSize: FontSize.size_xs,
    left: 41,
    fontFamily: FontFamily.lato,
    position: "absolute",
  },
  groupChild: {
    top: 21,
    left: 0,
    width: 356,
    height: 1,
    borderTopWidth: 0.5,
    borderColor: Color.colorGray_400,
    borderStyle: "solid",
    position: "absolute",
  },
  lastName: {
    top: 0,
    left: 0,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.lato,
    position: "absolute",
  },
  lineParent: {
    top: 415,
  },
  lineGroup: {
    top: 462,
  },
  lineContainer: {
    top: 509,
  },
  groupView: {
    top: 556,
  },
  checkOutItem: {
    top: 624,
    width: 356,
    height: 1,
    borderTopWidth: 0.5,
    borderColor: Color.colorGray_400,
    borderStyle: "solid",
    position: "absolute",
    left: 41,
  },
  postalCode: {
    top: 603,
    fontSize: FontSize.size_xs,
    left: 41,
    fontFamily: FontFamily.lato,
    position: "absolute",
  },
  phoneNumber: {
    top: 648,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.lato,
  },
  checkOutInner: {
    top: 668,
    width: 301,
    height: 1,
    borderTopWidth: 0.5,
    borderColor: Color.colorGray_400,
    borderStyle: "solid",
  },
  save: {
    top: 745,
    left: 197,
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
    fontWeight: "600",
    textAlign: "left",
  },
  rectangleView: {
    top: 692,
    borderRadius: 2,
    borderWidth: 1,
    width: 79,
    height: 22,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: 41,
    position: "absolute",
  },
  addANote: {
    top: 697,
    left: 59,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.lato,
    position: "absolute",
  },
  arrowLeftSLine13: {
    top: 651,
    left: 66,
    height: 17,
    width: 17,
    position: "absolute",
    overflow: "hidden",
  },
  checkOutChild1: {
    top: 669,
    width: 43,
    height: 1,
    borderTopWidth: 0.5,
    borderColor: Color.colorGray_400,
    borderStyle: "solid",
    left: 41,
    position: "absolute",
  },
  text: {
    top: 650,
    color: Color.colorGray_400,
    fontSize: FontSize.size_xs,
    left: 41,
  },
  panahKiriIcon: {
    top: 86,
    left: 39,
    borderRadius: Border.br_mid,
    width: 40,
    height: 25,
    position: "absolute",
  },
  rectanglePressable: {
    borderRadius: Border.br_6xl,
    height: 45,
    width: 130,
    position: "absolute",
  },
  next: {
    top: 12,
    fontSize: FontSize.size_mid_2,
    width: 38,
    left: 46,
    color: Color.colorWhite,
    fontWeight: "600",
    textAlign: "left",
  },
  rectangleParent: {
    top: 741,
    left: 259,
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
  arrowLeftSLine131: {
    top: 511,
  },
  arrowLeftSLine132: {
    top: 555,
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
  checkOut: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default CheckOut1;
