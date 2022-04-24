import {
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import LookBookActionBtn from "../Components/LookBookActionBtn";
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../Context/UserContext";
import MainBar from "../Components/Navigation/MainBar";
import { getOutfitByUserId} from "../Services/OutfitService";
import OutfitNotice from "../Components/OutfitNotice";
const { height, width } = Dimensions.get("window");

export default function OutfitScreen({navigation}) {
  const { currentUser, setSelectedOutfitName } = useContext(UserContext);
  const currentUserId = currentUser[0].id;
  const [outfits, setOutfits] = useState();
  const [refreshing, setRefreshing] = useState(false)

  //check which obj in array have equal parameter
  const objectsAreEqual = (a, b) => a.outfitName === b.outfitName;

  useEffect(async () => {
    //Get all Outfits by userId
    const allData = await getOutfitByUserId(currentUserId);
    //Handle displaying outfits
    const result = [];

    allData.forEach((item) => {
      const outfitsInResult = result.find((resultItem) =>
        objectsAreEqual(item, resultItem)
      );

      if (!outfitsInResult) {
        result.push(item);
      }
    });
    setOutfits(result);
  }, []);

  const handleClick = (outfitName) => {
    setSelectedOutfitName(outfitName)
    navigation.navigate("OutfitDetails");
  }

  const handleRefresh = async () => {
      //Get all Outfits by userId
    const allData = await getOutfitByUserId(currentUserId);
    //Handle displaying outfits
    const result = [];

    allData.forEach((item) => {
      const outfitsInResult = result.find((resultItem) =>
        objectsAreEqual(item, resultItem)
      );

      if (!outfitsInResult) {
        result.push(item);
      }
    });
    setOutfits(result);
  }

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
            refreshing={refreshing}
            onRefresh={ async () => handleRefresh() }
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {
              return (
                <>
                
                  <TouchableOpacity onPress={() => handleClick(item.outfitName)} style={styles.itemBox} key={index}>
                    <View style={styles.centerElement}>
                      <Image
                        source={{ uri: item.image }}
                        style={styles.imageContainer}
                        alt="image"
                      />
                    </View>

                    <View
                      style={[styles.outfitIndicator, { width: 40 }]}
                      
                      >
                        <OutfitNotice outfitName={item.outfitName} />
                      
                    </View>
                    <View style={styles.titleContainer}>
                      <Text>{item.outfitName}</Text>
                    </View>

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
    paddingTop: 30,
    justifyContent: "center",
  },
  itemContainer: {
    flex: 1,
    height: Dimensions.get("window").height * 2,
    justifyContent: "center",
    alignItems: "center",
    
    marginBottom: "23%",

    // paddingLeft: 50,

  },
  itemBox: {
    width: "100%",
    height: 80,
    flexDirection: "row",
    // marginHorizontal: "1%",
    borderWidth: 1,
    borderColor: "#ececec",
    marginBottom: 15,
    backgroundColor: "white",
    padding: 7,
    borderRadius: 20
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
    height: 70,
    width: 70,
    borderRadius: 20
  },
  centerElement: {
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    flexGrow: 1,
    flexShrink: 1,
    alignItems: "center",
  },
  outfitIndicator: {
    alignItems: "center",
  }
});
