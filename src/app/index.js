import {
  Pressable,
  Text,
  ScrollView,
  View,
  KeyboardAvoidingView,
} from "react-native";
import { useTheme, TextInput, Menu, Button, Divider } from "react-native-paper";
import rippleColor from "../utilities/rippleEffectColorCalculator";
import * as React from "react";
import * as Linking from "expo-linking";

import CountryMenu from "../components/countryMenu";
export default function App() {
  const [number, setNumber] = React.useState("");
  const theme = useTheme();
  const [countryCode, setCountryCode] = React.useState("+1");

  return (
    <View
      style={{
        backgroundColor: theme.colors.background,
        flex: 1,

        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <View
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          backgroundColor: theme.colors.onSecondary,
          width: "90%",
          gap: 30,
          padding: 20,
          marginTop: 100,
          borderRadius: 30,
        }}
      >
        <CountryMenu setCountryCode={setCountryCode} />
        <View
          style={{
            justifyContent:"space-between",
            maxWidth: "90%",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            paddingLeft:10,
            alignItems: "center",
          }}
        >
          <TextInput
            value={countryCode}
            disabled={true}
            style={{ color: theme.colors.onBackground }}
          ></TextInput>

          <TextInput
            style={{width: '80%' }}
            mode="outlined"
            inputMode="numeric"
            label="Phone Number"
            value={number}
            onChangeText={(text) => {
              setNumber(text);
              console.log(text);
            }}
          />
        </View>
        <View style={{ overflow: "hidden", borderRadius: 100 }}>
          <Pressable
            style={{
              display: "flex",
              justifyContent: "center",
              padding: 10,
              backgroundColor: theme.colors.primary,
            }}
            android_ripple={{ color: rippleColor(theme.colors.primary) }}
            onPress={() => Linking.openURL(`https://wa.me/${countryCode}-${number}`)}
          >
            <Text style={{ color: theme.colors.onPrimary }}>
              open in whatsapp fdfdfdfdfd
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
