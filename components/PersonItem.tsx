import { Text, View, StyleSheet, Pressable } from "react-native";
import moment from "moment";
import { Birthday } from "../screens/types";

const daysUntilBirthday = (birthday: Birthday) => {
  let now = moment().startOf("day");
  let birthdayDate = moment([2022, birthday.month - 1, birthday.day]);
  let days = moment(birthdayDate).diff(now, "days");
  if (days < 0) days = 365 + days;
  return days > 1 ? days + " days" : days + " day";
};

function PersonItem({
  name,
  birthday,
  onPress,
}: {
  name: string;
  birthday: Birthday;
  onPress: () => void;
}) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{`🎂 in ${daysUntilBirthday(
          birthday
        )}`}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    // alignSelf: "center",
    // borderColor: "lightgrey",
    borderRadius: 8,
    // borderWidth: 2,
    backgroundColor: "white",
    // width: "92%",
    height: 80,
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0,
    shadowRadius: 3,
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
