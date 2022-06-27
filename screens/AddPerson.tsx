import { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import { RootStackScreenProps } from "../types";

import TextInput from "../components/TextInput";
import DateInput from "../components/DateInput";

function AddPerson({ navigation, route }: RootStackScreenProps<"AddPerson">) {
  const [name, setName] = useState("");

  const onPress = () => {
    route.params.addPerson(name);
    navigation.pop();
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
