

import { View, Text, SafeAreaView, FlatList, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { Box } from "native-base";
import React from 'react'
import { getCategoryItems, getAllItems } from "../Services/ItemService";


export default function CreateOutfitScreen() {

    const categories =["Tops", "Bottoms", "Dresses", "HeadWear", "SwimWear", "Shoes", "Accessories", "Jewery", "Other"]

  return (
    <>
      <SafeAreaView>
        <View style={styles.itemContainer}>

        <FlatList 
        horizontal={false}
        numColumns={3}
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({item, index}) => {
            return(
                <>
                <TouchableOpacity style={styles.itemBox} key={index}>
                    <Text>{item}</Text>
                </TouchableOpacity>
                </>
            )
        }
    
        }
        
        />
        </View>


     
          
      </SafeAreaView>
    </>
  )
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
    itemBox: {
      width: "48%",
      height: 150,
      alignItems: "center",
      marginHorizontal: "1%",
      borderWidth: 0.75,
      marginBottom: 5,
      backgroundColor: "black",
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
      width: 150
      
    }
  });