import {
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Pressable,
  Alert,
} from "react-native";
import React, { useContext, useState } from "react";

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
import { LoginAuth, getUser } from "../Services/LoginService";
import UserContext from "../Context/UserContext";

function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { loginPending, setLoginPending } = useContext(UserContext);

  const  [usernameError, setUsernameError ] = useState();
  const  [passwordError, setPasswordError ] = useState();
  const  [userfoundError, setUserFoundError] = useState();
 

  const handleLogin = async () => {

    // If username is empty proc error
    if (username != "") {
    setUsernameError("");
    }
    else{
    setUsernameError("Hey, you need to enter a Username!");
    }
     // If password is empty proc error
    if(password != ""){
      setPasswordError("");
    }
     else{
    setPasswordError("Your password should not be empty!");
    }

    //Validate username and password entered

    if(username !="" && password != ""){
      const user = await LoginAuth(username, password);
      
      //check if token has data -if token is not null 
      if (user.token != null) {

        //set current userdata
        setCurrentUser(await getUser(username));
        //Reset Error validation for form
        setUserFoundError("")
        ///navigate to Dashboard
        navigation.navigate("Dashboard");
      } else {
        setUserFoundError("Username and/or Password is incorrect.");
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
            style={{ height: Dimensions.get("window").height / 1.9 }}
          >
            <View>
              <Text style={styles.brandViewText}>Login</Text>
            </View>
          </View>

          {/*///////////// Bottom View /////////////*/}
          <View style={styles.bottomView}>
            {/* Welcome View */}
            <View style={{ padding: 40, marginTop: 20 }}>
              <Text style={{ color: "#4632A1", fontSize: 22 }}>Welcome</Text>
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
              {/*///////////// Form Inputs View /////////////*/}
              <View style={{ marginTop: 50 }}>
                {/* Username */}
                <Box alignItems="center">
                  <Box w="90%" maxWidth="300px">
                    <FormControl>
                      <Stack mx="4">
                        <FormControl.Label>Username</FormControl.Label>
                        <Input
                          type="text"
                          //   defaultValue="12345"
                          placeholder="Enter Username"
                          variant="rounded"
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
                <Box alignItems="center" marginTop="2">
                  <Box w="90%" maxWidth="300px">
                    <FormControl>
                      <Stack mx="4">
                        <FormControl.Label>Password</FormControl.Label>
                        <Input
                          type="password"
                          //   defaultValue="12345"
                          placeholder="Enter Password"
                          variant="rounded"
                          value={password}
                          onChangeText={setPassword}
                        />
                        <Text style={{ color: "red", marginLeft: 20 }}>
                          {passwordError}
                        </Text>
                      </Stack>
                    </FormControl>


                    {/*///////////// Login Button /////////////*/}
                  </Box>

                  <Text style={{ color: "red", marginLeft: 20 }}>
                          {userfoundError}
                        </Text>
                  <Button
                    onPress={handleLogin}
                    // marginTop="10"
                    variant="outline"
                    w="60%"
                  >
                    Login
                  </Button>
                </Box>
              </View>
            </View>
          </View>
        </SafeAreaView>
        {/*///////////// Container End ///////////// */}
      </NativeBaseProvider>
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

export default LoginScreen;
