import { Text, View, StyleSheet, Pressable } from "react-native";
import moment from "moment";

const daysUntilBirthday = (birthday: Date) => {
  let now = moment().startOf("day");

  //To get the days until birthday, we set the year to current year.
  let birthdayDate = moment([
    now.year(),
    birthday.getMonth(),
    birthday.getDate(),
  ]);
  let daysLeft = moment(birthdayDate).diff(now, "days");
  if (daysLeft < 0) daysLeft = 365 + daysLeft;
  return daysLeft;
};

const getBirthdayText = (birthday: Date) => {
  const daysLeft = daysUntilBirthday(birthday);
  if (daysLeft === 0) {
    return "🎂 is today!";
  } else if (daysLeft === 1) {
    return "🎂 is tomorrow";
  } else {
    return `🎂 in ${daysLeft} days`;
  }
};

function PersonItem({
  name,
  birthday,
  onPress,
}: {
  name: string;
  birthday: Date;
  onPress: () => void;
}) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{getBirthdayText(birthday)}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: "white",
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
