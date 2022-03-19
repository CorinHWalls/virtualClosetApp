import {
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity
} from "react-native";
import { Avatar, Icon } from "native-base";
import React, { useContext} from "react";
import profileImg from "../assets/Profile_Avatar.png";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import UserContext from "../Context/UserContext";


export default function ProfileScreen() {

  const { currentUser } =
  useContext(UserContext)
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Avatar source={profileImg} size="2xl" />
          
        </View>
        <View style={{ marginLeft: 20 }}>
          <Text style={[styles.title, { marginTop: 15, marginBottom: 5 }]}>
            Corin
         </Text> 
        </View>
      </View>

      <View style={styles.userInfoSection}>

        <View style={styles.row}>
          <Icon style={{color: '#777777'}} as={MaterialCommunityIcons} name="map-marker" size={5}></Icon>
          <Text style={{color: '#777777', marginLeft: 20}}>California, US</Text>
          </View>
        </View>

        <View style={styles.infoBoxWrapper}>
      <View style={[styles.infoBox, {borderRightColor: 'black', borderRightWidth: 1}]}>
        <Text style={{color:"black", fontSize: 20}}>2</Text>
      <Text style={{color: '#777777'}}>Total Items</Text>
      </View>
      <View style={[styles.infoBox, {borderRightColor: 'black', borderRightWidth: 1}]}>
      <Text style={{color:"black", fontSize: 20}}>2</Text>
      <Text style={{color: '#777777'}}>Tops</Text>
      </View>
        </View>
        <View style={styles.infoBoxWrapper}>
      <View style={[styles.infoBox, {borderRightColor: 'black', borderRightWidth: 1}]}>
      <Text style={{color:"black", fontSize: 20}}>2</Text>
      <Text style={{color: '#777777'}}>Bottoms</Text>
      </View>
      <View style={[styles.infoBox, {borderRightColor: 'black', borderRightWidth: 1}]}>
      <Text style={{color:"black", fontSize: 20}}>2</Text>
      <Text style={{color: '#777777'}}>Dresses</Text>
      </View>
        </View>
        <View style={styles.infoBoxWrapper}>
      <View style={[styles.infoBox, {borderRightColor: 'black', borderRightWidth: 1}]}>
      <Text style={{color:"black", fontSize: 20}}>2</Text>
      <Text style={{color: '#777777'}}>Shoes</Text>
      </View>
      <View style={[styles.infoBox, {borderRightColor: 'black', borderRightWidth: 1}]}>
      <Text style={{color:"black", fontSize: 20}}>2</Text>
      <Text style={{color: '#777777'}}>Head Wear</Text>
      </View>
        </View>
        <View style={styles.infoBoxWrapper}>
      <View style={[styles.infoBox, {borderRightColor: 'black', borderRightWidth: 1}]}>
      <Text style={{color:"black", fontSize: 20}}>2</Text>
      <Text style={{color: '#777777'}}>Swim Wear:</Text>
      </View>
      <View style={[styles.infoBox, {borderRightColor: 'black', borderRightWidth: 1}]}>
      <Text style={{color:"black", fontSize: 20}}>2</Text>
      <Text style={{color: '#777777'}}>Jewelry</Text>
      </View>
        </View>
        <View style={styles.infoBoxWrapper}>
      <View style={[styles.infoBox, {borderRightColor: 'black', borderRightWidth: 1}]}>
      <Text style={{color:"black", fontSize: 20}}>2</Text>
      <Text style={{color: '#777777'}}>Accessories</Text>
      </View>
      <View style={[styles.infoBox, {borderRightColor: 'black', borderRightWidth: 1}]}>
      <Text style={{color:"black", fontSize: 20}}>2</Text>
      <Text style={{color: '#777777'}}>Other</Text>
      </View>
        </View>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(239, 218, 215)",
 
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    borderTopColor: "black",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 80,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
});
