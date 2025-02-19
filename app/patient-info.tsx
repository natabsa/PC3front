
import { StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { router } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Popup } from '@/components/Popup';
import { useState } from 'react';

export default function PatientInfoScreen() {
  const [showGeneralInfo, setShowGeneralInfo] = useState(false);
  const [showAllergies, setShowAllergies] = useState(false);
  const [showIllnesses, setShowIllnesses] = useState(false);
  const [showActivities, setShowActivities] = useState(false);

  const patient = {nome: "Fulano de Tal", cpf: "123.456.789-00"}

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={64} color="#fff" />
        </View>
        <ThemedText style={styles.name}>{patient.nome}</ThemedText>
      </View>

      <View style={styles.grid}>
        <TouchableOpacity style={styles.gridItem} onPress={() => setShowGeneralInfo(true)}>
          <Ionicons name="information-circle-outline" size={32} color="#6750A4" />
          <ThemedText style={styles.gridItemText}>General{'\n'}Info</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem} onPress={() => setShowAllergies(true)}>
          <MaterialCommunityIcons name="hand-heart" size={32} color="#6750A4" />
          <ThemedText style={styles.gridItemText}>Allergies</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem} onPress={() => setShowIllnesses(true)}>
          <MaterialCommunityIcons name="heart-pulse" size={32} color="#6750A4" />
          <ThemedText style={styles.gridItemText}>Illnesses</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem} onPress={() => setShowActivities(true)}>
          <MaterialCommunityIcons name="clipboard-list" size={32} color="#6750A4" />
          <ThemedText style={styles.gridItemText}>Activities</ThemedText>
        </TouchableOpacity>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.updateButton}>
          <ThemedText style={styles.updateButtonText}>Update</ThemedText>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.deleteButton}>
          <ThemedText style={styles.deleteButtonText}>Delete</ThemedText>
        </TouchableOpacity>
      </View>

      <Popup visible={showGeneralInfo} onClose={() => setShowGeneralInfo(false)} title="General Information">
        <ThemedText>Name: {patient.nome}</ThemedText>
        <ThemedText>CPF: {patient.cpf}</ThemedText>
      </Popup>

      <Popup visible={showAllergies} onClose={() => setShowAllergies(false)} title="Allergies">
        <ThemedText>No known allergies</ThemedText>
      </Popup>

      <Popup visible={showIllnesses} onClose={() => setShowIllnesses(false)} title="Illnesses">
        <ThemedText>No registered illnesses</ThemedText>
      </Popup>

      <Popup visible={showActivities} onClose={() => setShowActivities(false)} title="Activities">
        <ThemedText>No scheduled activities</ThemedText>
      </Popup>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#6750A4',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    padding: 32,
    justifyContent: 'center',
    marginBottom: 32,
  },
  gridItem: {
    width: '45%',
    aspectRatio: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridItemText: {
    marginTop: 8,
    textAlign: 'center',
  },
  actions: {
    gap: 16,
  },
  updateButton: {
    backgroundColor: '#6750A4',
    padding: 8,
    marginHorizontal: 56,
    borderRadius: 8,
    alignItems: 'center',
  },
  deleteButton: {
    borderWidth: 1,
    marginHorizontal: 56,
    borderColor: '#DC3545',
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  updateButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  deleteButtonText: {
    color: '#DC3545',
    fontSize: 16,
    fontWeight: '500',
  },
});
