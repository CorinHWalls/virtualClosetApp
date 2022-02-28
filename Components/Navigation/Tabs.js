import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, Image, View } from "react-native";
import Dashboard from "../../Screens/Dashboard";
import AddItemScreen from "../../Screens/AddItemScreen";
import LookBookScreen from "../../Screens/LookbookScreen";
import Plus from "../../assets/plus.png";

const Tab = createBottomTabNavigator();

const Tabs = () => {


  return (

    ///The Menu is the Tab.Navigator
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
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
        name="Dashboard"
        component={Dashboard}
      />
      <Tab.Screen
        options={{ tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="cards-heart" color={color} size={size} />
        ),}}
        name="Add item"
        component={AddItemScreen}
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
        name="LookBook"
        component={LookBookScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
          headerShown: false,
        }}
        name="Settings"
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
