import { useState, useEffect } from "react";
import {
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Pressable,
  Alert,
} from "react-native";
import { CreateAcc } from "../Services/LoginService";
import Confirmation from "../Components/Confirmation";
import KeyboardAvoidingWrapper from "../Components/KeyboardAvoidingWrapper";
import Colors from "../Config/Colors";
import Logo from "../Components/Logo";
import AppButton from "../Components/AppButton";

import {
  NativeBaseProvider,
  Input,
  Box,
  FormControl,
  Stack,
  Text,
  Button,
  View,
} from "native-base";
const { height, width } = Dimensions.get("window");

function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  //Error checking
  const [usernameError, setUsernameError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [firstnameError, setFirstnameError] = useState();
  const [confirmpasswordError, setConfirmpasswordError] = useState();
  const [userCreated, setUserCreated] = useState(false);

  // const  [userfoundError, setUserFoundError] = useState();

  const handleSubmit = async () => {
    //Check if input fields have data

    if (username != "") {
      setUsernameError("");
    } else {
      setUsernameError("Hey, you need to enter a Username!");
    }
    // If password is empty proc error
    if (password != "") {
      setPasswordError("");
    } else {
      setPasswordError("Hey! Enter a password");
    }

    if (confirmPassword != "") {
      setConfirmpasswordError("");
    } else {
      setConfirmpasswordError("Enter your password to confirm");
    }

    if (password != confirmPassword && password != "") {
      setConfirmpasswordError("Passwords do not match");
    } else {
      //Will create user and returns true or false depending if username exists
      //If username exists returns false because it did not create the account
      const didCreate = await CreateAcc(username, password, name);

      //Check to see if password matches confirmed password

      if (didCreate != true) {
        setUsernameError("Username already exists");
      } else {
        //Confirm account was created
        //Navigate to loginscreen

        setUserCreated(true);
        setUsernameError("");
        setTimeout(() => {
          setUserCreated(false);
          navigation.navigate("LoginScreen");
        }, 2000);
      }
    }
  };

  return (
    <>
      <NativeBaseProvider>
        {/*///////////// Container Start /////////////*/}

        <SafeAreaView style={styles.container}>
          <View style={styles.brandView}>
            <Logo />
          </View>

          {/*///////////// Bottom View /////////////*/}
          <KeyboardAvoidingWrapper>
            <View>
              {/* Create Account View */}
              <View style={{ padding: 40, marginTop: 20 }}>
                {/* <Text style={{ color: "#4632A1", fontSize: 22 }}>
                  Create an Account
                </Text> */}

                {/*///////////// Form Inputs View /////////////*/}
                <View style={{ marginTop: 40 }}>
                  {/* Username */}
                  <Box alignItems="center">
                    <Box w="90%" maxWidth="300px">
                      <FormControl isRequired>
                        <Stack mx="4">
                          <FormControl.Label>Username</FormControl.Label>
                          <Input
                            type="text"
                            //   defaultValue="12345"
                            placeholder="username"
                            variant="filled"
                            onChangeText={setUsername}
                          />
                          <Text style={{ color: "red", marginLeft: 20 }}>
                            {usernameError}
                          </Text>
                        </Stack>
                      </FormControl>
                    </Box>
                  </Box>
                  {/* ///////////// FirstName /////////// */}
                  <Box alignItems="center">
                    <Box w="90%" maxWidth="300px">
                      <FormControl isRequired>
                        <Stack mx="4">
                          <FormControl.Label>First Name</FormControl.Label>
                          <Input
                            type="text"
                            placeholder="Display Name"
                            variant="filled"
                            onChangeText={setName}
                          />
                          <Text style={{ color: "red", marginLeft: 20 }}>
                            {firstnameError}
                          </Text>
                        </Stack>
                      </FormControl>
                    </Box>
                  </Box>
                  {/*///////////// Password /////////////*/}
                  <Box alignItems="center" marginTop="1">
                    <Box w="90%" maxWidth="300px">
                      <FormControl isRequired>
                        <Stack mx="4">
                          <FormControl.Label>Password</FormControl.Label>
                          <Input
                            type="password"
                            //   defaultValue="12345"
                            placeholder="Password"
                            variant="filled"
                            onChangeText={setPassword}
                          />
                          <Text style={{ color: "red", marginLeft: 20 }}>
                            {passwordError}
                          </Text>
                        </Stack>
                      </FormControl>
                    </Box>
                    {/* ///////////// Confirm Password /////////////*/}
                    <Box w="90%" maxWidth="300px" marginTop="1">
                      <FormControl isRequired>
                        <Stack mx="4">
                          <FormControl.Label>
                            Confirm Password
                          </FormControl.Label>
                          <Input
                            type="password"
                            //   defaultValue="12345"
                            placeholder="Confirm Password"
                            variant="filled"
                            onChangeText={setConfirmPassword}
                          />
                          <Text style={{ color: "red", marginLeft: 20 }}>
                            {confirmpasswordError}
                          </Text>
                        </Stack>
                      </FormControl>

                    </Box>
                      {/*///////////// Submit Button /////////////*/}
                      <View style={styles.buttonContainer}>
                      <AppButton
                        title="Create Account"
                        color="secondary"
                        onPress={handleSubmit}
                      />

                    <Pressable
                      onPress={() => navigation.navigate("LoginScreen")}
                      style={{ marginTop: 20 }}
                    >
                      <Text>
                        Already have an account?
                        <Text style={{ color: "red", fontStyle: "italic" }}>
                          {" "}
                          Login
                        </Text>
                      </Text>
                    </Pressable>
                      </View>

                  </Box>
                </View>
              </View>
            </View>
          </KeyboardAvoidingWrapper>
        </SafeAreaView>
        {/*///////////// Container End ///////////// */}
      </NativeBaseProvider>
      {userCreated ? <Confirmation /> : null}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  brandView: {
    flex: 0.3,

    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer:{
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30
  }
 
});

export default RegisterScreen;
