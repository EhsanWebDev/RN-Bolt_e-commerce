import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { colors, sizes } from "../../constants/theme";
import Container from "./Container";
import GeneralText from "./GeneralText";

const Input = (props) => {
  const { label, placeholder } = props;
  return (
    <KeyboardAvoidingView
      behavior="height"
      style={{ marginTop: sizes.m_sm * 2 }}
    >
      <GeneralText color={colors.muted} size={sizes.font_14}>
        {label}
      </GeneralText>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.dark2}
        style={styles.input_styles}
        {...props}
      />
    </KeyboardAvoidingView>
  );
};
Input.defaultProps = {
  label: "Label",
  placeholder: "Type anything",
};

const styles = StyleSheet.create({
  input_styles: {
    borderBottomColor: colors.borderColor,
    borderBottomWidth: 2,
  },
});

export default Input;

// [
//   "default",
//   "email-address",
//   "numeric",
//   "phone-pad",
//   "number-pad",
//   "ascii-capable",
//   "numbers-and-punctuation",
//   "url",
//   "name-phone-pad",
//   "decimal-pad",
//   "twitter",
//   "web-search",
//   "ascii-capable-number-pad",
//   "visible-password",
// ];
