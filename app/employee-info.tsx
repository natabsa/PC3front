
import { StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { router } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function EmployeeInfoScreen() {
  const employee = {
    nome: "Fulano de Tal",
    cpf: "123.456.789-10",
    phone: "10 9 8765 4321",
    address: "EdgeOfTheWorld St, -1, Alderaan",
    admin: false,
    birthday: "2001.01.01"
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={64} color="#fff" />
        </View>
        <ThemedText style={styles.name}>{employee.nome}</ThemedText>
      </View>

      <View style={styles.infoContainer}>
        <ThemedText>• CPF: {employee.cpf}</ThemedText>
        <ThemedText>• Phone: {employee.phone}</ThemedText>
        <ThemedText>• Address: {employee.address}</ThemedText>
        <ThemedText>• Admin: {employee.admin ? 'True' : 'False'}</ThemedText>
        <ThemedText>• Birthday: {employee.birthday}</ThemedText>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.updateButton}>
          <ThemedText style={styles.updateButtonText}>Update</ThemedText>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.deleteButton}>
          <ThemedText style={styles.deleteButtonText}>Delete</ThemedText>
        </TouchableOpacity>
      </View>
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
  infoContainer: {
    backgroundColor: '#F5F5F5',
    padding: 20,
    borderRadius: 8,
    gap: 12,
    marginBottom: 32,
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
