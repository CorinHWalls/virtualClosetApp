import {
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Pressable,
  Alert,
  Text,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../Context/UserContext";
import AppLoader from "../Components/AppLoader";
import Card from "../Components/Card";
import Box from "../Components/Box";
import {getCategoryItems} from "../Services/ItemService";
import Category from "../Components/Category";

function Dashboard(props) {
  const { currentUser } = useContext(UserContext);
  const { loginPending, setLoginPending } = useContext(UserContext);
 

  const [category, setCategory] = useState();

  useEffect(async () => {
    let pick = await getCategoryItems("Shirt", currentUser)
    setCategory(await getCategoryItems('Shirt', currentUser[0].id));
    //handling effects
    setLoginPending(true);
    setTimeout(() => {
      setLoginPending(false);
    }, 3000);
  }, []);
  console.log(category)

  return (
    <>
      <SafeAreaView style={styles.container}>
     {/* Start of Main Container */}



      {/* Initial ScrollView container */}
        <ScrollView scrollEventToggle={16}>
            <View
              style={styles.scrollSection}
            >
              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}
              >
                <Category />
              </ScrollView>
            </View>
        </ScrollView>

        <FlatList>

        </FlatList>

        {/* End of Main Container */}
      </SafeAreaView>

      {/* <ScrollView>
    {categories.map((category, idx) =>{
      return(
        <Pressable
        key={idx}>
        <Box title="test"/>
        </Pressable>
        )
      })}
    </ScrollView> */}

      {loginPending ? <AppLoader /> : null}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(239,218,215)",
    paddingTop: 50,
  },
  boxContainer: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    flexWrap: "wrap",
    padding: 5,
  },
  scrollSection: {
    margin: 10,
    height: 60,
    marginTop: 20,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderWidth: 0.2,
    borderColor: "black",
    borderRadius: 5,
    paddingTop: 15,
  },
});

export default Dashboard;
