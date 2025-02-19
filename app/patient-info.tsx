
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function PatientInfoScreen() {
  return (
    <ThemedView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      <View style={styles.header}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={64} color="#fff" />
        </View>
        <ThemedText style={styles.name}>Fulano de Tal</ThemedText>
      </View>

      <View style={styles.grid}>
        <TouchableOpacity style={styles.gridItem}>
          <Ionicons name="information-circle-outline" size={32} color="#6750A4" />
          <ThemedText style={styles.gridItemText}>General{'\n'}Info</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem}>
          <MaterialCommunityIcons name="hand-heart" size={32} color="#6750A4" />
          <ThemedText style={styles.gridItemText}>Allergies</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem}>
          <MaterialCommunityIcons name="heart-pulse" size={32} color="#6750A4" />
          <ThemedText style={styles.gridItemText}>Illnesses</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem}>
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
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  backButton: {
    marginBottom: 16,
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
    justifyContent: 'center',
    marginBottom: 32,
  },
  gridItem: {
    width: '45%',
    aspectRatio: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 16,
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
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  deleteButton: {
    borderWidth: 1,
    borderColor: '#DC3545',
    padding: 16,
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
