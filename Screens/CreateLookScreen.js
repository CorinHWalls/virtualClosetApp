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
    // selectedItems.forEach(await getItemById(selectedItems, currentUserId));
    // const selectedData = await getItemById();
  }, []);

  const handleOnPress = (item) => {
    selectItems(item);
  };

  const selectItems = (item) => {
    if (selectedItems.includes(item)) {
      const newSelectedItems = selectedItems.filter((item) => item !== item);
      setSelectedItems(newSelectedItems);
    }
    setSelectedItems([...selectedItems, item]);
  };

  // console.log(selectedItems);

  const handleSubmit = () => {
    selectedItems.forEach((item) => {
      // addOutfit(item);
      let ItemId = item.id
      item.id =0;

      console.log({...item, OutFitName: "Corin Outfit", ItemId})
    });
  };

  //  check and see if item exists in arr, return bool / NOT IN USE
  // const getSelected = (item) => selectedItems.includes(item.id);

  return (
    <>
      <SafeAreaView style={styles.container}>
        {/* Window to view selected items */}

        <MainBar page="Create Outfit" />

        <Box mt="5" borderWidth="1" w="100%" h="40%">
          <Button onPress={handleSubmit}>Submit</Button>
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

        {/* FlatList of Items displayed */}

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
                    selected={selected}
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
    flex: 500,
    height: 500,
    // flexDirection: "column",
    // flexWrap: "wrap",
    padding: 5,
    // marginBottom: "23%",
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
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "rgb(239,218,215)",
//     // paddingTop: 50,
//   },
//   itemContainer: {
//     flex: 50,
//     height: Dimensions.get("window").height * 2,
//     // flexDirection: "column",
//     // flexWrap: "wrap",
//     padding: 5,
//     marginBottom: "23%",
//     borderColor: "black",
//   },
//   itemBox: {
//     width: "48%",
//     height: 150,
//     alignItems: "center",
//     marginHorizontal: "1%",
//     borderWidth: 0.75,
//     marginBottom: 5,
//     backgroundColor: "white",
//   },
//   scrollSection: {
//     margin: 10,
//     height: 60,
//     marginTop: 10,
//     borderLeftWidth: 0,
//     borderRightWidth: 0,
//     borderWidth: 0.2,
//     borderColor: "black",
//     borderRadius: 5,
//     paddingTop: 15,
//   },
//   actionButtonIcon: {
//     fontSize: 20,
//     height: 22,
//     color: "white",
//   },
//   imageContainer: {
//     height: 150,
//     width: 150

//   }
// });
