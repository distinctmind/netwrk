import { Text, View, StyleSheet } from "react-native";
import moment from "moment";
import { Birthday } from "../screens/types";

const daysUntilBirthday = (birthday: Birthday) => {
  let now = moment().startOf("day");
  let birthdayDate = moment([2022, birthday.month - 1, birthday.day]);
  let days = moment(birthdayDate).diff(now, "days");
  if (days < 0) days = 365 + days;
  return days > 1 ? days + " days" : days + " day";
};

function PersonItem({ name, birthday }: { name: string; birthday: Birthday }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.subtitle}>{`🎂 in ${daysUntilBirthday(
        birthday
      )}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "orange",
    height: 80,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    textTransform: "capitalize",
    fontWeight: "bold",
    paddingTop: 5,
    paddingLeft: 30,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    paddingTop: 10,
    paddingLeft: 30,
  },
});

export default PersonItem;
