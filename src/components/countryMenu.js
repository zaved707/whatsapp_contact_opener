import React from "react";
import {
  Pressable,
  Text,
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
              justifyContent: "center",
              padding: 10,
              backgroundColor: theme.colors.primary,
            }}
            android_ripple={{ color: rippleColor(theme.colors.primary) }}
            onPress={() => openMenu()}
          >
            <Text style={{ color: theme.colors.onPrimary }}>
              Select Country
            </Text>
          </Pressable>
        </View>
      }
    >
      <View style={{ minWidth: 200, diplay: "flex", marginBottom: 20 }}>
        <View style={{ paddingHorizontal: 10, padding: 10, maxHeight: "80%" }}>
          <TextInput
            label={'Search Country'}
            style={{ width: "100%", height: 50 }}
            mode="outlined"
            onChangeText={(query) => handleSearch(query)}
          />
        </View>
        <ScrollView style={{ maxWidth: 200, maxHeight: 500 }}>
          {filteredData.map((country) => {
            return (
              <View key={country.code}>
                <Pressable
                  style={{
                    backgroundColor: theme.colors.elevation.level2,
                    padding: 10,
                  }}
                  android_ripple={{
                    color: rippleColor(theme.colors.elevation.level2),
                  }}
                  onPress={() => {
                    props.setCountryCode(country.dial_code);
                    setFilteredData(countries);
                    closeMenu();
                   
                  }}
                >
                <View style={{display:'flex', flexDirection: 'row',justifyContent:'space-between'}}>
                  <Text style={{ color: theme.colors.onBackground }}>
                    {country.name}
                  </Text>
                  <Text style={{ color: theme.colors.outline}}>{country.dial_code}</Text>
                  </View>
                </Pressable>
                
              </View>
            );
          })}
        </ScrollView>
      </View>
    </Menu>
  );
}
