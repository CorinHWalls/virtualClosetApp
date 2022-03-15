
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import AddItemScreen from "./Screens/AddItemScreen";
import ItemDetailScreen from "./Screens/ItemDetailScreen";
import LookbookScreen from "./Screens/LookbookScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import FavoriteScreen from "./Screens/FavoriteScreen";
import Dashboard from "./Screens/Dashboard";
import Tabs from "./Components/Navigation/Tabs";
import CameraOpen from "./Components/CameraOpen";
import DashboardActionBtn from "./Components/DashboardActionBtn";
import { NativeBaseProvider, extendTheme, } from "native-base";
import { UserProvider} from "./Context/UserContext";
import { LogBox } from "react-native"




export default function App() {

  LogBox.ignoreAllLogs(true)
  const Stack = createNativeStackNavigator();
  const theme = extendTheme({
    colors:{
      primary: {
        89: '#EFDAD7',
        90: "#9AD0EC"
      }
    }
  })
 
  
  function HomeTabs(){
  return(
   
   <Tabs /> 
      
    
  
    )
  }

  return (
    <NativeBaseProvider theme={theme}>

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
              component={HomeTabs}
              name="Dashboard"
              //  options={{headerShown: false}}
            />

            <Stack.Screen
              component={RegisterScreen}
              name="RegisterScreen"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              component={ItemDetailScreen}
              name="ItemDetails"
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
            <Stack.Screen
              component={ProfileScreen}
              name="Profile"
               options={{headerShown: false}}
            />
            <Stack.Screen
              component={FavoriteScreen}
              name="Favorite"
               options={{headerShown: false}}
            />
            <Stack.Screen
              component={CameraOpen}
              name="Camera"
               options={{headerShown: false}}
            />
            <Stack.Screen
              component={DashboardActionBtn}
              name="Gallery"
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
