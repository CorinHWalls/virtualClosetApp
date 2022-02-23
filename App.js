
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import Dashboard from "./Screens/Dashboard";
import { NativeBaseProvider } from "native-base";
import { UserProvider} from "./Context/UserContext";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NativeBaseProvider>

      <UserProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              component={LoginScreen}
              name="LoginScreen"
              options={{ headerShown: false }}
              headerTitle="Test"
            />
            <Stack.Screen
              component={RegisterScreen}
              name="RegisterScreen"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              component={Dashboard}
              name="Dashboard"
              //  options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </UserProvider>


    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
