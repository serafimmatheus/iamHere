import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#1f1e25",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 10,
  },

  name: {
    color: "#fff",
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },

  button: {
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#e23c44",
  },

  buttonText: {
    color: "#fdfcfe",
    fontSize: 24,
  },
});
