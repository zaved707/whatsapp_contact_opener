import React from "react";

import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Pressable,
  Text,
  FlatList,
  useColorScheme,
  ScrollView,
  View,
  KeyboardAvoidingView,
} from "react-native";
import { useTheme, TextInput, Menu, Button, Divider } from "react-native-paper";
import rippleColor from "../utilities/rippleEffectColorCalculator";

import * as Linking from "expo-linking";
import countryCodes from "../utilities/countryCodes";

export default function CountryMenu(props) {
  const theme = useTheme();
  const colorScheme=useColorScheme();
  const [visible, setVisible] = React.useState(false);

  const countries = countryCodes;
  const [filteredData, setFilteredData] = React.useState(countries);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const handleSearch = (query) => {
    console.log(query, "this was query");
    
    const filtered = countries.filter(
      (item) => item.name.toLowerCase().includes(query.toLowerCase())
      //   (item) => item.name.toLowerCase().includes(safeQuery.toLowerCase())
      // For partial match, use: item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <Menu
      visible={visible}
      onDismiss={closeMenu}
      anchor={
        <View style={{ overflow: "hidden", borderRadius: 100 }}>
          <Pressable
            style={{
              display: "flex",
              width: 80,
              height: 50,
              flexDirection: 'row',
              justifyContent: "center",
              alignItems:'center',
              padding: 10,
              backgroundColor: theme.colors.primary,
            }}
            android_ripple={{ color: rippleColor(theme.colors.primary,colorScheme) }}
            onPress={() => openMenu()}
          >
            
              <Text style={{fontSize:20, color: theme.colors.onPrimary }}>{props.countryCode}</Text>
              <Ionicons name="caret-down-outline" size={24} color="black" />
            
          </Pressable>
        </View>
      }
    >
      <View style={{ Width: 200, display: "flex" }}>
        <View style={{ paddingHorizontal: 10, padding: 10, maxHeight: "80%" }}>
          <TextInput
            label={"Search Country"}
            style={{ width: "100%", height: 50 }}
            mode="outlined"
            onChangeText={(query) => handleSearch(query)}
          />
        </View>

        <FlatList
          style={{ width: 250, height: 200 ,marginTop:10}}
          data={filteredData}
          keyExtractor={(item) => item.code}
          renderItem={({ item }) => {
            return (
              <View>
                <Pressable
                  style={{
                    backgroundColor: theme.colors.elevation.level2,
                    padding: 10,
                  }}
                  android_ripple={{
                    color: rippleColor(theme.colors.elevation.level2),
                  }}
                  onPress={() => {
                    props.setCountryCode(item.dial_code);
                    setFilteredData(countries);
                    closeMenu();
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={{
                        maxWidth: 150,
                        color: theme.colors.onBackground,
                      }}
                    >
                      {item.name}
                    </Text>
                    <Text style={{ color: theme.colors.outline }}>
                      {item.dial_code}
                    </Text>
                  </View>
                </Pressable>
              </View>
            );
          }}
        />
      </View>
    </Menu>
  );
}
