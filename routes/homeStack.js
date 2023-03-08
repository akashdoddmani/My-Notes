import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import DetailedNotes from "../screens/detailedNotes";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

export default function HomeStack({ navigation }) {
  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#202020",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 24,
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="My Notes"
        component={Home}
        options={() => ({
          title: "My Notes",
          headerLeft: () => (
            <MaterialIcons
              style={{ marginLeft: 10 }}
              name="menu"
              size={30}
              color="#fff"
              onPress={toggleDrawer}
            />
          ),
          headerRight: () => (
            <AntDesign/>
          ),
        })}
      />
      <Stack.Screen
        name="Details"
        component={DetailedNotes}
        options={({ route }) => ({
          title: route.params.name,
          headerTitleStyle: {
            fontSize: 20,
          },
          headerTitleAlign: "left",
        })}
      />
    </Stack.Navigator>
  );
}
