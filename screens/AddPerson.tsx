import { useState } from "react";
import { Text, StyleSheet, View, Alert } from "react-native";
import { RootStackScreenProps } from "../types";

import Button from "../components/Button";
import TextInput from "../components/TextInput";
import DateInput from "../components/DateInput";
import { Birthday, Person } from "./types";

var birthday: Birthday;

function AddPerson({ navigation, route }: RootStackScreenProps<"AddPerson">) {
  const [name, setName] = useState("");

  const onPress = () => {
    if (name && birthday) {
      let person: Person = { name: name, birthday: birthday };
      route.params.addPerson(person);
      navigation.pop();
    } else {
      Alert.alert("Please specify a name and birthday.");
    }
  };

  const onSelectDate = (selectedDate: Date) => {
    if (selectedDate) {
      birthday = {
        year: selectedDate.getFullYear(),
        month: selectedDate.getMonth() + 1,
        day: selectedDate.getDate(),
      };
    }
  };

  return (
    <View style={styles.container}>
      <TextInput onChangeText={(text: string) => setName(text)} />
      <DateInput onSelectDate={onSelectDate} />
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
