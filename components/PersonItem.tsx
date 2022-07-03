import { Animated, Text, View, StyleSheet, Pressable } from "react-native";
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
  scale,
  birthday,
  onPress,
}: {
  name: string;
  scale: Animated.AnimatedInterpolation;
  birthday: Date;
  onPress: () => void;
}) {
  return (
    <Animated.View style={{ transform: [{ scale: scale }] }}>
      <Pressable onPress={onPress}>
        {/* <Animated.View style={[styles.container, { transform: [{ scale }] }]}> */}
        <View style={styles.container}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{getBirthdayText(birthday)}</Text>
        </View>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.8)",
    height: 111,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginBottom: 25,
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
