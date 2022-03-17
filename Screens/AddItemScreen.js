import React, { useContext, useEffect, useState } from "react";
import { addItem } from "../Services/ItemService";
import UserContext from "../Context/UserContext";
import { StyleSheet, Image } from 'react-native';
import {
  Input,
  Box,
  FormControl,
  Button,
  Select,
  Text
} from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";



export default function AddItemScreen({ navigation }) {

  const { currentUser, newImage, setNewImage } = useContext(UserContext);
  const currentUserId = currentUser[0].id;
  const [color, setColor] = useState();
  const [size, setSize] = useState();
  const [brand, setBrand] = useState();
  const [season, setSeason] = useState();
  const [category, setCategory] = useState();
  const [favorite, setFavorite] = useState(false);
 


  const handleSubmit = async () => {
    await addItem(currentUserId, color, size, brand, season, category, newImage, favorite )

    navigation.navigate("Dashboard");
    
  }

  return (
    <>
      <Box
        flex="1"
        bg="primary.89"
        justifyContent="center"
        alignItems="center"
      >
        {/* Picture */}
      
        <Box borderWidth="2" w="175" h="175" justifyContent="center" alignItems="center">
          {/* <Pressable onPress={() =>{ navigation.navigate("Camera"), setNewImage(null)}}>
          <MaterialCommunityIcons name="camera" color={color} size={100} />
          </Pressable> */}

          <Image source={{uri: newImage}} alt="Image used" style={styles.imageContainer} />
          
          </Box>

        {/* Input Fields */}
        <Box w="70%" mt="15 " borderWidth="1" alignItems="center">
          <Box w="75%">
            <FormControl mb="2">
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
              <Input onChangeText={setBrand} variant="filled" />
            </FormControl>
            <FormControl mb="2">
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
              <Input onChangeText={setColor} variant="filled" />
            </FormControl>

            <FormControl mb="5">
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
              <Input onChangeText={setSize} variant="filled" />
            </FormControl>
            
            <Text>Category</Text>
              <Select
                selectedValue={category}
                minWidth="200"
                accessibilityLabel="Choose Category"
                placeholder="Choose Category"
                _selectedItem={{
                  bg: "primary.90",
                  // endIcon: <CheckIcon size="5" />,
                }}
                mt={1}
                onValueChange={(itemValue) => setCategory(itemValue)}
              >
                <Select.Item label="Tops" value="Tops" />
                <Select.Item label="Bottoms" value="Bottoms" />
                <Select.Item label="Shoes" value="Shoes" />
                <Select.Item label="Dresses" value="Dresses" />
                <Select.Item label="Head Wear" value="HeadWear" />
                <Select.Item label="Swim Wear" value="SwimWear" />
                <Select.Item label="Jewelry" value="Jewelry" />
                <Select.Item label="Accessories" value="Accessories" />
                <Select.Item label="Other" value="Other" />
              </Select>

              <Text>Season</Text>
              <Select
                selectedValue={season}
                minWidth="200"
                accessibilityLabel="Choose Season"
                placeholder="Choose Season"

                _selectedItem={{
                  bg: "primary.90",
                  // endIcon: <CheckIcon size="5" />,
                }}
                mt={1}
                mb={2}
                onValueChange={(itemValue) => setSeason(itemValue)}
              >
                <Select.Item label="All Season" value="All Season" />
                <Select.Item label="Winter" value="Winter" />
                <Select.Item label="Spring" value="Spring" />
                <Select.Item label="Summer" value="Summer" />
                <Select.Item label="Fall" value="Fall" />
              </Select>

            <Button onPress={() => {handleSubmit()}} bg="primary.90">Add</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

const styles = StyleSheet.create({
  imageContainer:{
    height: 175,
    width: 175
  }
})