import React from "react";
import { useState } from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";

export default function InvestmentCard(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.fund}</Text>
      <Text style={styles.text}>{props.risk}</Text>
      <Text style={styles.amount}>{props.amount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderTopWidth: 10,
    borderTopColor: "#e72d90",
    width: "90%",
    height: 200,
    borderRadius: 5,
    alignSelf: "center",
    padding: 20,
    borderWidth: 0.2,
    borderColor: "grey",
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 5,
  },
  text: {
    fontSize: 14,
  },
  amount: {
    fontSize: 30,
    paddingTop: 50,
    color: "#e72d90",
    fontWeight: "bold",
  },
});
