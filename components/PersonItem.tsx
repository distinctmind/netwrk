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

const yearsOld = (birthday: Date) => {
  let now = new Date();
  return now.getFullYear() - birthday.getFullYear();
};

const getBirthdayText = (birthday: Date) => {
  let date = moment(birthday);
  let month = date.format("MMMM");
  let day = date.format("D");
  return month + " " + day;
};

const getDaysLeft = (birthday: Date) => {
  const daysLeft = daysUntilBirthday(birthday);
  if (daysLeft === 0) {
    return "Today!";
  } else if (daysLeft === 1) {
    return "1 day";
  } else {
    return daysLeft + " days";
  }
};

/*
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
*/

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
          <Text style={styles.subtitle}>{`Turns ${yearsOld(
            birthday
          )} on ${getBirthdayText(birthday)} `}</Text>
          {/* <Text style={styles.subtitle}>{getBirthdayText(birthday)}</Text> */}
          <Text style={styles.days}>{getDaysLeft(birthday)}</Text>
        </View>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  days: {
    position: "absolute",
    paddingRight: 30,
    alignSelf: "flex-end",
    fontWeight: "500",
  },
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
    fontSize: 16,
    fontWeight: "500",
    paddingTop: 10,
    paddingLeft: 30,
  },
});

export default PersonItem;
