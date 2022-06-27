import { useState } from "react";
import { FlatList, Pressable, SafeAreaView, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import EditScreenInfo from "../components/EditScreenInfo";
import PersonItem from "../components/PersonItem";
import { Text, View } from "../components/Themed";

import { RootTabScreenProps } from "../types";
import moment from "moment";

type Birthday = {
  year: number;
  month: number;
  day: number;
};

type Person = {
  name: string;
  birthday: Birthday;
};

// const people: string[] = ["jay"];
let Jay = { name: "Jay", birthday: { year: 1997, month: 6, day: 29 } };
const initialList: Person[] = [Jay];

export default function PeopleScreen({
  navigation,
}: RootTabScreenProps<"PeopleTab">) {
  const [people, setPeople] = useState(initialList);

  const addPerson = (person: Person) => {
    const updatedPeople: Person[] = [...people, person];
    setPeople(updatedPeople);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>People</Text>
        <Pressable
          onPress={() => navigation.navigate("AddPerson", { addPerson })}
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
        renderItem={({ item: person }) => (
          <PersonItem name={person.name} birthday={person.birthday} />
        )}
      ></FlatList>
      {/* <EditScreenInfo path="/screens/PeopleScreen.tsx" /> */}
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
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
  },
  headerText: {
    alignSelf: "center",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
