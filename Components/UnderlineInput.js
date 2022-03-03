// import { Text } from 'react-native'
import {
    NativeBaseProvider,
    Input,
    Box,
    FormControl,
    Stack,
    Text,
    Button,
    View,
    Center
  } from "native-base";
import React, {useContext} from 'react'
import UserContext from "../Context/UserContext";

const { currentUser, selectedItem } = useContext(UserContext);

export default function UnderlineInput({label, ...rest}) {
  return (
    <Center>
      <Stack space={4} w="75%" maxW="300px">
        <Input  variant="outline" placeholder={label} {...rest} />
      </Stack>
    </Center>
  )
}