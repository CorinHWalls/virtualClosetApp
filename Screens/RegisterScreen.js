import { useState, useEffect } from "react";
import {
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Pressable,
  Alert,
} from "react-native";
import { CreateAcc } from "../Services/LoginService";
import Confirmation from "../Components/Confirmation"

import {
  NativeBaseProvider,
  Input,
  Box,
  FormControl,
  Stack,
  WarningOutlineIcon,
  Text,
  Button,
  View,
} from "native-base";

function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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

    if (password != confirmPassword && password != "" ) {
      setConfirmpasswordError("Passwords do not match");
    }
    else{

      //Will create user and returns true or false depending if username exists
      //If username exists returns false because it did not create the account
      const didCreate = await CreateAcc(username, password, firstName, lastName);
  
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
        <SafeAreaView
          style={{ flex: 1, backgroundColor: "#ffffff" }}
          //   showsVerticalScrollIndicator={false}
        >
          {/*///////////// Brand view ///////////// */}
          <View
            backgroundColor="#9AD0EC"
            style={{ height: Dimensions.get("window").height / 3 }}
          >
            <View>
              <Text style={styles.brandViewText}>Register</Text>
            </View>
          </View>

          {/*///////////// Bottom View /////////////*/}
          <View style={styles.bottomView}>
            {/* Create Account View */}
            <View style={{ padding: 40, marginTop: 20 }}>
              <Text style={{ color: "#4632A1", fontSize: 22 }}>
                Create an Account
              </Text>
              <Pressable
                onPress={() => navigation.navigate("LoginScreen")}
                style={{ marginTop: 10 }}
              >
                <Text>
                  Already have an account?
                  <Text style={{ color: "red", fontStyle: "italic" }}>
                    {" "}
                    Login
                  </Text>
                </Text>
              </Pressable>

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
                          variant="rounded"
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
                          placeholder="First Name"
                          variant="rounded"
                          onChangeText={setFirstName}
                        />
                        <Text style={{ color: "red", marginLeft: 20 }}>
                          {firstnameError}
                        </Text>
                      </Stack>
                    </FormControl>
                  </Box>
                </Box>
                {/*///////////// Password /////////////*/}
                <Box alignItems="center" marginTop="5">
                  <Box w="90%" maxWidth="300px">
                    <FormControl isRequired>
                      <Stack mx="4">
                        <FormControl.Label>Password</FormControl.Label>
                        <Input
                          type="password"
                          //   defaultValue="12345"
                          placeholder="Password"
                          variant="rounded"
                          onChangeText={setPassword}
                        />
                        <Text style={{ color: "red", marginLeft: 20 }}>
                          {passwordError}
                        </Text>
                      </Stack>
                    </FormControl>
                  </Box>
                  {/* ///////////// Confirm Password /////////////*/}
                  <Box w="90%" maxWidth="300px" marginTop="5">
                    <FormControl isRequired>
                      <Stack mx="4">
                        <FormControl.Label>Confirm Password</FormControl.Label>
                        <Input
                          type="password"
                          //   defaultValue="12345"
                          placeholder="Confirm Password"
                          variant="rounded"
                          onChangeText={setConfirmPassword}
                        />
                        <Text style={{ color: "red", marginLeft: 20 }}>
                          {confirmpasswordError}
                        </Text>
                      </Stack>
                    </FormControl>
                  </Box>

                  {/*///////////// Login Button /////////////*/}
                  <Button
                    marginTop="5"
                    variant="outline"
                    w="60%"
                    onPress={handleSubmit}
                  >
                    Submit
                  </Button>
                </Box>
              </View>
            </View>
          </View>
        </SafeAreaView>
        {/*///////////// Container End ///////////// */}
      </NativeBaseProvider>
      {userCreated ? <Confirmation /> : null}
    </>
  );
}

const styles = StyleSheet.create({
  brandView: {
    flex: 1,
    // marginTop:30,
    justifyContent: "center",
    alignItems: "center",
  },
  brandViewText: {
    color: "#ffffff",
    fontSize: 22,
    //   fontWeight: "bold",
    textTransform: "uppercase",
    //   justifyContent: "center",
    alignSelf: "center",
    marginTop: "50%",
  },
  bottomView: {
    flex: 1,
    backgroundColor: "#ffffff",
    bottom: 40,
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
  },
});

export default RegisterScreen;
