import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Button from "./components/Button/Button";
import { pressEnter, pressNumber } from "./reducer";

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

function Main({
  calculatorState: { stack, inputState },
  pressNumberWithDispatch,
  pressEnterWithDispatch,
}: {
  currentNumber: string;
  pressNumberWithDispatch: void;
}): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <View style={styles.number}>
          <Text style={styles.numberText}>{stack[2] || 0}</Text>
        </View>
        <View style={styles.number}>
          <Text style={styles.numberText}>{stack[1] || 0}</Text>
        </View>
        <View style={styles.number}>
          <Text style={styles.numberText}>{stack[0] || 0}</Text>
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
          <Button text="9" onPress={pressNumberWithDispatch} />
          <Button text="8" onPress={pressNumberWithDispatch} />
          <Button text="7" onPress={pressNumberWithDispatch} />
          <Button text="X" />
        </View>
        <View style={styles.row}>
          <Button text="6" onPress={pressNumberWithDispatch} />
          <Button text="5" onPress={pressNumberWithDispatch} />
          <Button text="4" onPress={pressNumberWithDispatch} />
          <Button text="-" />
        </View>
        <View style={styles.row}>
          <Button text="3" onPress={pressNumberWithDispatch} />
          <Button text="2" onPress={pressNumberWithDispatch} />
          <Button text="1" onPress={pressNumberWithDispatch} />
          <Button text="+" />
        </View>
        <View style={styles.row}>
          <Button text="0" onPress={pressNumberWithDispatch} />
          <Button text="." />
          <Button text="Enter" special onPress={pressEnterWithDispatch} />
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default connect(
  (state) => ({ calculatorState: state }),
  (dispatch) =>
    bindActionCreators(
      {
        pressNumberWithDispatch: pressNumber,
        pressEnterWithDispatch: pressEnter,
      },
      dispatch
    )
)(Main as any);
