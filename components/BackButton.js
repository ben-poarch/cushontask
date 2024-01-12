import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { Icon } from "@rneui/themed";

export default function BackButton() {
  return (
    <View style={styles.container}>
      <Icon name="arrow-back" />
      <Text>Back</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    columnGap: 5,
  },
});
