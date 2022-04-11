import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Box, HStack, StatusBar, Icon, IconButton, Alert, FormControl, Modal, Input, Button } from "native-base";
import UserContext from "../../Context/UserContext";
import React, { useContext, useEffect, useState } from "react";
import { getItemById, updateItemById } from "../../Services/ItemService";
import { useNavigation } from "@react-navigation/native";
import { addOutfit } from "../../Services/OutfitService";
import BodyText from "../../Components/BodyText";

export default function MainBar({ page, selectedItems }) {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false)
  const [outfitName, setOutfitName] = useState()

  const handleSubmitOutfit = () => {
    selectedItems.forEach((item) => {
      if (selectedItems.length == 0) {
        Alert("Please select items to create an outfit.");
      } else {
        let itemId = item.id;
        item.id = 0;
        addOutfit({ ...item, outfitName: outfitName, itemId });
        console.log({ ...item, outfitName: outfitName, itemId });
        navigation.navigate("Dashboard");
      }
    });
  };

  const check = () =>{
    let results = true;
    if(selectedItems.length == 0){
        results = false
    }

    return results
  }

  // console.log(selectedItems.length)

  return (
    <>
      <StatusBar bg="#9AD0EC" barStyle="light-content" />
      <Box safeAreaTop />
      <HStack
        bg="#9AD0EC"
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        maxW="100%"
      >
        <HStack alignItems="flex-start">
          {/* For Create Look Screen */}
          {selectedItems ? 
          <IconButton
                icon={
                  <Icon
                    as={MaterialCommunityIcons}
                    name="arrow-left"
                    size="md"
                    color="white"
                  />
                }
                onPress={() => navigation.navigate("Dashboard")}
              />
              :  null
          
        }
          <BodyText>
            {page}
          </BodyText>
        </HStack>
        {selectedItems ? (
          <>
          { check ? (

            <IconButton
            onPress={() => setShowModal(true)}
            icon={
              <Icon
              as={MaterialCommunityIcons}
              name="check"
              size="sm"
              color="white"
              />
            }
            />
            ) : null
          }
          </>
        ) : null}
      </HStack>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Enter Outfit name</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Outfit name</FormControl.Label>
              <Input onChangeText={setOutfitName} />
            </FormControl>

          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button variant="ghost" colorScheme="blueGray" onPress={() => {
              setShowModal(false);
            }}>
                Cancel
              </Button>
              <Button onPress={() => {
             handleSubmitOutfit();
            }}>
                Create Outfit
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    padding: 10,
    color: 'white',
  
  },
});
