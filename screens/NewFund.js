import React from "react";
import { useState } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import BackButton from "../components/BackButton";
import { ButtonGroup } from "@rneui/themed";

let ISAs = ["Equities Fund", "CushionMix", "Default", "Custom"];
let riskLevels = ["Low risk", "Medium risk", "High risk", "V High risk"];

export default function NewFund({ navigation }) {
  const [selectedIndexISA, setSelectedIndexISA] = useState(0);
  const [selectedIndexesISA, setSelectedIndexesISA] = useState([0, 1, 2, 3]);
  const [selectedIndexRisk, setSelectedIndexRisk] = useState(0);
  const [selectedIndexesRisk, setSelectedIndexesRisk] = useState([0, 1, 2, 3]);
  const [newAmount, setNewAmount] = React.useState();

  var data = require("/Users/benpoarch/cushonTask/Database/funds.json");

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <BackButton />
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.title}>Select your new fund</Text>
        <Text style={styles.text}>This will replace your current fund.</Text>
      </View>
      <View>
        <Text style={styles.selectionText}>Investment portfolio</Text>
        <ButtonGroup
          buttons={ISAs}
          activeOpacity={0.1}
          color={"red"}
          buttonStyle={styles.ISAButton}
          selectedButtonStyle={styles.ISAButtonSelected}
          selectedIndex={selectedIndexISA}
          onPress={(value) => {
            setSelectedIndexISA(value);
          }}
          containerStyle={{ marginBottom: 20 }}
        />
      </View>
      <View>
        <Text style={styles.selectionText}>Risk / Return Level</Text>
        <ButtonGroup
          buttons={riskLevels}
          activeOpacity={0.1}
          color={"red"}
          buttonStyle={styles.ISAButton}
          selectedButtonStyle={styles.ISAButtonSelected}
          selectedIndex={selectedIndexRisk}
          onPress={(value) => {
            setSelectedIndexRisk(value);
          }}
          containerStyle={{ marginBottom: 20 }}
        />
      </View>
      <View>
        <Text style={styles.selectionText}>Select amount</Text>
        <TextInput
          style={styles.input}
          onChangeText={newAmount}
          value={newAmount}
          placeholder="e.g. £25,000"
          keyboardType="numeric"
        />
        <Text style={[styles.validation, { opacity: newAmount > 0 ? 0 : 100 }]}>
          Please enter a valid amount.
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("FundCustomer")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Create ISA</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    rowGap: 30,
  },
  header: {
    rowGap: 10,
    left: 15,
    justifyContent: "center",
    marginBottom: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
    fontSize: 14,
  },
  validation: {
    fontSize: 14,
    color: "red",
    left: 10,
  },
  selectionText: {
    fontSize: 14,
    left: 10,
  },
  ISAButton: {},
  ISAButtonSelected: {
    backgroundColor: "#e72d90",
  },
  input: {
    width: "50%",
    left: 10,
    borderWidth: 1,
    borderColor: "grey",
    padding: 10,
    marginTop: 3,
  },

  amount: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  button: {
    borderRadius: 5,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "grey",
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
