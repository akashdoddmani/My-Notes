import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "../screens/about";

const Stack = createNativeStackNavigator();

export default function AboutStack({navigation}) {


    const toggleDrawer=()=>{
        navigation.toggleDrawer();
    }

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
        name="Home"
        component={About}
        options={{
          title: "About My Notes",
          headerLeft: () => (
            <MaterialIcons name="menu" size={30} color="#fff" onPress={toggleDrawer} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
