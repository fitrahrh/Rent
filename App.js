const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import HalamanAwal from "./screens/HalamanAwal";
import BuatAkun from "./screens/BuatAkun";
import Masuk from "./screens/Masuk";
import TampilanAwal from "./screens/TampilanAwal";
import DetailProduk from "./screens/DetailProduk";
import Verifikasi from "./screens/Verifikasi";
import Profile from "./screens/Profile";
import PengecekanPesanan from "./screens/PengecekanPesanan";
import Pembayaran from "./screens/Pembayaran";
import CheckOut from "./screens/CheckOut";
import PilihKota from "./screens/PilihKota";
import PilihProvinsi from "./screens/PilihProvinsi";
import CheckOut1 from "./screens/CheckOut1";
import CheckOut2 from "./screens/CheckOut2";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  function MaterialIcon({ name, style }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name) => ({
    toReactElement: (props) => MaterialIcon({ name, ...props }),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      }
    );
  }
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };

  return (
    <>
      <IconRegistry icons={[MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator
              initialRouteName="Masuk"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen
                name="HalamanAwal"
                component={HalamanAwal}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="BuatAkun"
                component={BuatAkun}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Masuk"
                component={Masuk}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TampilanAwal"
                component={TampilanAwal}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DetailProduk"
                component={DetailProduk}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Verifikasi"
                component={Verifikasi}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Profile"
                component={Profile}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PengecekanPesanan"
                component={PengecekanPesanan}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Pembayaran"
                component={Pembayaran}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CheckOut"
                component={CheckOut}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PilihKota"
                component={PilihKota}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PilihProvinsi"
                component={PilihProvinsi}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CheckOut1"
                component={CheckOut1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CheckOut2"
                component={CheckOut2}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          ) : (
            <TampilanAwal />
          )}
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
export default App;
