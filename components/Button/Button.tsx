import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import * as Animatable from "react-native-animatable";

interface Props {
  text: string;
  special?: boolean;
  onPress?: any;
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
    backgroundColor: "#f2f2f2",
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
  const textRef: React.MutableRefObject<any> = React.useRef(null);
  return (
    <TouchableOpacity
      onPress={() => {
        textRef.current?.rubberBand(1000);
        props.onPress(props.text);
      }}
      style={props.special ? styles.specialContainer : styles.container}
    >
      <Animatable.Text ref={textRef} style={styles.text}>
        {props.text}
      </Animatable.Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  special: PropTypes.bool,
};
