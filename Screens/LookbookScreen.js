import {
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import LookBookActionBtn from "../Components/LookBookActionBtn";
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../Context/UserContext";
import MainBar from "../Components/Navigation/MainBar";
import { getOutfitByUserId } from "../Services/OutfitService";
const { height, width } = Dimensions.get("window");

export default function LookbookScreen() {
  const { currentUser, setSelectedItemId, loginPending, setLoginPending } =
    useContext(UserContext);
  const currentUserId = currentUser[0].id;
  const [outfits, setOutfits] = useState();
 

  //check which obj in array have equal parameter
  const objectsAreEqual = (a, b) => a.outfitName === b.outfitName;

  useEffect(async () => {
    //Get all Outfits by userId
    const allData = await getOutfitByUserId(currentUserId);
    //Handle displaying outfits
    const result =[];
  
    allData.forEach(item => {
      const outfitsInResult = result.find(resultItem => objectsAreEqual(item, resultItem));

      if(!outfitsInResult)
      {
        result.push(item)
      }
  
    })
    setOutfits(result);
  }, []);

  return (
    <>
    <MainBar page="Outfits" />
      <SafeAreaView style={styles.container}>
        {/* Start of main container */}

        
        <View style={styles.itemContainer}>
        <FlatList
           
            horizontal={false}
            numColumns={1}
            data={outfits}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {
              return (
                <>
                <Text>{item.outfitName}</Text>
                  <TouchableOpacity
                    style={styles.itemBox}
                    key={index}
                  >
                    {/* <Image
                      source={{ uri: item.image }}
                      style={styles.imageContainer}
                      alt="image"
                    /> */}

                  </TouchableOpacity>
                </>
              );
            }}
          />
          <LookBookActionBtn />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(239,218,215)",
    width: width,
    height: height,
    paddingTop: 30
  },
  itemContainer: {
    flex: 50,
    height: Dimensions.get("window").height * 2,
    // flexDirection: "column",
    // flexWrap: "wrap",
    padding: 5,
    marginBottom: "23%",
    borderColor: "black",
  },
  itemBox: {
    width: "100%",
    height: 150,
    alignItems: "center",
    marginHorizontal: "1%",
    borderWidth: 0.75,
    marginBottom: 5,
    backgroundColor: "white",
  },
  scrollSection: {
    margin: 10,
    height: 60,
    marginTop: 10,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderWidth: 0.2,
    borderColor: "black",
    borderRadius: 5,
    paddingTop: 15,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white",
  },
  imageContainer: {
    height: 150,
    width: 150,
  },
});
