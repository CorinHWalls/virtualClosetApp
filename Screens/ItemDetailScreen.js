// import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState} from "react";
import UserContext from "../Context/UserContext";
import { Input, Box, FormControl, Text, Select } from "native-base";
import { StyleSheet, Image } from "react-native";
import { getItemById, updateItemById } from "../Services/ItemService";
import AppBar from "../Components/Navigation/AppBar.js";

export default function ItemDetailScreen() {
  const { currentUser, selectedItemId, newImage, setNewImage } =
    useContext(UserContext);
  const currentUserId = currentUser[0].id;
  const [formData, setFormData] = useState({});
  const [disableFields, setDisableFields] = useState(true);
  const [color, setColor] = useState();
  const [size, setSize] = useState();
  const [brand, setBrand] = useState();
  const [season, setSeason] = useState();
  const [category, setCategory] = useState();
  const [image, setImage] = useState();
  const [favorite, setFavorite] = useState(false);
  const [editStatus, setEditStatus] = useState(false);


  useEffect(async () => {
    let data = await getItemById(selectedItemId, currentUserId);
    setBrand(data.brand)
    setImage(data.image)
    setColor(data.color)
    setSize(data.size)
    setSeason(data.season)
    setCategory(data.category)
    setFavorite(data.favorite)

    setFormData(await getItemById(selectedItemId, currentUserId));
    disableFields;

 
  }, [disableFields]);


  const saveChanges = async () => {

    await updateItemById(
      {
      currentUserId,
      selectedItemId,
      color,
      size,
      brand,
      season,
      category,
      image,
      favorite
      }
    );
   

  };

  const handleEdit = () => {
    setDisableFields(false);
  };


  return (
    <>
      <AppBar
        page={"Details"}
        editStatus={editStatus}
        setEditStatus={setEditStatus}
        edit={handleEdit}
        save={saveChanges}
        favorite={favorite}
        setFavorite={setFavorite}
      />

      {disableFields ? (
        <Box
          flex="1"
          bg="primary.89"
          justifyContent="center"
          alignItems="center"
        >
        
          {/* Picture */}
          <Box mt="5" borderWidth="1" w="200" h="200">
            <Image
              source={{ uri: formData.image }}
              alt="Image"
              style={styles.imageContainer}
            />
          </Box>

          {/* Input Fields */}
          <Box w="70%" mt="15 " alignItems="center">
            <Box w="75%">
              <FormControl isDisabled mb="2">
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
                <Input placeholder={formData.brand} />
              </FormControl>
              <FormControl isDisabled mb="2">
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
                <Input placeholder={formData.color} />
              </FormControl>

              <FormControl isDisabled mb="5">
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
                <Input placeholder={formData.size} />
              </FormControl>

              <FormControl isDisabled mb="5">
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
                <Input placeholder={formData.category} />
              </FormControl>

              <FormControl isDisabled mb="5">
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
                <Input placeholder={formData.season} />
              </FormControl>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          flex="1"
          bg="primary.89"
          justifyContent="center"
          alignItems="center"
        >
          {/* Picture */}
          <Box mt="5" borderWidth="1" w="200" h="200">
            <Image
              source={{ uri: formData.image }}
              alt="Image"
              style={styles.imageContainer}
            />
          </Box>

          {/* Input Fields */}
          <Box w="70%" mt="15 "  alignItems="center">
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
                <Input value={brand}  placeholder={formData.brand} onChangeText={(value) => setBrand(value)} />
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
                <Input value={color} placeholder={formData.color} onChangeText={(value) => setColor(value)} />
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
                <Input value={size} placeholder={formData.size} onChangeText={(value) => setSize(value)} />
              </FormControl>

              <Text>Category</Text>
              <Select
                selectedValue={formData.category}
                minWidth="200"
                accessibilityLabel={'Choose Category'}
                placeholder={formData.category}
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
                selectedValue={formData.season}
                minWidth="200"
                accessibilityLabel="Choose Season"
                placeholder={formData.season}
                _selectedItem={{
                  bg: "primary.90",
                  // endIcon: <CheckIcon size="5" />,
                }}
                mt={1}
                onValueChange={(itemValue) => setSeason(itemValue)}
              >
                <Select.Item label="All Season" value="All Season" />
                <Select.Item label="Winter" value="Winter" />
                <Select.Item label="Spring" value="Spring" />
                <Select.Item label="Summer" value="Summer" />
                <Select.Item label="Fall" value="Fall" />
              </Select>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    height: 200,
    width: 200,
  },
});
