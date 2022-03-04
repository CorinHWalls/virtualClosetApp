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
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../Context/UserContext";
import AppLoader from "../Components/AppLoader";
import {getCategoryItems, getAllItems} from "../Services/ItemService";
import CategoryBtn from "../Components/CategoryBtn";

function Dashboard({navigation}) {
  const { currentUser, setSelectedItemId } = useContext(UserContext);
  const { loginPending, setLoginPending } = useContext(UserContext);
  const [category, setCategory] = useState(null);
  const currentUserId = currentUser[0].id
  
  useEffect(async () => {
    setLoginPending(true);
    const allData = await getAllItems(currentUserId);
    setCategory(allData)
    //handling effects
    setTimeout(() => {
      setLoginPending(false);
    }, 3000);
    
  }, []);
  // console.log(category)

  const handleDetailClick = () => {
      //Pass item.id to detail
      //navigate user to detail screen
      navigation.navigate('ItemDetails')
  }
  
  
  
  return (
    <>
        {loginPending ? <AppLoader /> : null}
     
      <SafeAreaView style={styles.container}>
     {/* Start of Main Container */}

      {/* Initial ScrollView container */}
        <ScrollView scrollEventToggle={16}>
            <View
              style={styles.scrollSection}
            >
              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}
              >
                <CategoryBtn onPress={async () => {setCategory(await getAllItems(currentUserId))}} label={"All"}/>
                <CategoryBtn onPress={ async () => {setCategory( await getCategoryItems("Shirt", currentUserId))}} label={"Tops"}/>
                <CategoryBtn onPress={ async () => {setCategory( await getCategoryItems("Bottoms", currentUserId))}} label={"Bottoms"}/>
                <CategoryBtn onPress={ async () => {setCategory( await getCategoryItems("Shoes", currentUserId))}} label={"Shoes"}/>
                <CategoryBtn onPress={ async () => {setCategory( await getCategoryItems("Dresses", currentUserId))}} label={"Dresses"}/>
                <CategoryBtn onPress={ async () => {setCategory( await getCategoryItems("HeadWear", currentUserId))}} label={"HeadWear"}/>
                <CategoryBtn onPress={ async () => {setCategory( await getCategoryItems("SwimWear", currentUserId))}} label={"SwimWear"}/>
                <CategoryBtn onPress={ async () => {setCategory( await getCategoryItems("Jewelry", currentUserId))}} label={"Jewelry"}/>
                <CategoryBtn onPress={ async () => {setCategory( await getCategoryItems("Accessories", currentUserId))}} label={"Accessories"}/>
                <CategoryBtn onPress={ async () => {setCategory( await getCategoryItems("Other", currentUserId))}} label={"Other"}/>
              </ScrollView>
            </View>
        </ScrollView>
        
      {/* FlatList of Items displayed */}
    
    <View style={styles.itemContainer} >

      <FlatList
        // style={{flex:1}}
        horizontal={false}
        numColumns={2}
        data={category}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {

          
          return(
            <TouchableOpacity onPress={() => {handleDetailClick(), setSelectedItemId(item.id);}} style={styles.itemBox}>
            <View key={index}>
            <Text>id: {item.id}</Text>
            <Text>UserId: {item.userId}</Text>
            <Text>{item.category}</Text>
            <Text>{item.brand}</Text>
            <Text>{item.color}</Text>
            <Text>Size: {item.size}</Text>
            <Text>{item.season}</Text>
              </View>
           </TouchableOpacity>
         
          )
        }}
        />
       
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
    // paddingTop: 50,
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
  itemBox:{
    width: "48%",
        height: 150,
        alignItems: 'center',
        marginHorizontal: "1%",
        borderWidth: 0.75,
        marginBottom:5,
        backgroundColor: "white",
  },
  scrollSection: {
    margin: 10,
    height: 60,
    marginTop: 50,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderWidth: 0.2,
    borderColor: "black",
    borderRadius: 5,
    paddingTop: 15,
  },
});

export default Dashboard;
