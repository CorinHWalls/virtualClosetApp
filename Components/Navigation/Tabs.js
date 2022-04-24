import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Dashboard from "../../Screens/Dashboard";

import LookBookScreen from "../../Screens/OufitScreen";
import ProfileScreen from "../../Screens/ProfileScreen";
import FavoriteScreen from "../../Screens/FavoriteScreen";
import React, { useContext} from "react";
import UserContext from "../../Context/UserContext";


const Tab = createBottomTabNavigator();

const Tabs = () => {
  
  const {setSelecting } =
  useContext(UserContext);

  return (
    ///The Menu is the Tab.Navigator
    <>
 
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 20,
          marginHorizontal: 20,
          borderRadius: 15,
          height: 60,
          //Shadow...
          shadowColor: "#000",
          shadowOpacity: 0.06,
          shadowOffset: {
            width: 10,
            height: 10,
          },
        },
        tabBarActiveTintColor: "#9AD0EC",
      }}
    >
      <Tab.Screen
        style={{position: "absolute"}}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="hanger" color={color} size={size} />
          ),
          headerShown: false,
        }}
        name="Closet Dashboard"
        component={Dashboard}
        onPress={() => setSelecting(false)}
      />
      <Tab.Screen
         style={{position: "absolute"}}
        options={{ tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="cards-heart" color={color} size={size} />
        ),
        headerShown: false,
      }}
        name="Favorite Items"
        component={FavoriteScreen}
      />
     
      <Tab.Screen
       style={{position: "absolute"}}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="wardrobe" color={color} size={size} />
          ),
          headerShown: false,
        }}
        name="Lookbook"
        component={LookBookScreen}
      />
      <Tab.Screen
         style={{position: "absolute"}}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
          headerShown: false,
        }}
        name="Profile"
        component={ProfileScreen}
      />
      {/* <Tab.Screen name="Settings" component={Dashboard} /> */}
    </Tab.Navigator>
      </>
  );
};



export default Tabs;
