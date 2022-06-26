import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddPerson from "../screens/AddPerson";
import PeopleScreen from "../screens/PeopleScreen";

const Stack = createNativeStackNavigator();

const PeopleNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="People" component={PeopleScreen} />
    <Stack.Screen
      options={{ headerShown: true }}
      name="AddPerson"
      component={AddPerson}
    />
  </Stack.Navigator>
);

export default PeopleNavigator;
