import { Text, View, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const date = new Date();

function DateInput() {
  return (
    <View style={styles.view}>
      <Text style={styles.label}>Birthday</Text>
      <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode={"date"}
        is24Hour={true}
        style={styles.date}
        accentColor="black"
        // onChange={onChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    padding: 20,
    // backgroundColor: "orange",
  },
  date: {
    width: 125,
  },
  label: {
    color: "#505050",
    fontSize: 17,
    fontWeight: "600",
    marginLeft: 4,
    marginVertical: 7,
  },
});

export default DateInput;
