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

export default function CreateLookScreen({ navigation }) {
  const { currentUser, selectedItemId, setSelectedItemId } =
    useContext(UserContext);
  const currentUserId = currentUser[0].id;
  const [category, setCategory] = useState();
  const [selectedItems, setSelectedItems] = useState([]);
  const [selected, setSelected] = useState(false);
  const [outfitName, setOutfitName] = useState();
  const [displayData, setDisplayData] = useState({});

  /////working on this

  useEffect(async () => {
    const categoryData = await getAllItems(currentUserId);
    setCategory(categoryData);
    // selectedItems.forEach(await getItemById(selectedItems, currentUserId));
    // const selectedData = await getItemById();
  }, []);

  const handleOnPress = (item) => {
    //check if there is anything selected if so continue selecting instead of navigating to details
    if (selectedItems.length) {
      return handleLongPress(item);
    }
    navigation.navigate("ItemDetails");
  };

  //Handling selecting items
  const handleLongPress = async (item) => {
    //handles deselecting:
    if (selectedItems.includes(item.id)) {
      setSelected(getSelected(item));
      //Filter out the selected item and replace selectedItems with new list
      const newItemList = selectedItems.filter((itemId) => itemId !== item.id);
      setSelectedItems(newItemList);
    } else {
      //handles selecting items
      setSelected(getSelected(item));
      setSelectedItems([...selectedItems, item.id]);
    }
    // selectedItems.forEach(function(item){
    //    setDisplayData(await getItemById(item))
    // })
    console.log(displayData);
  };

  const addToArr = () => {
    let data = [
      {
        id: 0,
        userId: currentUserId,
        itemId: selectedItemId,
        OufitName: outfitName,
      },
    ];
  };
  //  check and see if item exists in arr, return bool
  const getSelected = (item) => selectedItems.includes(item.id);

  return (
    <>
      <SafeAreaView style={styles.container}>
        {/* Window to view selected items */}

        <Box mt="5" borderWidth="1" w="100%" h="55%"></Box>
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
                      handleOnPress(item), setSelectedItemId(item.id);
                    }}
                    style={styles.itemBox}
                    // selected={}
                    onLongPress={() => handleLongPress(item)}
                    key={index}
                  >
                    <View>
                      <Text>id: {item.id}</Text>
                      <Text>UserId: {item.userId}</Text>
                      <Text>{item.category}</Text>
                      <Text>{item.color}</Text>
                      <Text>Size: {item.size}</Text>
                      <Text>{item.season}</Text>
                      <Text>Brand: {item.brand}</Text>
                      {/* <Image
                        source={{ uri: item.image }}
                        styles={styles.imageContainer}
                        alt="image"
                      /> */}
                    </View>
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
