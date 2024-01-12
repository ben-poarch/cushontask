import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import FundCustomer from "./screens/FundCustomer";
import FundEmployer from "./screens/FundEmployer";
import NewFund from "./screens/NewFund";
import ViewFund from "./screens/ViewFund";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FundCustomer" component={FundCustomer} />
        <Stack.Screen name="FundEmployer" component={FundEmployer} />
        <Stack.Screen name="NewFund" component={NewFund} />
        <Stack.Screen name="ViewFund" component={ViewFund} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
