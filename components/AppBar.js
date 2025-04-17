import * as React from "react";
import { View, Text, Pressable } from "react-native";
import { useTheme } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import CircleIconButton from "./circleIconButton";
export default function header(props) {
  const theme = useTheme();
  const buttonColor = theme.colors.secondary;
  const showSettings = props.showSettings ?? true;
  return (
    <View
      style={{
        height: "8%",
        width: "100%",
        backgroundColor: theme.colors.background,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 0.5,
        paddingHorizontal: 10,
        borderColor: theme.colors.outline,
      }}
    >
      <Text
        style={{
          fontSize: 30,
          color: theme.colors.onBackground,
        }}
      >
        {props.text}
      </Text>
      {showSettings && (
        <View style={{ display: "flex", flexDirection: "row" }}>
          <CircleIconButton href="/settings"icon="information" />

         
        </View>
      )}
    </View>
  );
}
