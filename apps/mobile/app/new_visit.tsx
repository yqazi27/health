import React, { useState } from "react";
import { View, Text, TextInput, FlatList, StyleSheet } from "react-native";
import { trpc } from "../utils/trpc";
import { Patient } from "types";

export default function NewVisitScreen() {
  const [phonePrefix, setPhonePrefix] = useState("");
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  const patientSearch = trpc.searchByPhone.useQuery(
    { prefix: phonePrefix },
    { enabled: phonePrefix.length > 2 }
  );

  const renderPatientItem = ({ item }: { item: Patient }) => (
    <Text style={styles.patientItem} onPress={() => setSelectedPatient(item)}>
      {item.name} - {item.phone}
    </Text>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Visit</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter phone number"
        value={phonePrefix}
        onChangeText={setPhonePrefix}
        keyboardType="phone-pad"
      />
      {patientSearch.isLoading && <Text>Loading...</Text>}
      {patientSearch.data && (
        <FlatList
          data={patientSearch.data}
          renderItem={renderPatientItem}
          keyExtractor={(item) => item.id}
          style={styles.list}
        />
      )}
      {selectedPatient && (
        <View style={styles.selectedPatient}>
          <Text>Selected Patient:</Text>
          <Text>{selectedPatient.name}</Text>
          <Text>{selectedPatient.phone}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  list: {
    maxHeight: 200,
  },
  patientItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  selectedPatient: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
});
