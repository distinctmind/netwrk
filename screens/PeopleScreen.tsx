import { useState } from "react";
import { FlatList, Pressable, SafeAreaView, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import EditScreenInfo from "../components/EditScreenInfo";
import PersonItem from "../components/PersonItem";
import { Text, View } from "../components/Themed";

import { RootTabScreenProps } from "../types";
import { Person } from "./types";

const [EDIT, ADD] = ["edit", "add"];

let Dad: Person = {
  id: 0,
  name: "Dad",
  birthday: new Date(1972, 8, 7),
};
const initialList = [Dad];

function Separator() {
  return <View style={styles.separator} />;
}

export default function PeopleScreen({
  navigation,
}: RootTabScreenProps<"PeopleTab">) {
  const [people, setPeople] = useState(initialList);

  const addPerson = (person: Person) => {
    person.id = people.length;
    const updatedPeople: Person[] = [...people, person];
    setPeople(updatedPeople);
  };

  const editPerson = (person: Person) => {
    const updatedPeople = [...people];
    updatedPeople[person.id] = person;
    setPeople(updatedPeople);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>People</Text>
        <Pressable
          onPress={() =>
            navigation.navigate("Person", { mode: ADD, addPerson })
          }
          style={[
            styles.addButton,
            // ({ pressed }) => ({
            //   opacity: pressed ? 0.5 : 1,
            // }),
          ]}
        >
          <FontAwesome
            name="plus"
            size={25}
            //color={Colors[colorScheme].text}
            style={{ marginRight: 15 }}
          />
        </Pressable>
      </View>
      <FlatList
        data={people}
        contentContainerStyle={{ padding: 25 }}
        renderItem={({ item: person }) => (
          <PersonItem
            name={person.name}
            birthday={person.birthday}
            onPress={() =>
              navigation.navigate("Person", {
                person,
                mode: EDIT,
                editPerson,
              })
            }
          />
        )}
        // ItemSeparatorComponent={Separator}
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  addButton: {
    position: "absolute",
    right: 10,
    alignSelf: "center",
  },
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
  },
  headerText: {
    alignSelf: "center",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 10,
  },
  separator: {
    alignSelf: "center",
    height: 0.3,
    width: "88%",
    backgroundColor: "#B0B0B0",
    borderRadius: 10,
  },
});
