import {StyleSheet} from 'react-native'
import React, { useContext } from 'react';
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";
import UserContext from "../Context/UserContext";
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';


export default function DashboardActionBtn() {

 const { setNewImage } = useContext(UserContext);
 
 const navigation = useNavigation(); //had to use navigation hook due to error


  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    await setNewImage(null);
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    })
    console.log(result);
    if (!result.cancelled) {
    
    setNewImage(result.uri);
     navigation.navigate('AddItem')
    } 
    // else {
    //   setIsFocused(true);
    // }
  }

  const activateCamera = () => {
     setNewImage(null);
     navigation.navigate('Camera');
  }



  return (
    <>
    

      <ActionButton buttonColor="rgb(21,114,161)">
    
            <ActionButton.Item
              buttonColor="#a1152c"
              title="Camera"
              onPress={() => activateCamera()}
            >
              <Icon name="camera" style={styles.actionButtonIcon} />
            </ActionButton.Item>

            <ActionButton.Item
              buttonColor="#15a18a"
              title="Gallery"
              onPress={() => pickImage()}
            >
              <Icon
                name="image"
                style={styles.actionButtonIcon}
              />
            </ActionButton.Item>

          </ActionButton>
    </>
  )
}

const styles= StyleSheet.create({
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: "white",
      },
})