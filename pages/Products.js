// pages/ThirdPage.js
import React from "react";
import {
  SafeAreaView,
  FlatList,
  Pressable,
  Text,
  Image,
  StyleSheet,
} from "react-native";

const DATA = [
  {
    id: "1",
    title: "Wireless Headphones",
    image: "https://picsum.photos/300",
  },
  {
    id: "2",
    title: "Smart Watch",
    image: "https://picsum.photos/300",
  },
  {
    id: "3",
    title: "Bluetooth Speaker",
    image: "https://picsum.photos/300",
  },
];

const ThirdPage = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <Pressable
      style={styles.item}
      onPress={() => navigation.navigate("Details", { item })}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#f8f9fa",
  },
  item: {
    flexDirection: "row",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ThirdPage;
