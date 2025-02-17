import React from "react";
import { View, Text, Button, SafeAreaView, StyleSheet } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/RootStackPramList";

// Definir los tipos de props para la pantalla
type Props = StackScreenProps<RootStackParamList, "Settings">;

const Settings: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>SettingsScreen</Text>
      <Button title="Go to Settings"  />
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
});