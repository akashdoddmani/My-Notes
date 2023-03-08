import React from "react";
import { ScrollView, Text, View } from "react-native";
import globalStyle from "../styles/global";
export default function DetailedNotes({ route }) {
  const { name, description } = route.params;
  return (
    <ScrollView style={globalStyle.content}>
        <Text style={{...globalStyle.card,...globalStyle.detailCard}}>{description}</Text>
    </ScrollView>
  );
}
