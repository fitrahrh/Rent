import * as React from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
} from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook


const HalamanAwal = () => {

  const navigation = useNavigation(); // Initialize navigation

  const handleImagePress = () => {
    // Navigate to DetailProduk screen when the image is pressed
    navigation.navigate("DetailProduk");
  };

  return (
    <View style={styles.halamanAwal}>
      <View style={styles.frameParent}>
        <Pressable style={[styles.allWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.all, styles.allTypo]}>All</Text>
        </Pressable>
        <Pressable style={[styles.kidsWrapper, styles.wrapperFlexBox]}>
          <Text style={styles.allTypo}>Kids</Text>
        </Pressable>
        <Pressable style={[styles.kidsWrapper, styles.wrapperFlexBox]}>
          <Text style={styles.allTypo}>Dress</Text>
        </Pressable>
        <Pressable style={[styles.kidsWrapper, styles.wrapperFlexBox]}>
          <Text style={styles.allTypo}>{`Cosplay & Anime`}</Text>
        </Pressable>
        <Pressable style={[styles.kidsWrapper, styles.wrapperFlexBox]}>
          <Text style={styles.allTypo}>Hallowen</Text>
        </Pressable>
      </View>
      <View style={[styles.barBawah, styles.barBawahLayout]}>
        <View style={[styles.indicator, styles.indicatorPosition]} />
      </View>
      <View style={styles.home}>
        <Image
          style={styles.homeChild}
          contentFit="cover"
          source={require("../assets/group-1171.png")}
        />
        <Image
          style={[styles.supportheartIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/supportheart.png")}
        />
        <Image
          style={[styles.notificationsnotificationBinIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/notificationsnotificationbing.png")}
        />
        <Image
          style={[styles.usersprofileIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/usersprofile.png")}
        />
      </View>
      <Pressable style={styles.halamanAwalChild} />
      <ImageBackground
        style={styles.iak02661Icon}
        resizeMode="cover"
        source={require("../assets/iak02661.png")}
      />
      <Text style={[styles.get40Off, styles.get40OffFlexBox]}>
        Get 40% Off for all iteams
      </Text>
      <Text style={styles.shopWitUs}>Shop wit us!</Text>
      <Text style={[styles.available, styles.availableTypo]}>Available</Text>
      <Text style={[styles.graduation01, styles.graduation01Typo]}>
        Graduation 01
      </Text>
      <Image
        style={[styles.keranjangIcon, styles.keranjangIconLayout]}
        contentFit="cover"
        source={require("../assets/keranjang.png")}
      />
      <Image
        style={styles.bajuCeweIcon}
        contentFit="cover"
        source={require("../assets/baju-cewe.png")}
      />
      <View style={[styles.notif, styles.notifLayout]}>
        <View style={[styles.notifChild, styles.notifLayout]} />
        <Image
          style={[styles.supportheartIcon1, styles.athenaWomen01Layout]}
          contentFit="cover"
          source={require("../assets/supportheart1.png")}
        />
      </View>
      <Image
        style={[styles.keranjangIcon1, styles.keranjangIconLayout]}
        contentFit="cover"
        source={require("../assets/keranjang.png")}
      />
      <Text style={[styles.athenaWomen01, styles.athenaWomen01Layout]}>
        Athena Women 01
      </Text>
      <Text style={[styles.partiallyBooked, styles.availableTypo]}>
        Partially Booked
      </Text>
      <Image
        style={[styles.subtractIcon, styles.subtractIconLayout]}
        contentFit="cover"
        source={require("../assets/subtract.png")}
      />
      <View style={[styles.notif1, styles.notifPosition]}>
        <View style={[styles.notifChild, styles.notifLayout]} />
        <Image
          style={[styles.supportheartIcon1, styles.athenaWomen01Layout]}
          contentFit="cover"
          source={require("../assets/supportheart1.png")}
        />
      </View>
      <Image
        style={[styles.subtractIcon1, styles.subtractIconLayout]}
        contentFit="cover"
        source={require("../assets/subtract1.png")}
      />
      <View style={[styles.notif2, styles.notifPosition]}>
        <View style={[styles.notifChild, styles.notifLayout]} />
        <Image
          style={[styles.supportheartIcon1, styles.athenaWomen01Layout]}
          contentFit="cover"
          source={require("../assets/supportheart1.png")}
        />
      </View>
      <View style={[styles.notif3, styles.notifLayout]}>
        <View style={[styles.notifChild, styles.notifLayout]} />
        <Image
          style={[styles.supportheartIcon1, styles.athenaWomen01Layout]}
          contentFit="cover"
          source={require("../assets/supportheart1.png")}
        />
      </View>
      <Pressable style={styles.bajuHitamWrapper} onPress={handleImagePress}>
        <Image
          style={styles.bajuHitamIcon}
          contentFit="cover"
          source={require("../assets/baju-hitam1.png")}
        />
      </Pressable>
      <View
        style={[styles.welcomeBackParent, styles.welcomeBackParentPosition]}
      >
        <Text style={[styles.welcomeBack, styles.get40OffTypo]}>
          Welcome Back!
        </Text>
        <Text style={styles.fajarSieNackhall}>Fitrah</Text>
      </View>
      <Image
        style={[styles.notificationsIcon, styles.welcomeBackParentPosition]}
        contentFit="cover"
        source={require("../assets/notifications.png")}
      />
      <View style={styles.halamanAwalInner}>
        <View style={[styles.searchParent, styles.wrapperFlexBox]}>
          <Image
            style={styles.searchIcon}
            contentFit="cover"
            source={require("../assets/search.png")}
          />
          <TextInput
            style={styles.whatAreYou}
            placeholder="What are you looking for..."
            placeholderTextColor="#4f5663"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  allTypo: {
    textAlign: "center",
    lineHeight: 18,
    fontSize: FontSize.size_xs,
    color: Color.baseDarkBlack,
    fontFamily: FontFamily.lato,
  },
  barBawahLayout: {
    height: 5,
    width: 134,
    position: "absolute",
  },
  indicatorPosition: {
    left: 0,
    top: 0,
  },
  iconLayout: {
    height: 40,
    width: 45,
  },
  get40OffFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  availableTypo: {
    fontFamily: FontFamily.poppins,
    top: 628,
    fontWeight: "600",
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.baseDarkBlack,
    position: "absolute",
  },
  graduation01Typo: {
    top: 613,
    textAlign: "left",
    color: Color.baseDarkBlack,
    fontFamily: FontFamily.lato,
    lineHeight: 18,
    fontSize: FontSize.size_xs,
  },
  keranjangIconLayout: {
    height: 29,
    width: 38,
    top: 617,
    position: "absolute",
  },
  notifLayout: {
    height: 31,
    width: 37,
    position: "absolute",
  },
  athenaWomen01Layout: {
    height: 18,
    position: "absolute",
  },
  subtractIconLayout: {
    height: 193,
    width: 150,
    position: "absolute",
  },
  notifPosition: {
    left: 168,
    height: 31,
    width: 37,
    position: "absolute",
  },
  welcomeBackParentPosition: {
    top: 86,
    position: "absolute",
  },
  get40OffTypo: {
    textAlign: "left",
    fontFamily: FontFamily.lato,
  },
  all: {
    fontWeight: "500",
  },
  allWrapper: {
    shadowColor: "rgba(230, 234, 244, 0.5)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    height: 32,
    padding: 15,
    justifyContent: "center",
    backgroundColor: Color.colorDarkgray_100,
    borderRadius: Border.br_7xl,
    alignItems: "center",
    flex: 1,
  },
  kidsWrapper: {
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_6xs,
    marginLeft: 8,
    justifyContent: "center",
    backgroundColor: Color.colorDarkgray_100,
    borderRadius: Border.br_7xl,
    alignItems: "center",
  },
  frameParent: {
    top: 205,
    left: 5,
    width: 449,
    height: 36,
    flexDirection: "row",
    position: "absolute",
  },
  indicator: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorBlack,
    height: 5,
    width: 134,
    position: "absolute",
  },
  barBawah: {
    top: 914,
    left: 148,
  },
  homeChild: {
    height: "95.24%",
    width: "11.54%",
    top: "0%",
    right: "88.46%",
    bottom: "4.76%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  supportheartIcon: {
    marginLeft: -80,
    left: "50%",
    top: "50%",
    marginTop: -19,
    width: 45,
    position: "absolute",
    overflow: "hidden",
  },
  notificationsnotificationBinIcon: {
    top: 2,
    left: 230,
    position: "absolute",
    overflow: "hidden",
  },
  usersprofileIcon: {
    marginLeft: 150,
    left: "50%",
    top: "50%",
    marginTop: -19,
    width: 45,
    position: "absolute",
    overflow: "hidden",
  },
  home: {
    height: "4.51%",
    width: "90.7%",
    top: "91.74%",
    right: "3.49%",
    bottom: "3.76%",
    left: "5.81%",
    position: "absolute",
  },
  halamanAwalChild: {
    top: 260,
    left: 27,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGainsboro_100,
    width: 381,
    height: 159,
    position: "absolute",
  },
  iak02661Icon: {
    top: 263,
    left: 307,
    width: 104,
    height: 152,
    position: "absolute",
  },
  get40Off: {
    top: 315,
    fontSize: FontSize.size_xl,
    lineHeight: 30,
    fontWeight: "700",
    width: 233,
    height: 24,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    left: 44,
    color: Color.baseDarkBlack,
    display: "flex",
    position: "absolute",
  },
  shopWitUs: {
    top: 339,
    left: 201,
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.baseDarkBlack,
    fontFamily: FontFamily.lato,
    position: "absolute",
  },
  available: {
    left: 44,
  },
  graduation01: {
    left: 44,
    position: "absolute",
  },
  keranjangIcon: {
    left: 123,
  },
  bajuCeweIcon: {
    top: 435,
    width: 147,
    height: 171,
    left: 246,
    position: "absolute",
  },
  notifChild: {
    borderRadius: 37,
    backgroundColor: Color.colorGray_500,
    left: 0,
    top: 0,
  },
  supportheartIcon1: {
    top: 6,
    left: 7,
    width: 22,
    overflow: "hidden",
  },
  notif: {
    left: 369,
    width: 37,
    top: 441,
  },
  keranjangIcon1: {
    left: 377,
  },
  athenaWomen01: {
    left: 269,
    width: 102,
    top: 613,
    textAlign: "left",
    color: Color.baseDarkBlack,
    fontFamily: FontFamily.lato,
    lineHeight: 18,
    fontSize: FontSize.size_xs,
    display: "flex",
    alignItems: "center",
  },
  partiallyBooked: {
    left: 260,
    width: 116,
    height: 21,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  subtractIcon: {
    top: 653,
    left: 25,
  },
  notif1: {
    top: 646,
  },
  subtractIcon1: {
    top: 656,
    left: 246,
  },
  notif2: {
    top: 441,
  },
  notif3: {
    top: 649,
    left: 369,
    width: 37,
  },
  bajuHitamIcon: {
    top: 442,
    left: 24,
    height: 162,
    width: 150,
    position: "absolute",
  },
  welcomeBack: {
    fontSize: FontSize.size_smi,
    lineHeight: 20,
    color: "#4f5663",
  },
  fajarSieNackhall: {
    fontWeight: "600",
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.baseDarkBlack,
    fontFamily: FontFamily.lato,
  },
  welcomeBackParent: {
    left: 12,
  },
  notificationsIcon: {
    left: 370,
    height: 40,
    width: 45,
  },
  searchIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  whatAreYou: {
    fontSize: FontSize.size_3xs,
    marginLeft: 4,
    fontFamily: FontFamily.lato,
  },
  searchParent: {
    alignSelf: "stretch",
  },
  halamanAwalInner: {
    top: 145,
    left: 47,
    borderRadius: 60,
    backgroundColor: "rgba(159, 155, 155, 0.61)",
    width: 335,
    paddingHorizontal: 14,
    paddingVertical: 8,
    position: "absolute",
  },
  halamanAwal: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    height: 932,
    overflow: "hidden",
    flex: 1,
  },
});

export default HalamanAwal;
