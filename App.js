
import { StyleSheet} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./Screens/WelcomeScreen"
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import AddItemScreen from "./Screens/AddItemScreen";
import ItemDetailScreen from "./Screens/ItemDetailScreen";
import OutfitCreateScreen from "./Screens/OutfitCreateScreen";
import OutfitDetailScreen from "./Screens/OutfitDetailScreen";
import OutfitScreen from "./Screens/OufitScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import FavoriteScreen from "./Screens/FavoriteScreen";

import Dashboard from "./Screens/Dashboard";
import Tabs from "./Components/Navigation/Tabs";
import CameraOpen from "./Components/CameraOpen";
import DashboardActionBtn from "./Components/DashboardActionBtn";
import LookBookActionBtn from "./Components/LookBookActionBtn";
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
              component={WelcomeScreen}
              name="welcome"
              // options={{ headerShown: false }}
              // headerTitle="Test"
            />
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
              component={OutfitDetailScreen}
              name="OutfitDetails"
               options={{headerShown: false}}
            />
            <Stack.Screen
              component={AddItemScreen}
              name="AddItem"
               options={{headerShown: false}}
            />
            <Stack.Screen
              component={OutfitScreen}
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
               title=''
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

            <Stack.Screen
              component={LookBookActionBtn}
              name="LookBookBtn"
               options={{headerShown: false}}
            />
            <Stack.Screen
              component={OutfitCreateScreen}
              name="Select"
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
