import { useState } from "react";
import { Text, StyleSheet, View, Alert } from "react-native";
import { RootStackScreenProps } from "../types";

import Button from "../components/Button";
import TextInput from "../components/TextInput";
import DateInput from "../components/DateInput";

function AddPerson({ navigation, route }: RootStackScreenProps<"AddPerson">) {
  const [name, setName] = useState("");

  const onPress = () => {
    if (name) {
      let person = { name: name, birthday: new Date() };
      route.params.addPerson(person);
      navigation.pop();
    } else {
      Alert.alert("You have to specify a name");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput onChangeText={(text: string) => setName(text)} />
      <DateInput />
      <Button title="Add Person" onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default AddPerson;
