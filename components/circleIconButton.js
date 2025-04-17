import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from "react-native-paper";
import { Pressable, View } from "react-native";
import { router } from "expo-router";
export default function button(props) {
  const theme = useTheme();
  const buttonLogo = props.icon ?? "warning";

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
          router.push(props.href);
        }}
        android_ripple={{
          color: "#fff",
        }}
      >
        <Ionicons
          name={buttonLogo}
          size={25}
          color={theme.colors.onBackground}
        />
      </Pressable>
    </View>
  );
}
