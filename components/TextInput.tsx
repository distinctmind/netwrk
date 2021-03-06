import { Text, TextInput, View, StyleSheet } from "react-native";

function AppTextInput({
  name,
  onChangeText,
}: {
  name: string;
  onChangeText: (text: string) => void;
}) {
  return (
    <View style={styles.view}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        defaultValue={name}
        style={styles.input}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "lightgrey",
    borderWidth: 2,
    fontSize: 20,
    height: 36,
    paddingLeft: 15,
    width: 180,
  },
  label: {
    color: "#505050",
    fontSize: 17,
    fontWeight: "600",
    marginLeft: 4,
    marginVertical: 7,
  },
  view: {
    paddingLeft: 20,
    paddingTop: 20,
    // marginVertical: 15,
  },
});

export default AppTextInput;
