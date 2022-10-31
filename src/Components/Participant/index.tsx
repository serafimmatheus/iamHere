import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

type Props = {
  name: String;
  onRemove: () => void;
};

export const Participant = ({ name, onRemove }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
};
