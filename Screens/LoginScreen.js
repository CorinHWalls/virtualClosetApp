import { StyleSheet, Dimensions, SafeAreaView, Pressable } from "react-native";
import React, { useContext, useState } from "react";

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
import { LoginAuth, getUser } from "../Services/LoginService";
import UserContext from "../Context/UserContext";
import KeyboardAvoidingWrapper from "../Components/KeyboardAvoidingWrapper";
import Logo from "../Components/Logo";
import Colors from "../Config/Colors";
import AppButton from "../Components/AppButton";
import AppLoader from "../Components/AppLoader";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { loginPending, setLoginPending } = useContext(UserContext);

  const [usernameError, setUsernameError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [userfoundError, setUserFoundError] = useState();

  const handleLogin = async () => {
    // If username is empty proc error
    if (username != "") {
      setUsernameError("");
    } else {
      setUsernameError("Hey, you need to enter a Username!");
    }
    // If password is empty proc error
    if (password != "") {
      setPasswordError("");
    } else {
      setPasswordError("Your password should not be empty!");
    }

    //Validate username and password entered

    if (username != "" && password != "") {
      const user = await LoginAuth(username, password);

      //check if token has data -if token is not null
      if (user.token != null) {
        //set current userdata
        setCurrentUser(await getUser(username));
        //Reset Error validation for form
        setUserFoundError("");
        ///navigate to Dashboard
        setLoginPending(true)
        setTimeout(() => {
          setLoginPending(false)
          navigation.navigate("Dashboard");
        }, 3000);
      } else {
        setUserFoundError("Username and/or Password is incorrect.");
      }
    }
  };

  return (
    <>
      <NativeBaseProvider>
        {/*///////////// Container Start /////////////*/}
        {loginPending ? <AppLoader /> : null}
        <SafeAreaView style={styles.container}>
          {/*///////////// Brand view ///////////// */}

          <View style={styles.brandView}>
            <Logo style={{height: 120, width: 220}} url={require("../assets/logo.png")}/>
          </View>

          {/*///////////// Bottom View /////////////*/}
          <KeyboardAvoidingWrapper>
            <View>
              {/* Welcome View */}
              <View style={{ padding: 40 }}>
                {/*///////////// Form Inputs View /////////////*/}
                <View style={{ marginTop: 50 }}>
                  {/* Username */}
                  <Box alignItems="center">
                    <Box w="100%" maxWidth="300px">
                      <FormControl>
                        <Stack mx="4">
                          <FormControl.Label>Username</FormControl.Label>
                          <Input
                            type="text"
                            //   defaultValue="12345"
                            placeholder="Enter Username"
                            variant="filled"
                            value={username}
                            onChangeText={setUsername}
                          />
                          <Text style={{ color: "red", marginLeft: 20 }}>
                            {usernameError}
                          </Text>
                        </Stack>
                      </FormControl>
                    </Box>
                  </Box>
                  {/*///////////// Password /////////////*/}
                  <Box alignItems="center" marginTop="0">
                    <Box w="90%" maxWidth="300px">
                      <FormControl>
                        <Stack mx="4">
                          <FormControl.Label>Password</FormControl.Label>
                          <Input
                            type="password"
                            //   defaultValue="12345"
                            placeholder="Enter Password"
                            variant="filled"
                            value={password}
                            onChangeText={setPassword}
                          />
                          <Text style={{ color: "red", marginLeft: 20 }}>
                            {passwordError}
                          </Text>
                        </Stack>
                      </FormControl>
                    </Box>
              {/*///////////// Login Button /////////////*/}
              <View style={styles.buttonContainer}>
                <AppButton
                  title="Login"
                  color="secondary"
                  onPress={handleLogin}
                />
                <Text style={{ paddingTop: 20, color: "red", marginLeft: 20 }}>
                  {userfoundError}
                </Text>


                <Pressable
                  onPress={() => navigation.navigate("RegisterScreen")}
                  style={{ marginTop: 10 }}
                >
                  <Text>
                    Don't have an account?{" "}
                    <Text style={{ color: "red", fontStyle: "italic" }}>
                      Register Here!
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
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
  },

  brandView: {
    flex: 0.5,
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
  buttonContainer: {
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30
  }
});
