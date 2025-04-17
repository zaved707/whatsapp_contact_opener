import {
  Pressable,
  Text,
  ScrollView,
  View,
  useColorScheme,
  KeyboardAvoidingView,
  
} from "react-native";
import { useTheme, TextInput, Menu, Button, Divider } from "react-native-paper";
import rippleColor from "../utilities/rippleEffectColorCalculator";
import * as React from "react";
import * as Linking from "expo-linking";
import AppBar from "../components/AppBar";
import CountryMenu from "../components/countryMenu";
import { getMaterial3Theme } from "@pchmn/expo-material3-theme";

export default function App() {
   const colorScheme=useColorScheme();
  const [number, setNumber] = React.useState("");
  const theme = useTheme();
  const [countryCode, setCountryCode] = React.useState("+1");
  const theme2 = getMaterial3Theme();
  

  return (
    <View
      style={{
        backgroundColor: theme.colors.background,
        flex: 1,

        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <AppBar text="Whatsapp Easy Open" />
      <View  style={{width:'90%',borderRadius:30 , margin: 20,overflow: 'hidden'}}>
      <Pressable android_ripple={{color: rippleColor(theme.colors.primaryContainer,colorScheme)}} style={{padding: 20,backgroundColor: theme.colors.primaryContainer}}><Text style={{color: theme.colors.onBackground , fontSize: 30,alignSelf:'center',textAlign:'center'}}>Type The Number Below</Text></Pressable></View>
      <View
      
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          backgroundColor: theme.colors.primaryContainer,
          width: "90%",
          gap: 30,
          padding: 20,
          
          borderRadius: 30,
        }}
      >
        <View
          style={{
            justifyContent: "flex-start",
            maxWidth: "90%",
            display: "flex",
            flexDirection: "row",

            gap: 10,
            paddingLeft: 10,
            alignItems: "center",
          }}
        >
          <CountryMenu
            countryCode={countryCode}
            setCountryCode={setCountryCode}
          />
          <TextInput
            style={{ width: "70%" }}
            mode="outlined"
            inputMode="tel"
            maxLength={12}
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
            android_ripple={{ color: rippleColor(theme.colors.primary,colorScheme) }}
            onPress={() =>
              Linking.openURL(`https://wa.me/${countryCode}-${number}`)
            }
          >
            <Text
              style={{
                fontSize: 30,
                alignSelf: "center",
                color: theme.colors.onPrimary,
              }}
            >
              open in whatsapp
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
