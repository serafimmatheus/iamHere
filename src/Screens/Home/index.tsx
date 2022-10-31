import React from "react";
import {
  Alert,
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Participant } from "../../Components/Participant";
import { styles } from "./style";

export const Home = () => {
  const participants = [
    "Matheus",
    "Laís",
    "Moises",
    "Vanessa",
    "Hilde",
    "Cabral",
    "Valmir",
    "Anthony",
  ];
  const handleAddParticipants = (name: String) => {
    if (participants.includes("Matheus")) {
      return Alert.alert(
        "Participante existente!",
        "Já existe um participante na lista com esse nome."
      );
    }
  };
  const handleRemoveParticipants = (name: string) => {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => Alert.alert("Removido!"),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>I'am Here</Text>
      <Text style={styles.eventDate}>Domingo, 30 de Outubro de 2022.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity style={styles.button} onPress={handleAddParticipants}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map((elem) => (
          <Participant
            key={elem}
            name={elem}
            onRemove={() => handleRemoveParticipants(elem)}
          />
        ))}
      </ScrollView> */}

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleRemoveParticipants(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguem chegou no evento ainda? Adicione participantes a sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  );
};
