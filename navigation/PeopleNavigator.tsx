import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PersonScreen from "../screens/PersonScreen";
import PeopleScreen from "../screens/PeopleScreen";
import { RootStackParamList } from "../types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const PeopleNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="People" component={PeopleScreen} />
    <Stack.Screen
      options={{ headerShown: true }}
      name="Person"
      component={PersonScreen}
    />
  </Stack.Navigator>
);

export default PeopleNavigator;
