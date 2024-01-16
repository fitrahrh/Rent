import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const Verifikasi = () => {
  return (
    <View style={styles.verifikasi}>
      <Text
        style={[styles.almostThere, styles.verifyTypo]}
      >{`Almost there `}</Text>
      <Image
        style={styles.panahKiriIcon}
        contentFit="cover"
        source={require("../assets/panah-kiri1.png")}
      />
      <View style={styles.frame}>
        <Text style={styles.pleaseEnterTheContainer}>
          <Text style={styles.pleaseEnterThe}>
            Please enter the 6-digit code sent to your phone number
          </Text>
          <Text style={styles.text}>{` `}</Text>
          <Text style={styles.pleaseEnterThe}>for verification.</Text>
        </Text>
      </View>
      <View style={styles.frame1}>
        <View style={styles.otpInput}>
          <View style={[styles.otpInputChild, styles.otpChildPosition]} />
          <View style={[styles.otpInputItem, styles.otpChildPosition]} />
          <View style={[styles.otpInputInner, styles.otpChildPosition]} />
          <View style={[styles.rectangleView, styles.otpChildPosition]} />
          <View style={[styles.otpInputChild1, styles.otpChildPosition]} />
          <View style={[styles.otpInputChild2, styles.otpChildPosition]} />
          <Text
            style={styles.text1}
          >{`6             9            7             5             4            9         `}</Text>
        </View>
      </View>
      <Pressable style={styles.frame2}>
        <View style={styles.input}>
          <Text style={[styles.verify, styles.verifyTypo]}>Verify</Text>
        </View>
      </Pressable>
      <View style={styles.frame3}>
        <View style={styles.didntReceiveAnyCodeParent}>
          <Text
            style={styles.resendAgainTypo}
          >{`Didn’t receive any code? `}</Text>
          <Text style={[styles.resendAgain, styles.resendAgainTypo]}>
            Resend Again
          </Text>
        </View>
      </View>
      <View style={styles.frame4}>
        <Text style={styles.requestNewCode}>Request new code in 00:30s</Text>
      </View>
      <View style={[styles.barBawah, styles.barBawahLayout]}>
        <View style={[styles.indicator, styles.barBawahLayout]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  verifyTypo: {
    textAlign: "left",
    fontFamily: FontFamily.lato,
  },
  otpChildPosition: {
    backgroundColor: Color.colorDimgray_100,
    bottom: "0%",
    top: "0%",
    width: "13.78%",
    height: "100%",
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  resendAgainTypo: {
    fontWeight: "200",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.mulish,
    textAlign: "left",
    color: Color.colorGray_300,
  },
  barBawahLayout: {
    height: 5,
    width: 134,
    position: "absolute",
  },
  almostThere: {
    top: 170,
    left: 22,
    fontSize: FontSize.size_11xl,
    fontWeight: "700",
    width: 181,
    height: 36,
    color: Color.colorGray_300,
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
  pleaseEnterThe: {
    color: Color.colorGray_300,
  },
  text: {
    color: "#ff3951",
  },
  pleaseEnterTheContainer: {
    width: 388,
    height: 65,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.lato,
  },
  frame: {
    top: 227,
    left: 20,
    width: 390,
    alignItems: "flex-end",
    justifyContent: "center",
    position: "absolute",
    overflow: "hidden",
  },
  otpInputChild: {
    right: "86.22%",
    left: "0%",
  },
  otpInputItem: {
    right: "68.98%",
    left: "17.24%",
  },
  otpInputInner: {
    right: "51.75%",
    left: "34.48%",
  },
  rectangleView: {
    right: "34.51%",
    left: "51.71%",
  },
  otpInputChild1: {
    right: "17.27%",
    left: "68.95%",
  },
  otpInputChild2: {
    right: "0%",
    left: "86.22%",
  },
  text1: {
    top: "27.73%",
    left: "5.37%",
    fontFamily: FontFamily.mulish,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorGray_300,
    position: "absolute",
  },
  otpInput: {
    width: 315,
    height: 44,
  },
  frame1: {
    top: 292,
    left: 49,
    width: 332,
    justifyContent: "center",
    position: "absolute",
    overflow: "hidden",
  },
  verify: {
    fontSize: FontSize.size_lg,
    fontWeight: "600",
    color: Color.colorWhite,
    width: 49,
    height: 28,
  },
  input: {
    borderRadius: Border.br_3xs,
    width: 357,
    height: 60,
    alignItems: "center",
    backgroundColor: Color.colorBlack,
    justifyContent: "center",
  },
  frame2: {
    top: 357,
    left: 25,
    width: 362,
    justifyContent: "center",
    position: "absolute",
    overflow: "hidden",
  },
  resendAgain: {
    marginLeft: 2,
  },
  didntReceiveAnyCodeParent: {
    width: 289,
    height: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  frame3: {
    top: 444,
    left: 48,
    width: 294,
    justifyContent: "center",
    position: "absolute",
    overflow: "hidden",
  },
  requestNewCode: {
    color: "rgba(0, 0, 0, 0.5)",
    width: 205,
    height: 19,
    fontSize: FontSize.size_base,
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.lato,
  },
  frame4: {
    top: 469,
    left: 90,
    width: 210,
    justifyContent: "center",
    position: "absolute",
    overflow: "hidden",
  },
  indicator: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_8xs,
    height: 5,
    width: 134,
  },
  barBawah: {
    top: 914,
    left: 148,
  },
  verifikasi: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default Verifikasi;
