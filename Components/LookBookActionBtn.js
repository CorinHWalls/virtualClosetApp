import { StyleSheet } from "react-native";
import ActionButton from "react-native-action-button";
import { useNavigation } from "@react-navigation/native";

export default function LookBookActionBtn() {
  const navigation = useNavigation(); //had to use navigation hook due to error

  return (
    <>
      <ActionButton
        onPress={() => {
          navigation.navigate("Select");
        }}
        buttonColor="rgb(21,114,161)"
      ></ActionButton>
    </>
  );
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white",
  },
});
