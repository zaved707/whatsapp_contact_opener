import * as React from "react";
import { View, Text, Pressable } from "react-native";
import { useTheme } from "react-native-paper";
import Color from "color";
import Ionicons from '@expo/vector-icons/Ionicons';
import { router} from "expo-router"
export default function myComponent(props) {
  const theme = useTheme();
  const buttonColor = props.color ?? theme.colors.primary;
  const buttonHeight=props.height ?? 50
  const fontSize= props.fontSize ?? 25
  const startIcon= props.startIcon ?? "snow-outline"
  return (
    <View
      style={{
        alignSelf: "stretch",
        justifyContent: "center",
        borderRadius: 50,
        overflow: "hidden",
        elevation: 25,
      }}
    >
      
      <Pressable
        style={{
          display: 'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
          height: buttonHeight,
          backgroundColor: buttonColor,

          
        }}
        android_ripple={{
          color: Color({r:Color(buttonColor).array[0] , g:Color(buttonColor).array[1], b:Color(buttonColor).array[2], alpha: 0.5}).toString(),
          borderless: true,
          foreground: true
        }}
        onPress={() => {
          router.push(props.href)
        }}
      ><Ionicons style={{marginLeft: 20}} name={startIcon} size={32} color={theme.colors.onPrimary} />
        <Text style={{color: theme.colors.onPrimary, fontSize: fontSize}}>{props.text}</Text>
        <Ionicons style={{marginRight: 10}} name="chevron-forward" size={24} color={theme.colors.onPrimary} />
      </Pressable>
    </View>
  );
}
