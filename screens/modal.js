import React from "react";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import globalStyle from "../styles/global";
import { View,Text,Modal,TextInput } from "react-native";


export default function ModalComponent({title,description,modalVisible,setModalVisible,setTitle,setDescription,saveNotes}){
    return(
        <Modal animationType="slide" visible={modalVisible}>
        <View style={globalStyle.content}>
          <View style={{ ...globalStyle.notesCard, alignItems: "center" }}>
            <Text style={{ ...globalStyle.title, fontSize: 24 }}>
              Add new Notes
            </Text>
            <FontAwesome name="save" size={24} color="#fff" onPress={saveNotes}/>
            <MaterialIcons
              name="cancel"
              size={24}
              color="#fff"
              onPress={() => setModalVisible(false)}
            />
          </View>
          <View
            style={{
              borderBottomWidth: 0.5,
              borderBottomColor: "#808080",
              marginTop: 10,
            }}
          ></View>
          <View>
            <TextInput
            placeholder="Title"
              style={{
                borderWidth: 0.5,
                borderColor: "#808080",
                borderRadius: 5,
                padding:10,
                fontSize:18,
                color:'#fff',
                marginTop:20,
              }}
              value={title}
              onChangeText={(val)=>setTitle(val)}
              placeholderTextColor='#808080'
            />
            <TextInput
            placeholder="Description..."
            multiline
              style={{
                borderWidth: 0.5,
                borderColor: "#808080",
                borderRadius: 5,
                padding:10,
                fontSize:18,
                color:'#fff',
                marginTop:20,
              }}
              value={description}
              onChangeText={(val)=>setDescription(val)}
              placeholderTextColor='#808080'
            />
          </View>
        </View>
      </Modal>
    )   
}