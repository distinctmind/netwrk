import { useEffect, useState } from "react";
import { Text, StyleSheet, View, Alert } from "react-native";
import { RootStackScreenProps } from "../types";

import Button from "../components/Button";
import TextInput from "../components/TextInput";
import DateInput from "../components/DateInput";
import { Person } from "./types";

const titles = {
  edit: "Save changes.",
  add: "Add Person",
};

function PersonScreen({ navigation, route }: RootStackScreenProps<"Person">) {
  const person = route.params?.person;
  const index = person?.id ?? -1;
  const mode = route.params.mode;
  const title = person?.name ?? "Add Person";

  useEffect(() => {
    navigation.setOptions({ title: title });
  }, []);

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
      let person: Person = { id: index, name: name, birthday: date };
      if (mode === "add") {
        let addPerson = route.params?.addPerson;
        if (addPerson) addPerson(person);
      } else if (mode === "edit") {
        let editPerson = route.params?.editPerson;
        if (editPerson && index !== undefined) editPerson(person);
      }
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
      <Button title={`${mode} Person`} onPress={onPress} />
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
