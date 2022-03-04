// import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../Context/UserContext";
import {
  NativeBaseProvider,
 
  Input,
  Box,
  FormControl,
  Stack,
  Text,
  Button,
  View,
  Center,
} from "native-base";
import { StyleSheet, SafeAreaView } from "react-native";
import { getItemById } from "../Services/ItemService";

export default function ItemDetailScreen() {
  const { currentUser, selectedItemId } = useContext(UserContext);
  const currentUserId = currentUser[0].id;
  const [ItemDetails, setItemDetails] = useState([]);
  const [toggleFields, setToggleFields] = useState(false);

  useEffect(async () => {
    setItemDetails(await getItemById(selectedItemId, currentUserId));
  }, []);
  // console.log(ItemDetails)

  return (
    <>
    
    <Box flex="1" bg="primary.89" justifyContent="center" alignItems="center" style={styles.container}>

      {/* Picture */}
      <Box borderWidth="2" w="175" h="175">

      </Box>

      {/* Input Fields */}
      <Box w="70%"  mt="15 " borderWidth="1" alignItems="center">
        <Box w="75%">
        <FormControl isDisabled={true} mb="2">
          <FormControl.Label
            _disabled={{
              _text: {
                color: "gray.400",
                fontWeight: "bold",
              },
            }}
          >
            Brand
          </FormControl.Label>
          <Input placeholder={ItemDetails.brand} />
        </FormControl>
        <FormControl isDisabled={toggleFields} mb="2">
          <FormControl.Label
            _disabled={{
              _text: {
                color: "gray.400",
                fontWeight: "bold",
              },
            }}
          >
            Color
          </FormControl.Label>
          <Input placeholder={ItemDetails.color} />
        </FormControl>
        <FormControl isDisabled={toggleFields} mb="5">
          <FormControl.Label
            _disabled={{
              _text: {
                color: "gray.400",
                fontWeight: "bold",
              },
            }}
          >
            Category
          </FormControl.Label>
          <Input placeholder={ItemDetails.category} />
        </FormControl>
        <FormControl isDisabled={toggleFields} mb="5">
          <FormControl.Label
            _disabled={{
              _text: {
                color: "gray.400",
                fontWeight: "bold",
              },
            }}
          >
            Size
          </FormControl.Label>
          <Input placeholder={ItemDetails.size} />
        </FormControl>
        <FormControl isDisabled={toggleFields} mb="5">
          <FormControl.Label
            _disabled={{
              _text: {
                color: "gray.400",
                fontWeight: "bold",
              },
            }}
          >
            Season
          </FormControl.Label>
          <Input placeholder={ItemDetails.season} />
        </FormControl>

        <Button bg="primary.90">Edit</Button>
        </Box>
      </Box>
  
    
    </Box>
    </>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   // backgroundColor: "rgb(239,218,215)",
  //   justifyContent: "center",
  //   alignItems: "center",
   
  // },
  // formBox: {
  //   width: "50%",
  //   height: "30%",
  //   alignSelf: "center",
  //   alignItems: "center"
  
  // },
});
