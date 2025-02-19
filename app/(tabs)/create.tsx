
import { StyleSheet, View, TextInput,　TouchableOpacity　} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';

export default function CreateScreen() {
  const [type, setType] = useState('patient');
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');

  const handleSubmit = () => {
    // Handle submission to remote database
    console.log('Submitting:', { type, name, cpf });
  };

  return (
    <ScrollView style={styles.container}>
      <ThemedText style={styles.title}>Create New Record</ThemedText>
      
      <View style={styles.form}>
        <View style={styles.pickerContainer}>
          <Picker selectedValue={type} onValueChange={(value) => setType(value)} style={styles.picker}>
            <Picker.Item label="Patient" value="patient" />
            <Picker.Item label="Employee" value="employee" />
          </Picker>
        </View>

        <View style={styles.inputContainer}>
          <ThemedText>Name</ThemedText>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Enter name"
          />
        </View>

        <View style={styles.inputContainer}>
          <ThemedText>CPF</ThemedText>
          <TextInput
            style={styles.input}
            value={cpf}
            onChangeText={setCpf}
            placeholder="Enter CPF"
            keyboardType="numeric"
          />
        </View>

        
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <ThemedText style={styles.submitButtonText}>Submit</ThemedText>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  form: {
    gap: 16,
  },  pickerContainer: {
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
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#6750A4',
    padding: 8,
    borderRadius: 96,
    alignItems: 'center',
    width: 128,
    position: 'absolute',
    bottom: 16,
    right: 12,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
