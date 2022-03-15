import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import UserContext from "../Context/UserContext";
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

export default function CameraOpen({navigation}) {

  const {  newImage, setNewImage } = useContext(UserContext);
  const [hasPermission, setHasPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [isFocused, setIsFocused] = useState(true);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);


  const takePicture = async () => {
    if(camera){
        const data = await camera.takePictureAsync(null);
        console.log(data.uri);
        setNewImage(data.uri);
    }
    navigation.navigate("AddItem");
}


  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  if (isFocused) {

    return (
      <View style={styles.container}>

        <View style={styles.cameraContainer}>
      <Camera ref={ref => setCamera(ref)} style={styles.fixedRatio} type={type} ratio={'1:1'} />

        </View>
       
          <Button
            style={styles.button}
            title="Flip Image"
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
                );
              }}>
        
          </Button>
          <Button title="Take Picture" onPress={() => takePicture()}/>
          {/* <Button title="Pick from Gallery"  onPress={() =>{ pickImage()}}></Button> */}
          {newImage && <Image source={{uri: newImage}} style={{flex: 1}} />}
        </View>
    
    );
  } else{
    return <></>
  }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    cameraContainer: {
      flex: 1,
      flexDirection: "row"
    },
    fixedRatio :{
      flex: 1,
      aspectRatio : 1
    }
})