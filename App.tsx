import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";

import Button from "./components/Button/Button";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  top: {
    paddingTop: 20,
  },
  bottom: {
    backgroundColor: "#fafafa",
    flex: 1,
  },
  number: {
    backgroundColor: "#494949",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#fafafa",
  },
  numberText: {
    color: "#fafafa",
    fontSize: 40,
    fontWeight: "600",
    textAlign: "right",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fafafa",
    borderBottomWidth: 1,
    borderColor: "#fff",
  },
});

export default function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <View style={styles.number}>
          <Text style={styles.numberText}>0</Text>
        </View>
        <View style={styles.number}>
          <Text style={styles.numberText}>0</Text>
        </View>
        <View style={styles.number}>
          <Text style={styles.numberText}>0</Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.row}>
          <Button text="clear" />
          <Button text="pow" />
          <Button text="swap" />
          <Button text="/" />
        </View>
        <View style={styles.row}>
          <Button text="9" />
          <Button text="8" />
          <Button text="7" />
          <Button text="X" />
        </View>
        <View style={styles.row}>
          <Button text="6" />
          <Button text="5" />
          <Button text="4" />
          <Button text="-" />
        </View>
        <View style={styles.row}>
          <Button text="3" />
          <Button text="2" />
          <Button text="1" />
          <Button text="+" />
        </View>
        <View style={styles.row}>
          <Button text="0" />
          <Button text="." />
          <Button text="Enter" special />
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
