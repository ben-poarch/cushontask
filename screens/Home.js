import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Button,
  SafeAreaView,
} from "react-native";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Which account do you wish to view?</Text>
      <Button
        title="Employers"
        color={"white"}
        onPress={() => navigation.navigate("FundEmployer")}
      />
      <Button
        title="Customers"
        color={"white"}
        onPress={() => navigation.navigate("FundCustomer")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e72d90",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    rowGap: 20,
  },
  text: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});
