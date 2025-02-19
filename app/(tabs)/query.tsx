
import { StyleSheet, TouchableOpacity, View, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';

export default function QueryScreen() {
  const [selectedType, setSelectedType] = useState('patient');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleQuery = () => {
    // Handle query logic here
    console.log('Querying:', { selectedType, firstName, lastName });
  };

  return (
    <ThemedView style={styles.container}>
      <View style={styles.form}>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedType}
            onValueChange={(value) => setSelectedType(value)}
            style={styles.picker}
          >
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
        
        <TouchableOpacity style={styles.historyCard}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar} />
          </View>
          <View style={styles.historyInfo}>
            <ThemedText>Fulano</ThemedText>
            <ThemedText style={styles.subtitle}>de Tal</ThemedText>
          </View>
          <View style={styles.arrow}>
            <ThemedText>→</ThemedText>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.historyCard}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar} />
          </View>
          <View style={styles.historyInfo}>
            <ThemedText>Ciclano</ThemedText>
            <ThemedText style={styles.subtitle}>Santos</ThemedText>
          </View>
          <View style={styles.arrow}>
            <ThemedText>→</ThemedText>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.historyCard}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar} />
          </View>
          <View style={styles.historyInfo}>
            <ThemedText>Beltrano</ThemedText>
            <ThemedText style={styles.subtitle}>da Conceição</ThemedText>
          </View>
          <View style={styles.arrow}>
            <ThemedText>→</ThemedText>
          </View>
        </TouchableOpacity>
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
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 8,
  },
  picker: {
    height: 50,
  },
  inputContainer: {
    gap: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  queryButton: {
    backgroundColor: '#6750A4',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  queryButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  historySection: {
    marginTop: 24,
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  historyCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  avatarContainer: {
    marginRight: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    backgroundColor: '#6750A4',
    borderRadius: 20,
  },
  historyInfo: {
    flex: 1,
  },
  subtitle: {
    fontSize: 12,
    color: '#666',
  },
  arrow: {
    justifyContent: 'center',
  },
});
