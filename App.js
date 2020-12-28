import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CardList from "./components/CardList";

const items = [
  { id: 0, author: "Bob Ross" },
  { id: 1, author: "Chuck Norris" },
];
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CardList items={items} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
