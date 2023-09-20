import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import InvestmentCard from "../components/InvestmentCard";
import { Icon } from "@rneui/themed";

export default function FundEmployer({ navigation }) {
  const [amount, setAmount] = useState(100000);
  const [fundName, setFundName] = useState("CushonMix");
  const [riskLevel, setRiskLevel] = useState(
    "CushonMix very high risk / return"
  );
  let amountText = "£" + amount.toLocaleString();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerIcons}>
          <Icon name="mail" color={"white"} />
          <Icon
            name="settings"
            color={"white"}
            onPress={() => navigation.goBack()}
          />
        </View>
        <Text style={styles.title}>Total Investments</Text>
        <Text style={styles.amount}>{amountText}</Text>
      </View>

      <View
        onPress={() => navigation.navigate("ViewFund")}
        style={styles.mainScreen}
      >
        <InvestmentCard amount={amountText} fund={fundName} risk={riskLevel} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    rowGap: 30,
  },
  header: {
    height: 200,
    width: "100%",
    alignItems: "center",
    rowGap: 10,
    backgroundColor: "#e72d90",
    paddingTop: 100,
    justifyContent: "space-evenly",
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },

  headerIcons: {
    position: "absolute",
    paddingTop: 60,
    columnGap: 15,
    right: 25,
    flexDirection: "row",
  },

  mainScreen: {},

  title: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  text: {
    fontSize: 14,
  },
  amount: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
});
