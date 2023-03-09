import { StyleSheet, Text, View } from "react-native";
import HomeStack from "./routes/homeStack";
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AboutStack from "./routes/aboutStack";
import registerNNPushToken from 'native-notify';

const Drawer=createDrawerNavigator();
export default function App() {
  registerNNPushToken(6653, 'Z7FwYfgBvidavdqtbGruga');
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{drawerLabelStyle:{color:'#fff'}, headerShown:false,drawerStyle:{backgroundColor:'#181818',paddingTop:50}}}>
        <Drawer.Screen name="Home" component={HomeStack}/>
        <Drawer.Screen name="About" component={AboutStack}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
