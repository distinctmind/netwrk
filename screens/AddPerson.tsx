import React from "react";
import { TextInput, StyleSheet, View, Button } from "react-native";

function AddPerson() {
  return (
    <View style={styles.container}>
      <View style={styles.name}>
        <TextInput style={styles.textInput} placeholder="Name" />
        <View style={styles.separator} />
      </View>
      <Button title="Add Person" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    fontSize: 20,
  },
  name: {
    padding: 20,
    marginVertical: 15,
    // alignContent: "center",
  },
  separator: {
    marginTop: 10,
    height: 1,
    width: "100%",
    backgroundColor: "lightgrey",
  },
});

export default AddPerson;
