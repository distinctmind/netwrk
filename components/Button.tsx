import { Pressable, Text, StyleSheet, View } from "react-native";

function Button({ title, onPress }: { title: string; onPress: () => void }) {
  return (
    <View style={styles.view}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "black",
    borderRadius: 20,
    width: 100,
    height: 33,
    justifyContent: "center",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontWeight: "600",
    textTransform: "capitalize",
  },
  view: {
    paddingHorizontal: 20,
    marginLeft: 5,
    marginTop: 10,
  },
});

export default Button;
