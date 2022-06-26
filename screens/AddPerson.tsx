import { useState } from "react";
import { TextInput, StyleSheet, View, Button } from "react-native";
import { RootStackScreenProps } from "../types";

function AddPerson({ navigation, route }: RootStackScreenProps<"AddPerson">) {
  const [name, setName] = useState("");

  const onPress = () => {
    route.params.addPerson(name);
    navigation.pop();
  };

  return (
    <View style={styles.container}>
      <View style={styles.name}>
        <TextInput
          style={styles.textInput}
          placeholder="Name"
          onChangeText={(text) => setName(text)}
        />
        <View style={styles.separator} />
      </View>
      <Button title="Add Person" onPress={onPress} />
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
