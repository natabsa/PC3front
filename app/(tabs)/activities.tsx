
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';

type Activity = {
  id: string;
  startTime: string;
  endTime: string;
  description: string;
};

const ActivityCard = ({ activity, onToggle, isChecked }: { 
  activity: Activity; 
  onToggle: () => void;
  isChecked: boolean;
}) => (
  <View style={styles.activityCard}>
    <View style={styles.timeContainer}>
      <View style={styles.timeSlot}>
        <ThemedText style={styles.timeLabel}>De</ThemedText>
        <ThemedText style={styles.time}>{activity.startTime}</ThemedText>
      </View>
      <View style={styles.timeSlot}>
        <ThemedText style={styles.timeLabel}>Até</ThemedText>
        <ThemedText style={styles.time}>{activity.endTime}</ThemedText>
      </View>
    </View>
    <View style={styles.activityInfo}>
      <ThemedText>{activity.description}</ThemedText>
      <ThemedText style={styles.seeMore}>See more...</ThemedText>
    </View>
    <TouchableOpacity style={styles.checkbox} onPress={onToggle}>
      {isChecked && <ThemedText style={styles.checkmark}>✓</ThemedText>}
    </TouchableOpacity>
  </View>
);

export default function ActivitiesScreen() {
  const [checkedActivities, setCheckedActivities] = useState<Set<string>>(new Set());

  const activities: Activity[] = [
    { id: '1', startTime: '09:30', endTime: '10:00', description: 'Alimentar Fulano' },
    { id: '2', startTime: '10:30', endTime: '12:00', description: 'Banhar Ciclano' },
    { id: '3', startTime: '12:00', endTime: '13:30', description: 'Outra atividade' },
  ];

  const toggleActivity = (id: string) => {
    const newChecked = new Set(checkedActivities);
    if (newChecked.has(id)) {
      newChecked.delete(id);
    } else {
      newChecked.add(id);
    }
    setCheckedActivities(newChecked);
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Next Activities</ThemedText>
      {activities.map((activity) => (
        <ActivityCard
          key={activity.id}
          activity={activity}
          isChecked={checkedActivities.has(activity.id)}
          onToggle={() => toggleActivity(activity.id)}
        />
      ))}
    </ThemedView>
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
  activityCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  timeContainer: {
    marginRight: 16,
  },
  timeSlot: {
    alignItems: 'flex-start',
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
  },
  seeMore: {
    color: '#666',
    fontSize: 12,
    marginTop: 4,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#6750A4',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    color: '#6750A4',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
