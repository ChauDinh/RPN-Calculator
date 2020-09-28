import React from "react";
import { Text, StyleSheet, View } from "react-native";
import PropTypes from "prop-types";

interface Props {
  text: string;
  special?: boolean;
}

const baseContainer = {
  alignItems: "center",
  justifyContent: "center",
  borderRightWidth: 1,
  borderColor: "#fff",
};

const baseText = {
  fontSize: 36,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const styles = StyleSheet.create<any>({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    ...baseContainer,
  },
  specialContainer: {
    flex: 2,
    backgroundColor: "#9bc23c",
    ...baseContainer,
  },
  text: baseText,
  specialText: {
    ...baseText,
    color: "#fff",
  },
});

export default function Button(props: Props): JSX.Element {
  return (
    <View style={props.special ? styles.specialContainer : styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  special: PropTypes.bool,
};
