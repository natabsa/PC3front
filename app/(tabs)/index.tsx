import { StyleSheet, TouchableOpacity, View, Image , ScrollView} from 'react-native';
import { Link, router } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

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

const ActivityCard = ({ activity }) => (
  <View style={styles.activityCard}>
    <View style={styles.timeContainer}>
      <ThemedText style={styles.timeLabel}>From {activity.startTime}</ThemedText>
      <ThemedText style={styles.timeLabel}>To {activity.endTime}</ThemedText>
    </View>
    <View style={styles.activityInfo}>
      <ThemedText>{activity.description}</ThemedText>
    </View>
    <Link href="/activities" style={{marginTop:12}} ><MaterialCommunityIcons name="arrow-right-top-bold" size={24} color="#6750A4" /></Link>
  </View>
);

const FavoriteCard = ({ favorite }: { favorite: Favorite }) => (
  <View style={styles.favoriteCard}>
    <View style={styles.avatarContainer}>
      <Ionicons name="person-circle-outline" size={48} color='#6750A4' />
    </View>
    <View style={styles.favoriteInfo}>
      <ThemedText>{favorite.firstName}</ThemedText>
      <ThemedText style={styles.subtitle}>{favorite.lastName}</ThemedText>
    </View>
    <Link href="../patient-info" ><MaterialCommunityIcons name="arrow-right-top-bold" size={24} color="#6750A4" /></Link>
  </View>
);

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
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
    </ScrollView>
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
    marginRight: 16,
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
    paddingRight: 12,
    paddingLeft: 12,
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