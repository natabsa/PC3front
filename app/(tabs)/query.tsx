
import { StyleSheet, TouchableOpacity, View, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';
import { router,  } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

type HistoryEntry = {
  id: string;
  firstName: string;
  lastName: string;
};

const historyEntries: HistoryEntry[] = [
  { id: '1', firstName: 'Fulano', lastName: 'de Tal' },
  { id: '2', firstName: 'Ciclano', lastName: 'Santos'},
  { id: '3', firstName: 'Beltrano', lastName: 'da Conceição'},
];

const HistoryCard = ({ entry }: { entry: HistoryEntry }) => (
  <TouchableOpacity style={styles.historyCard} onPress={() => router.push('../patient-info')}>
    <View style={styles.avatarContainer}>
      <Ionicons name="person-circle-outline" size={48} color='#6750A4' />
    </View>
    <View style={styles.historyInfo}>
      <ThemedText>{entry.firstName}</ThemedText>
      <ThemedText style={styles.subtitle}>{entry.lastName}</ThemedText>
    </View>
    <MaterialCommunityIcons name="arrow-right-top-bold" size={24} color="#6750A4" />
  </TouchableOpacity>
);

export default function QueryScreen() {
  const [selectedType, setSelectedType] = useState('patient');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleQuery = () => {
    if (selectedType === 'patient') {
      router.push('../patient-info');
    } else {
      router.push('../employee-info');
    }
  };

  return (
    <ThemedView style={styles.container}>
      <View style={styles.form}>
        <View style={styles.pickerContainer}>
          <Picker selectedValue={selectedType} onValueChange={(value) => setSelectedType(value)} style={styles.picker}>
            <Picker.Item label="Patient" value="patient" />
            <Picker.Item label="Employee" value="employee" />
          </Picker>
        </View>

        <View style={styles.inputContainer}>
          <ThemedText>First Name</ThemedText>
          <TextInput
            style={styles.input}
            placeholder="Enter a value"
            value={firstName}
            onChangeText={setFirstName}
          />
        </View>

        <View style={styles.inputContainer}>
          <ThemedText>Last Name</ThemedText>
          <TextInput
            style={styles.input}
            placeholder="Enter a value"
            value={lastName}
            onChangeText={setLastName}
          />
        </View>

        <TouchableOpacity style={styles.queryButton} onPress={handleQuery}>
          <ThemedText style={styles.queryButtonText}>Query</ThemedText>
        </TouchableOpacity>
      </View>

      <View style={styles.historySection}>
        <ThemedText style={styles.historyTitle}>History</ThemedText>
        {historyEntries.map(entry => (
          <HistoryCard key={entry.id} entry={entry} />
        ))}
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  form: {
    gap: 16,
  },
  pickerContainer: {
    backgroundColor: '#F5F5F5',
    marginBottom: 12,
  },
  pickerLabel: {
    fontSize: 48,
    color: '#6750A4',
    marginLeft: 24,
    marginTop: 8,
  },
  picker: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 12,
    fontSize: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
  },
  inputContainer: {
    gap: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 4,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#F5F5F5',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  queryButton: {
    backgroundColor: '#6750A4',
    padding: 8,
    borderRadius: 96,
    alignItems: 'center',
    alignSelf: 'flex-end',
    width: 128,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  queryButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  historySection: {
    marginTop: 32,
  },
  historyTitle: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 16,
    color: '#1F1F1F',
  },
  historyCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  avatarContainer: {
    marginRight: 16,
  },
  historyInfo: {
    flex: 1,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  typeLabel: {
    fontSize: 12,
    color: '#6750A4',
    marginTop: 4,
    textTransform: 'capitalize',
  },
});
