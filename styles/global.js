import { StyleSheet } from "react-native";

export default StyleSheet.create({
  content: {
    flex:1,
    padding: 40,
    backgroundColor:'#181818',
  },
  card: {
    color:'#fff',
    flex:1,
    borderWidth: 0.5,
    borderColor: "#808080",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  notesCard: { flexDirection: "row", justifyContent: "space-between" },
  detailCard:{
    flex:1,
    minHeight:700,
    marginBottom: 50,
    fontSize:18,
  },
  title:{
    color:'#fff',
    fontSize:16,
  },
});
