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
import { StyleSheet } from "react-native";
import { getItemById } from "../Services/ItemService";

export default function ItemDetailScreen() {
  const { currentUser, selectedItemId } = useContext(UserContext);
  const currentUserId = currentUser[0].id;
  const [ItemDetails, setItemDetails] = useState([]);

  useEffect(async () => {
    setItemDetails(await getItemById(selectedItemId, currentUserId));
  }, []);
  console.log(ItemDetails)

  return (
    <View style={styles.container}>
      <View style={styles.formBox}>
        <FormControl isDisabled mb="5">
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(239,218,215)",
    alignItems: "center",
    justifyContent: "center",
  },
  formBox: {
    width: "40%",
    height: "40%",
  },
});
