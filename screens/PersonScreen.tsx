import { useEffect, useState } from "react";
import { Text, StyleSheet, View, Alert } from "react-native";
import { RootStackScreenProps } from "../types";

import Button from "../components/Button";
import TextInput from "../components/TextInput";
import DateInput from "../components/DateInput";
import { Person } from "./types";

function PersonScreen({ navigation, route }: RootStackScreenProps<"Person">) {
  const person = route.params?.person;

  const getBirthday = () => {
    return person ? person.birthday : new Date();
  };

  const getName = () => {
    return person ? person.name : "";
  };

  const [name, setName] = useState(getName());
  const [date, setDate] = useState(getBirthday());

  const onPress = () => {
    if (name && date) {
      let person: Person = { name: name, birthday: date };
      route.params.addPerson(person);
      navigation.pop();
    } else {
      Alert.alert("Please specify a name and birthday.");
    }
  };

  const onSelectDate = (selectedDate: Date) => {
    if (selectedDate) setDate(selectedDate);
  };

  return (
    <View style={styles.container}>
      <TextInput name={name} onChangeText={(text: string) => setName(text)} />
      <DateInput birthday={date} onSelectDate={onSelectDate} />
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

export default PersonScreen;
