import { Text, View, StyleSheet } from "react-native";

function PersonItem({ name }: { name: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "orange",
    height: 80,
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    textTransform: "capitalize",
    fontWeight: "bold",
    paddingTop: 5,
    paddingLeft: 30,
  },
});

export default PersonItem;
