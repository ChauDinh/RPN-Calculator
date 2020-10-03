import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, SafeAreaView, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Animatable from "react-native-animatable";

import Button from "./components/Button/Button";
import {
  pressEnter,
  pressNumber,
  pressOperator,
  pressClear,
  pressSwap,
  toggleNegative,
} from "./reducer";

const baseNumber = {
  backgroundColor: "#494949",
  padding: 10,

  fontSize: 40,
  fontWeight: "600",
  textAlign: "right",
};

const styles: any = StyleSheet.create({
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
    borderBottomWidth: 1,
    borderColor: "#fafafa",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fafafa",
    borderBottomWidth: 1,
    borderColor: "#fff",
  },
  append: {
    color: "#fff",
    ...baseNumber,
  },
  replace: {
    color: "#2e71e5",
    ...baseNumber,
  },
  push: {
    color: "#9bc23c",
    ...baseNumber,
  },
});

function Main({
  calculatorState: { stack, inputState },
  pressNumberWithDispatch,
  pressEnterWithDispatch,
  pressOperatorWithDispatch,
  pressClearWithDispatch,
  pressSwapWithDispatch,
  toggleNegativeWithDispatch,
}: {
  calculatorState: { stack: string[]; inputState: string };
  pressNumberWithDispatch: void;
  pressEnterWithDispatch: void;
  pressOperatorWithDispatch: void;
  pressClearWithDispatch: void;
  pressSwapWithDispatch: void;
  toggleNegativeWithDispatch: any;
}): JSX.Element {
  const inputRef: React.MutableRefObject<any> = React.useRef(null);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity
          onPress={() => toggleNegativeWithDispatch(2)}
          style={styles.number}
        >
          <Animatable.Text ref={inputRef} style={styles.append}>
            {stack[2] || 0}
          </Animatable.Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => toggleNegativeWithDispatch(1)}
          style={styles.number}
        >
          <Animatable.Text ref={inputRef} style={styles.append}>
            {stack[1] || 0}
          </Animatable.Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => toggleNegativeWithDispatch(0)}
          style={styles.number}
        >
          <Animatable.Text ref={inputRef} style={styles[inputState]}>
            {stack[0] || 0}
          </Animatable.Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <View style={styles.row}>
          <Button text="clear" onPress={pressClearWithDispatch} />
          <Button text="pow" onPress={pressOperatorWithDispatch} />
          <Button text="swap" onPress={pressSwapWithDispatch} />
          <Button text="/" onPress={pressOperatorWithDispatch} />
        </View>
        <View style={styles.row}>
          <Button text="9" onPress={pressNumberWithDispatch} />
          <Button text="8" onPress={pressNumberWithDispatch} />
          <Button text="7" onPress={pressNumberWithDispatch} />
          <Button text="X" onPress={pressOperatorWithDispatch} />
        </View>
        <View style={styles.row}>
          <Button text="6" onPress={pressNumberWithDispatch} />
          <Button text="5" onPress={pressNumberWithDispatch} />
          <Button text="4" onPress={pressNumberWithDispatch} />
          <Button text="-" onPress={pressOperatorWithDispatch} />
        </View>
        <View style={styles.row}>
          <Button text="3" onPress={pressNumberWithDispatch} />
          <Button text="2" onPress={pressNumberWithDispatch} />
          <Button text="1" onPress={pressNumberWithDispatch} />
          <Button text="+" onPress={pressOperatorWithDispatch} />
        </View>
        <View style={styles.row}>
          <Button text="0" onPress={pressNumberWithDispatch} />
          <Button text="." onPress={pressNumberWithDispatch} />
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
        pressOperatorWithDispatch: pressOperator,
        pressClearWithDispatch: pressClear,
        pressSwapWithDispatch: pressSwap,
        toggleNegativeWithDispatch: toggleNegative,
      },
      dispatch
    )
)(Main as any);
