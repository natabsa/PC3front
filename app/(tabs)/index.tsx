import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { Link } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

type Activity = {
  id: string;
  startTime: string;
  endTime: string;
  description: string;
};

type Favorite = {
  id: string;
  firstName: string;
  lastName: string;
};

const activities: Activity[] = [
  { id: '1', startTime: '09:30', endTime: '10:00', description: 'Alimentar Fulano' },
  { id: '2', startTime: '10:30', endTime: '12:00', description: 'Banhar Ciclano' },
  { id: '3', startTime: '12:00', endTime: '13:30', description: 'Outra atividade' },
];

const favorites: Favorite[] = [
  { id: '1', firstName: 'Fulano', lastName: 'de Tal' },
  { id: '2', firstName: 'Ciclano', lastName: 'Santos' },
  { id: '3', firstName: 'Beltrano', lastName: 'da Conceição' },
];

const ActivityCard = ({ activity }: { activity: Activity }) => (
  <TouchableOpacity style={styles.activityCard}>
    <View style={styles.timeContainer}>
      <ThemedText style={styles.timeLabel}>De</ThemedText>
      <ThemedText style={styles.time}>{activity.startTime}</ThemedText>
      <ThemedText style={styles.timeLabel}>Até</ThemedText>
      <ThemedText style={styles.time}>{activity.endTime}</ThemedText>
    </View>
    <View style={styles.activityInfo}>
      <ThemedText>{activity.description}</ThemedText>
    </View>
    <View style={styles.arrow}>
      <ThemedText>→</ThemedText>
    </View>
  </TouchableOpacity>
);

const FavoriteCard = ({ favorite }: { favorite: Favorite }) => (
  <TouchableOpacity style={styles.favoriteCard}>
    <View style={styles.avatarContainer}>
      <View style={styles.avatar} />
    </View>
    <View style={styles.favoriteInfo}>
      <ThemedText>{favorite.firstName}</ThemedText>
      <ThemedText style={styles.subtitle}>{favorite.lastName}</ThemedText>
    </View>
    <View style={styles.arrow}>
      <ThemedText>→</ThemedText>
    </View>
  </TouchableOpacity>
);

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.section}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>Next Activities</ThemedText>
        {activities.map(activity => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </View>

      <View style={styles.section}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>Favorites</ThemedText>
        {favorites.map(favorite => (
          <FavoriteCard key={favorite.id} favorite={favorite} />
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
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    marginBottom: 12,
  },
  activityCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
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
});