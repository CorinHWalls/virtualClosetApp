
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import AddItemScreen from "./Screens/AddItemScreen";
import ItemDetailScreen from "./Screens/ItemDetailScreen";
import LookbookScreen from "./Screens/LookbookScreen";
import Dashboard from "./Screens/Dashboard";
import Tabs from "./Components/Navigation/Tabs";
import { NativeBaseProvider } from "native-base";
import { UserProvider} from "./Context/UserContext";
import stackHeader from "./Components/Navigation/stackHeader"



function HomeTabs(){
return(
    
    <Tabs />

  )
}

export default function App() {
  const Stack = createNativeStackNavigator();
  

  return (
    <NativeBaseProvider>

      <UserProvider>
        <NavigationContainer>
          <Stack.Navigator
          headerMode="screen"
          screenOptions={{
            header:() => {
              <stackHeader />
            }
          }}
          >
            <Stack.Screen
              component={LoginScreen}
              name="LoginScreen"
              // options={{ headerShown: false }}
              // headerTitle="Test"
            />
            <Stack.Screen
              component={RegisterScreen}
              name="RegisterScreen"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              component={HomeTabs}
              name="Dashboard"
              //  options={{headerShown: false}}
            />
            <Stack.Screen
              component={ItemDetailScreen}
              name="Details"
               options={{headerShown: false}}
            />
            <Stack.Screen
              component={AddItemScreen}
              name="AddItem"
               options={{headerShown: false}}
            />
            <Stack.Screen
              component={LookbookScreen}
              name="Lookbook"
               options={{headerShown: false}}
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
