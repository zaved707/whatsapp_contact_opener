import React from "react";
import { BlurView } from "@react-native-community/blur";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Pressable,
  Text,
  FlatList,
  useColorScheme,
  Modal,
  View,
  KeyboardAvoidingView,
} from "react-native";
import { useTheme, TextInput, Menu, Button, Divider } from "react-native-paper";
import rippleColor from "../utilities/rippleEffectColorCalculator";

import * as Linking from "expo-linking";
import countryCodes from "../utilities/countryCodes";

export default function CountryMenu(props) {
  const theme = useTheme();
  const colorScheme = useColorScheme();
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
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={() => {
        props.setModalVisible(!props.modalVisible);
      }}
    >
      <Pressable
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}
        onPress={() => props.setModalVisible(false)}
      >
        <View
          style={{
            maxHeight: "70%",
            backgroundColor: theme.colors.secondaryContainer,
          }}
        >
          <View style={{ width: 300 }}>
            <View
              style={{ paddingHorizontal: 10, padding: 10, maxHeight: "80%" }}
            >
              <TextInput
                label={"Search Country"}
                style={{ width: "100%", height: 50 }}
                mode="outlined"
                onChangeText={(query) => handleSearch(query)}
              />
            </View>

            <FlatList
              style={{ marginTop: 10 }}
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
                        props.setModalVisible(false);
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
        </View>
      </Pressable>
    </Modal>
  );
}
