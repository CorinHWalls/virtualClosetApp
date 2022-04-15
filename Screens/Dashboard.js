import {
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Platform,
  StatusBar,
  Image,
} from "react-native";
// import { Image } from "native-base";

import React, { useContext, useEffect, useState } from "react";
import UserContext from "../Context/UserContext";
import AppLoader from "../Components/AppLoader";
import { getCategoryItems, getAllItems } from "../Services/ItemService";
import CategoryBtn from "../Components/CategoryBtn";
import DashboardActionBtn from "../Components/DashboardActionBtn";
import MainBar from "../Components/Navigation/MainBar";
const { height, width } = Dimensions.get("window");

function Dashboard({ navigation }) {
  const { currentUser, setSelectedItemId, loginPending, setLoginPending } =
    useContext(UserContext);
  const [category, setCategory] = useState();
  const currentUserId = currentUser[0].id;
  const [isLoaded, setIsLoaded] = useState(false);
  const [refreshing, setRefreshing] = useState(false)

  useEffect(async () => {
    setLoginPending(true);
    setCategory(await getAllItems(currentUserId));
  
    //handling effects
    setTimeout(() => {
      setLoginPending(false);
      // setIsLoaded(true);
    }, 3000);
  },  []);

  const handleDetailClick = () => {
    navigation.navigate("ItemDetails");
  };

  return (
    <>
      {loginPending ? <AppLoader /> : null}
      <MainBar page="Item Dashboard"  />
      <SafeAreaView style={styles.container}>
        
        {/* Start of Main Container */}

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

        <View style={styles.itemContainer}>
          <FlatList
            horizontal={false}
            numColumns={2}
            data={category}
            keyExtractor={(item) => item.id}
            refreshing={refreshing}
            onRefresh={ async () => setCategory(await getAllItems(currentUserId))}
            renderItem={({ item, index }) => {
              return (
                <>
                  <TouchableOpacity
                    onPress={() => {
                      handleDetailClick(), setSelectedItemId(item.id);
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
                </>
              );
            }}
          />

          <DashboardActionBtn />
        </View>

        {/* End of Main Container */}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(239,218,215)",
    height: height,
    width: width,
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  itemContainer: {
    flex: 40,
    // height: Dimensions.get("window").height * 2,
    // flexDirection: "column",
    // flexWrap: "wrap",
    padding: 5,
    marginBottom: "23%",
    borderColor: "black",
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
  },
});

export default Dashboard;
