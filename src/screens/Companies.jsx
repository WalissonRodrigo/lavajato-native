import React, { memo, useState } from "react";
import { FlatList, View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { firestore } from "../services/firebase";

const Companies = ({navigation}) => {
  const [companies, setCompanies] = useState([]);
  firestore.collection("companies").onSnapshot((snapshot) => {
    const listData = [];
    snapshot.forEach((doc) => {
      const data = doc.data();
      listData.push({
        id: doc.id,
        ...data,
      });
    });
    setCompanies(listData);
  });
  return (
    <View>
      <Text style={styles.titleCompanies}>Empresas</Text>
      <FlatList
        data={companies}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
          >
            <View style={styles.itemList} key={item.id}>
              <Image
                style={styles.imgSize}
                source={{
                  uri: item.logo,
                }}
              />
              <Text style={styles.textList}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default memo(Companies);

const styles = StyleSheet.create({
  itemList: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 4,
    padding: 6,
    borderColor: "gray",
    borderStyle: "solid",
    borderWidth: 2,
  },
  textList: {
    fontSize: 24,
  },
  titleCompanies: {
    fontSize: 32,
    padding: 12,
  },
  imgSize: {
    width: 100,
    height: 100,
    padding: 12,
    resizeMode: "stretch",
  },
});
