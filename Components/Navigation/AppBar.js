import { View, Text } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
    Box,
    HStack,
    StatusBar,
    Icon,
    IconButton,
   
    
  } from "native-base";

export default function AppBar({page, edit, save, editStatus, setEditStatus, favorite, setFavorite}) {

  const favoriteToggle = () => {
      if(favorite){
        setFavorite(false);
      }
      else{
        setFavorite(true);
      }
  }
  const editToggle = () => {
    if(!editStatus){
      edit()
      setEditStatus(true);
    }
    else{
      save();
      setEditStatus(false);
    }
  }
  return (
    <>
  
  <StatusBar bg="#9AD0EC" barStyle="light-content" />
      <Box safeAreaTop />
      <HStack bg="#9AD0EC" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" maxW="100%">
        <HStack alignItems="center">
         
          <Text color="white" fontSize="9" fontWeight="bold">
           {page}
          </Text>
        </HStack>
        <HStack>
          { favorite ? <IconButton onPress={() => favoriteToggle()} icon={<Icon as={MaterialCommunityIcons} name="heart" size="sm" color="white" />} /> 
          : 
          <IconButton onPress={() => favoriteToggle()} icon={<Icon as={MaterialCommunityIcons} name="heart-outline" size="sm" color="white" />} /> 
          }
          
          <IconButton icon={<Icon as={MaterialCommunityIcons} name="delete" size="sm" color="white" />} />
          {
            editStatus ? <IconButton onPress={() => editToggle()} icon={<Icon as={MaterialCommunityIcons} name="check" size="sm" color="white" />} />
            : <IconButton onPress={() => editToggle()} icon={<Icon as={MaterialCommunityIcons} name="pencil" size="sm" color="white" />} />
          }
          
        </HStack>
      </HStack>

    </>
  );
}