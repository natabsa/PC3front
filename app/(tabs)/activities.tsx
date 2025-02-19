
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';
import { Popup } from '@/components/Popup';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

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
}) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <View style={styles.activityCard}>
      <View style={styles.timeContainer}>
        <View style={styles.timeSlot}>
          <ThemedText style={styles.timeLabel}>From {activity.startTime}</ThemedText>
        </View>
        <View style={styles.timeSlot}>
          <ThemedText style={styles.timeLabel}>To {activity.endTime}</ThemedText>
        </View>
      </View>
      <TouchableOpacity style={styles.activityInfo} onPress={() => setShowPopup(true)}>
        <ThemedText>{activity.description}</ThemedText>
        <ThemedText style={styles.seeMore}>See more...</ThemedText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.checkbox} onPress={onToggle}>
        {isChecked && <FontAwesome6 name="check" size={16} color="black" />}
      </TouchableOpacity>

      <Popup visible={showPopup} onClose={() => setShowPopup(false)} title="Activity Description">
        ajudar o garotinha la na questao de la arrumacion del inventario e tambem no reestoque do inventario de mateirais de construcao e enfermaria tambien
      </Popup>
    </View>
  );
};

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
    marginBottom: 16,
  },
  activityCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 12,
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
  popupContent: {
    gap: 12,
  },
  popupTime: {
    fontSize: 16,
    color: '#666',
  },
  popupDescription: {
    fontSize: 18,
    lineHeight: 24,
  },
});
