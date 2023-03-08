import React from "react";
import { Text,View } from "react-native";
import globalStyle from "../styles/global";

export default function About(){
    return(
        <View style={globalStyle.content}>
            <Text style={{...globalStyle.title}}>
            My Notes - It is a Notepad kind of application which is an easy-to-use, intuitive, fast, elegant app for writing
            and managing notes.</Text>
            <Text style={{...globalStyle.title}}>But unfortunately it dosen't have a backend, so the data you save will no longer be available once the app gets restarted.</Text>
            <Text style={{...globalStyle.title,marginBottom:50}}>It is built using React Native with Expo CLI.
            </Text>
            <Text style={{alignSelf:'flex-end',...globalStyle.title}}>By: Akash Doddmani</Text>
        </View>
    )
}