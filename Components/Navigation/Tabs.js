import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import Dashboard from "../../Screens/Dashboard";
import AddItemScreen from "../../Screens/AddItemScreen";
import LookBookScreen from "../../Screens/LookbookScreen";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 20,
          marginHorizontal: 20,
          borderRadius: 15,
          height: 90,
          //Shadow...
          shadowColor: "#000",
          shadowOpacity: 0.06,
          shadowOffset: {
            width: 10,
            height: 10,
          },
        },
        tabBarActiveTintColor: "#e91e63",
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
        name="Dashboard"
        component={Dashboard}
      />
      <Tab.Screen options={{headerShown: false,}} name="Add item" component={AddItemScreen} />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="wardrobe" color={color} size={size} />
          ),
          headerShown: false,
        }}
        name="LookBook"
        component={LookBookScreen}
      />
      {/* <Tab.Screen name="Settings" component={Dashboard} /> */}
    </Tab.Navigator>
  );
};

// const styles = StyleSheet.create({
//     navBar: {
//         position: 'absolute',
//         bottom: 35,
//         marginHorizontal: 20,
//         // elevation: 0,
//         backgroundColor: '#ffffff',
//         // Max Height...
//         borderRadius: 15,
//         height: 60,
//         //Shadow...
//         shadowColor: '#000',
//         shadowOpacity: 0.06,
//         shadowOffset:{
//             width: 10,
//             height: 10
//         }
//     }
// });

export default Tabs;
