import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import globalStyle from "../styles/global";
import ModalComponent from "./modal";

export default function Home({ route, navigation }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [notes, setNotes] = useState([
    {
      name: "Sample Notes",
      description: `This is a sample description to just show you how it looks`,
      key: 1,
    },
  ]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <AntDesign
          name="addfile"
          size={24}
          style={{ marginRight: 20, marginTop: 8 }}
          color="#fff"
          onPress={() => setModalVisible(true)}
        />
      ),
    });
  });

  const deleteNote = (key) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.key != key));
  };

  const saveNotes = () => {
    if (title.length > 3) {
      if (description.length > 3) {
        setNotes((prevNotes) => [
          ...prevNotes,
          { name: title, description, key: Date.now() },
        ]);
        setDescription('');
        setTitle('');
        setModalVisible(false);
        Alert.alert("Done!", "Your new note has been added", [
          { text: "Okay" },
        ]);
      } else {
        Alert.alert("Oooops!!!", "Description should have atleast 3 chars", [
          { text: "Got it" },
        ]);
      }
    } else {
      Alert.alert("Oooops!!!", "Title should have atleast 3 chars", [
        { text: "Got it" },
      ]);
    }
  };

  return (
    <View style={globalStyle.content}>
      <ModalComponent
      title={title}
      description={description}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setTitle={setTitle}
        setDescription={setDescription}
        saveNotes={saveNotes}
      />
      {notes.length ? (
        <FlatList
          data={notes}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Details", item)}
            >
              <View style={{ ...globalStyle.card, ...globalStyle.notesCard }}>
                <Text style={globalStyle.title}>{item.name}</Text>
                <MaterialIcons
                  name="delete"
                  size={24}
                  color="#808080"
                  onPress={() => deleteNote(item.key)}
                />
              </View>
            </TouchableOpacity>
          )}
        />
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, color: "#808080", marginBottom: 300 }}>
            No notes available!
          </Text>
        </View>
      )}
    </View>
  );
}
