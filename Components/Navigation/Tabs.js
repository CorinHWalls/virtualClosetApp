import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity, Image, View } from "react-native";
import Dashboard from "../../Screens/Dashboard";
import AddItemScreen from "../../Screens/AddItemScreen";
import LookBookScreen from "../../Screens/LookbookScreen";
import ProfileScreen from "../../Screens/ProfileScreen";
import FavoriteScreen from "../../Screens/FavoriteScreen";
import Plus from "../../assets/plus.png";
import UserContext from "../../Context/UserContext";
import React, { useContext } from "react";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  

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
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="hanger" color={color} size={size} />
          ),
          headerShown: false,
        }}
        name="Tabs"
        component={Dashboard}
      />
      <Tab.Screen
        options={{ tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="cards-heart" color={color} size={size} />
        ),}}
        name="Favorite"
        component={FavoriteScreen}
      />
      {/* Add icon */}
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity>
                <View style={{
                    width: 55,
                    height: 55,
                    backgroundColor:"#BB6464",
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 40,
                    borderRadius: 50
                }}>
            <Image source={Plus} style={{
                width: 25,
                height: 25,
                tintColor: 'white',
            }} />
                </View>
            </TouchableOpacity>
          ),
          headerShown: false,
        }}
        name={"Action Button"}
        component={AddItemScreen}
      />
      <Tab.Screen
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
