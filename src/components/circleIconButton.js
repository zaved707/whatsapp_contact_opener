import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from "react-native-paper";
import { Pressable, View,useColorScheme,Linking } from "react-native";
import { router } from "expo-router";
import calculateRippleColor from "../utilities/rippleEffectColorCalculator";
export default function button(props) {
  const theme = useTheme();
  const buttonLogo = props.icon ?? "warning";
   const colorScheme=useColorScheme();
  return (
    <View style={{ borderRadius: 100, overflow: "hidden" }}>
      <Pressable
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 5,
          borderRadius: 100,
        }}
        onPress={() => {
          Linking.openURL('https://github.com/zaved707/whatsapp_contact_opener');
        }}
        android_ripple={{
          color: calculateRippleColor(theme.colors.surfaceVariant,colorScheme),
        }}
      >
        <Ionicons
          name={buttonLogo}
          size={30}
          color={theme.colors.onBackground}
        />
      </Pressable>
    </View>
  );
}
