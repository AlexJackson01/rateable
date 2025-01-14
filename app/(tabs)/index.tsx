import { StyleSheet, View, TextInput, Text } from "react-native";

import { useRef } from "react";

export default function HomeScreen() {
  const textInputRef = useRef<TextInput>(null);
  const phoneInputRef = useRef<TextInput>(null);

  return (
    <View style={styles.container}>
      {/* // Email field */}
      <Text
        style={styles.label}
        importantForAccessibility="no"
        accessibilityElementsHidden
      >
        Email address
      </Text>
      <TextInput
        ref={textInputRef}
        accessibilityLabel="Email address"
        placeholder="Email address"
        style={styles.input}
        returnKeyType="next"
        onSubmitEditing={() => phoneInputRef.current?.focus()} // Focuses phone input
      />

      {/* // Phone number field */}
      <Text
        style={styles.label}
        importantForAccessibility="no"
        accessibilityElementsHidden
      >
        Phone number
      </Text>
      <TextInput
        ref={phoneInputRef}
        accessibilityLabel="Phone number"
        placeholder="Phone number"
        style={styles.input}
        keyboardType="numeric"
        returnKeyType="done"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    margin: "auto",
  },
  label: {
    marginBottom: 10,
    justifyContent: "flex-start",
  },
  input: {
    padding: 20,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 30,
    width: 250,
    height: 60,
  },
});
