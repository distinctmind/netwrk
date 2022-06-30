import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

function DateInput({
  birthday,
  onSelectDate,
}: {
  birthday: Date;
  onSelectDate: any;
}) {
  const [date, setDate] = useState(birthday);

  const onChange = (event: any, selectedDate: Date | undefined) => {
    if (selectedDate instanceof Date) {
      setDate(selectedDate);
      onSelectDate(selectedDate);
    }
  };

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
        onChange={onChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    padding: 20,
  },
  date: {
    marginLeft: -10,
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
