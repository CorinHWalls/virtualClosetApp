import {
  StyleSheet,
  Dimensions,
  SafeAreaView,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../Context/UserContext";
import { getOutfitByName } from "../Services/OutfitService";
import AppBar from "../Components/Navigation/AppBar";
const { height, width } = Dimensions.get("window");

export default function OutfitDetailScreen({ navigation }) {
  const { currentUser, setSelectedItemId, selectedOutfitName } =
    useContext(UserContext);
  const currentUserId = currentUser[0].id;
  const [outfits, setOutfits] = useState();
  const [refreshing, setRefreshing] = useState(false);

  useEffect(async () => {
    const data = await getOutfitByName(currentUserId, selectedOutfitName);
    //Load Outfits
    setOutfits(data);
  }, []);

  const handleDetailClick = () => {
    //Pass item.id to detail
    //navigate user to detail screen
    navigation.navigate("ItemDetails");
  };

  return (
    <>
      <AppBar page="Outfit items" />
      <SafeAreaView style={styles.container}>
        <View style={styles.itemContainer}>
          <FlatList
            horizontal={false}
            numColumns={2}
            data={outfits}
            refreshing={refreshing}
            onRefresh={async () =>
              setOutfits(await getOutfitByName(selectedOutfitName))
            }
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    handleDetailClick(), setSelectedItemId(item.itemId);
                  }}
                  style={styles.itemBox}
                >
                  <Image
                    key={index}
                    source={{ uri: item.image }}
                    style={styles.imageContainer}
                    alt="image"
                  />
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(239, 218, 215)",
    height: height,
    width: width,
  },
  itemContainer: {
    // flex: 50,
    // height: Dimensions.get("window").height * 2,
    padding: 5,
    marginBottom: "23%",
    borderColor: "black",
    paddingTop: 20,
  },
  itemBox: {
    width: "48%",
    height: 150,
    alignItems: "center",
    marginHorizontal: "1%",
    borderWidth: 0.75,
    marginBottom: 5,
    backgroundColor: "white",
    borderRadius: 20,
    borderColor: "#ececec",
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
    height: "100%",
    width: "100%",
    borderRadius: 20,
  },
});
