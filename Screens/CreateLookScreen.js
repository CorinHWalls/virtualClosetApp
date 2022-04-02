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
import { Input, Box, FormControl, Button } from "native-base";
import React, { useContext, useEffect, useState } from "react";
import CategoryBtn from "../Components/CategoryBtn";
import UserContext from "../Context/UserContext";
import {
  getCategoryItems,
  getAllItems,
  getItemById,
} from "../Services/ItemService";
import { addOutfit } from "../Services/OutfitService";
import MainBar from "../Components/Navigation/MainBar";

export default function CreateLookScreen({ navigation }) {
  const { currentUser, selectedItemId, setSelectedItemId } =
    useContext(UserContext);
  const currentUserId = currentUser[0].id;
  const [category, setCategory] = useState();
  const [outfitName, setOutfitName] = useState();
  const [displayData, setDisplayData] = useState({});

  // Multi-Select
  const [selected, setSelected] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(async () => {
    const categoryData = await getAllItems(currentUserId);
    setCategory(categoryData);
  }, []);

  const handleOnPress = (item) => {
    selectItems(item);
  };

  ///Feature that controlls submission has been moved to MainBar.js

  const getSelected = (item) => {
    return selectedItems.some((obj) => obj.id === item.id);
  };

  //This function handles items being selected to be added to outfit
  const selectItems = (item) => {
    //is there an obj with the same id?
    const selectedItemId = selectedItems.some((obj) => obj.id === item.id); //will return true or false

    //if item is found with same id - handling deselecting
    if (selectedItemId) {
      //create new array with all items except the one selected
      const newSelectedItems = selectedItems.filter(
        (obj) => obj.id !== item.id
      );
      setSelectedItems(newSelectedItems);
    } else {
      setSelectedItems([...selectedItems, item]);
    }
    console.log(selectedItemId);
  };

  console.log(selectedItems);

  return (
    <>
      <SafeAreaView style={styles.container}>
        {/* Window to view selected items */}

        <MainBar selectedItems={selectedItems} page="Create Outfit" />

        {/* FlatList of Items selected */}
        <Box w="100%" h="50%">
          <Text style={{alignSelf: "center"}}>Selected Items</Text>

          <View style={styles.itemContainer}>
          <FlatList
            // style={{flex:1}}
            horizontal={false}
            numColumns={2}
            data={selectedItems}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {
              return (
                <>
                  <TouchableOpacity
                    onPress={() => {
                      handleOnPress(item);
                    }}
                    style={styles.itemBox}
                    key={index}
                    selected={getSelected(item)}
                  >
                    <Image
                      source={{ uri: item.image }}
                      style={styles.imageContainer}
                      alt="image"
                    />

                    {selected ? <View style={styles.overlay} /> : null}
                  </TouchableOpacity>
                </>
              );
            }}
          />
        </View>
        </Box>
        {/* Filter */}
        <ScrollView scrollEventToggle={16}>
          <View style={styles.scrollSection}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
            >
              <CategoryBtn
                onPress={async () => {
                  setCategory(await getAllItems(currentUserId));
                }}
                label={"All"}
              />
              <CategoryBtn
                onPress={async () => {
                  setCategory(await getCategoryItems("Tops", currentUserId));
                }}
                label={"Tops"}
              />
              <CategoryBtn
                onPress={async () => {
                  setCategory(await getCategoryItems("Bottoms", currentUserId));
                }}
                label={"Bottoms"}
              />
              <CategoryBtn
                onPress={async () => {
                  setCategory(await getCategoryItems("Shoes", currentUserId));
                }}
                label={"Shoes"}
              />
              <CategoryBtn
                onPress={async () => {
                  setCategory(await getCategoryItems("Dresses", currentUserId));
                }}
                label={"Dresses"}
              />
              <CategoryBtn
                onPress={async () => {
                  setCategory(
                    await getCategoryItems("HeadWear", currentUserId)
                  );
                }}
                label={"HeadWear"}
              />
              <CategoryBtn
                onPress={async () => {
                  setCategory(
                    await getCategoryItems("SwimWear", currentUserId)
                  );
                }}
                label={"SwimWear"}
              />
              <CategoryBtn
                onPress={async () => {
                  setCategory(await getCategoryItems("Jewelry", currentUserId));
                }}
                label={"Jewelry"}
              />
              <CategoryBtn
                onPress={async () => {
                  setCategory(
                    await getCategoryItems("Accessories", currentUserId)
                  );
                }}
                label={"Accessories"}
              />
              <CategoryBtn
                onPress={async () => {
                  setCategory(await getCategoryItems("Other", currentUserId));
                }}
                label={"Other"}
              />
            </ScrollView>
          </View>
        </ScrollView>

        {/* FlatList of Items to select from */}

        <View style={styles.itemContainer}>
          <FlatList
            // style={{flex:1}}
            horizontal={false}
            numColumns={2}
            data={category}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {
              return (
                <>
                  <TouchableOpacity
                    onPress={() => {
                      handleOnPress(item);
                    }}
                    style={styles.itemBox}
                    key={index}
                    selected={getSelected(item)}
                  >
                    <Image
                      source={{ uri: item.image }}
                      style={styles.imageContainer}
                      alt="image"
                    />

                    {selected ? <View style={styles.overlay} /> : null}
                  </TouchableOpacity>
                </>
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
    backgroundColor: "rgb(239,218,215)",
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
  itemBox: {
    width: "48%",
    height: 150,
    alignItems: "center",
    marginHorizontal: "1%",
    borderWidth: 0.75,
    marginBottom: 5,
    backgroundColor: "white",
  },
  itemContainer: {
    flex: 50,
    height: "50%",
    padding: 5,
    borderColor: "black",
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  imageContainer: {
    height: "100%",
    width: "100%",
  },
  selectedContainer:{
    flex: 50,
    height: "50%",
    padding: 5,
    borderColor: "black",
  },

});


