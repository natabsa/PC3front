
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { Link } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.section}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>Next Activities</ThemedText>
        
        <TouchableOpacity style={styles.activityCard}>
          <View style={styles.timeContainer}>
            <ThemedText style={styles.timeLabel}>De</ThemedText>
            <ThemedText style={styles.time}>09:30</ThemedText>
            <ThemedText style={styles.timeLabel}>Até</ThemedText>
            <ThemedText style={styles.time}>10:00</ThemedText>
          </View>
          <View style={styles.activityInfo}>
            <ThemedText>Alimentar Fulano</ThemedText>
          </View>
          <View style={styles.arrow}>
            <ThemedText>→</ThemedText>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.activityCard}>
          <View style={styles.timeContainer}>
            <ThemedText style={styles.timeLabel}>De</ThemedText>
            <ThemedText style={styles.time}>10:30</ThemedText>
            <ThemedText style={styles.timeLabel}>Até</ThemedText>
            <ThemedText style={styles.time}>12:00</ThemedText>
          </View>
          <View style={styles.activityInfo}>
            <ThemedText>Banhar Ciclano</ThemedText>
          </View>
          <View style={styles.arrow}>
            <ThemedText>→</ThemedText>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.activityCard}>
          <View style={styles.timeContainer}>
            <ThemedText style={styles.timeLabel}>De</ThemedText>
            <ThemedText style={styles.time}>12:00</ThemedText>
            <ThemedText style={styles.timeLabel}>Até</ThemedText>
            <ThemedText style={styles.time}>13:30</ThemedText>
          </View>
          <View style={styles.activityInfo}>
            <ThemedText>Outra atividade</ThemedText>
          </View>
          <View style={styles.arrow}>
            <ThemedText>→</ThemedText>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>Favorites</ThemedText>
        
        <TouchableOpacity style={styles.favoriteCard}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar} />
          </View>
          <View style={styles.favoriteInfo}>
            <ThemedText>Fulano</ThemedText>
            <ThemedText style={styles.subtitle}>de Tal</ThemedText>
          </View>
          <View style={styles.arrow}>
            <ThemedText>→</ThemedText>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.favoriteCard}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar} />
          </View>
          <View style={styles.favoriteInfo}>
            <ThemedText>Ciclano</ThemedText>
            <ThemedText style={styles.subtitle}>Santos</ThemedText>
          </View>
          <View style={styles.arrow}>
            <ThemedText>→</ThemedText>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.favoriteCard}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar} />
          </View>
          <View style={styles.favoriteInfo}>
            <ThemedText>Beltrano</ThemedText>
            <ThemedText style={styles.subtitle}>da Conceição</ThemedText>
          </View>
          <View style={styles.arrow}>
            <ThemedText>→</ThemedText>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <ThemedText>Home</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <ThemedText>Query</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <ThemedText>Activities</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <ThemedText>New</ThemedText>
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
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    marginBottom: 12,
  },
  activityCard: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  timeContainer: {
    marginRight: 12,
  },
  timeLabel: {
    fontSize: 12,
    color: '#666',
  },
  time: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  activityInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  favoriteCard: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    alignItems: 'center',
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
  favoriteInfo: {
    flex: 1,
  },
  subtitle: {
    fontSize: 12,
    color: '#666',
  },
  arrow: {
    justifyContent: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#6750A4',
    padding: 16,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
});
