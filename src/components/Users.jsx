import React, { useState } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { firestore } from "../services/firebase";

export default function Users() {
  const [users, setUsers] = useState([]);
  firestore.collection("users").onSnapshot((snapshot) => {
    const tempUsers = [];
    snapshot.forEach((doc) => {
      const data = doc.data();
      tempUsers.push({
        id: doc.id,
        ...data,
      });
    });
    setUsers(tempUsers);
  });
  return (
    <View>
      <Text style={styles.titleUser}>Usuários</Text>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <View style={styles.itemList}>
            <Text style={styles.textList}>id: {item.id}</Text>
            <Text style={styles.textList}>nome: {item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemList: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 12,
  },
  textList: {
    fontSize: 24,
  },
  titleUser: {
    fontSize: 32,
    padding: 12,
  },
});
