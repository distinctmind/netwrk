import moment from "moment";

export const daysUntilBirthday = (birthday: Date) => {
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

export const getBirthdayText = (birthday: Date) => {
  let date = moment(birthday);
  let month = date.format("MMMM");
  let day = date.format("D");
  return month + " " + day;
};
