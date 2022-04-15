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
import React, { useContext, useEffect, useState } from "react";
import profileImg from "../assets/Profile_Avatar.png";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import UserContext from "../Context/UserContext";
import { getCategoryItems, getAllItems } from "../Services/ItemService";
import MainBar from "../Components/Navigation/MainBar"



export default function ProfileScreen() {

  const { currentUser } =
  useContext(UserContext)

  let name = currentUser[0].name;
  let currentUserId = currentUser[0].id

  const [tops, setTops] = useState();
  const [bottoms, setBottoms] = useState();
  const [shoes, setShoes] = useState();
  const [dresses, setDresses] = useState();
  const [headWear, setHeadWear] = useState();
  const [swimWear, setSwimWear] = useState();
  const [jewerly, setJewerly] = useState();
  const [accessories, setAccessories] = useState();
  const [other, setOther] = useState();
  const [allItems, setAllItems] = useState();
  const [isloaded, setIsLoaded] = useState(false);


  useEffect(async () => {
      setAllItems(await getAllItems(currentUserId));  
     setTops(await getCategoryItems("Tops", currentUserId))
     setBottoms(await getCategoryItems("Bottoms", currentUserId))
     setShoes(await getCategoryItems("Shoes", currentUserId))
     setDresses(await getCategoryItems("Dresses", currentUserId))
     setHeadWear(await getCategoryItems("HeadWear", currentUserId))
     setJewerly(await getCategoryItems("jewerly", currentUserId))
     setAccessories(await getCategoryItems("Accessories", currentUserId));
     setOther(await getCategoryItems("Other", currentUserId))
     setSwimWear(await getCategoryItems("SwimWear", currentUserId))
     setIsLoaded(true);
  }, [])
  

  return (
    <>
    <MainBar page="User Profile" />
    <SafeAreaView style={styles.container}>
      

      {isloaded ? 
      <>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Avatar source={profileImg} size="2xl" />
        </View>
        <View style={{ marginLeft: 20 }}>
          <Text style={[styles.title, { marginTop: 15, marginBottom: 5 }]}>
            {name}
         </Text> 
        </View>
      </View>

      <View style={styles.userInfoSection}>

        <View style={styles.row}>
          <Icon style={{color: '#777777'}} as={MaterialCommunityIcons} name="map-marker" size={5}></Icon>
          <Text style={{color: '#777777', marginLeft: 20}}>California, US</Text>
          </View>
        </View>

        {/* ROW 1 */}
        <View style={styles.infoBoxWrapper}>
      <View style={[styles.infoBox, {borderRightColor: 'black', borderRightWidth: 1}]}>
        <Text style={{color:"black", fontSize: 20}}>{allItems.length}</Text>
      <Text style={{color: '#777777'}}>Total Items</Text>
      </View>
      <View style={[styles.infoBox, {borderRightColor: 'black', borderRightWidth: 1}]}>
      <Text style={{color:"black", fontSize: 20}}>{tops.length}</Text>
      <Text style={{color: '#777777'}}>Tops</Text>
      </View>
        </View>
        {/* ROW 2 */}
        <View style={styles.infoBoxWrapper}>
      <View style={[styles.infoBox, {borderRightColor: 'black', borderRightWidth: 1}]}>
        <Text style={{color:"black", fontSize: 20}}>{bottoms.length}</Text>
      <Text style={{color: '#777777'}}>Bottoms</Text>
      </View>
      <View style={[styles.infoBox, {borderRightColor: 'black', borderRightWidth: 1}]}>
      <Text style={{color:"black", fontSize: 20}}>{dresses.length}</Text>
      <Text style={{color: '#777777'}}>Dresses</Text>
      </View>
        </View>

        {/* ROW 3 */}
        <View style={styles.infoBoxWrapper}>
      <View style={[styles.infoBox, {borderRightColor: 'black', borderRightWidth: 1}]}>
        <Text style={{color:"black", fontSize: 20}}>{headWear.length}</Text>
      <Text style={{color: '#777777'}}>Head Wear</Text>
      </View>
      <View style={[styles.infoBox, {borderRightColor: 'black', borderRightWidth: 1}]}>
      <Text style={{color:"black", fontSize: 20}}>{shoes.length}</Text>
      <Text style={{color: '#777777'}}>Shoes</Text>
      </View>
        </View>
    
        {/* ROW 4 */}
        <View style={styles.infoBoxWrapper}>
      <View style={[styles.infoBox, {borderRightColor: 'black', borderRightWidth: 1}]}>
        <Text style={{color:"black", fontSize: 20}}>{swimWear.length}</Text>
      <Text style={{color: '#777777'}}>Swim Wear</Text>
      </View>
      <View style={[styles.infoBox, {borderRightColor: 'black', borderRightWidth: 1}]}>
      <Text style={{color:"black", fontSize: 20}}>{jewerly.length}</Text>
      <Text style={{color: '#777777'}}>Jewerly</Text>
      </View>
        </View>
        {/* ROW 5 */}
        <View style={styles.infoBoxWrapper}>
      <View style={[styles.infoBox, {borderRightColor: 'black', borderRightWidth: 1}]}>
        <Text style={{color:"black", fontSize: 20}}>{accessories.length}</Text>
      <Text style={{color: '#777777'}}>Accessories</Text>
      </View>
      <View style={[styles.infoBox, {borderRightColor: 'black', borderRightWidth: 1}]}>
      <Text style={{color:"black", fontSize: 20}}>{other.length}</Text>
      <Text style={{color: '#777777'}}>Other</Text>
      </View>
        </View>
        </>
    :  null}
    </SafeAreaView>
    </>
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
  text:{
    fontSize: 30,
    fontFamily: "roboto",
  }
});
