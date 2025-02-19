
import React from 'react';
import { Modal, View, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

type PopupProps = {
  visible: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

export function Popup({ visible, onClose, title, children }: PopupProps) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <ThemedView style={styles.container}>
          {title && <ThemedText style={styles.title}>{title}</ThemedText>}
          {children}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <ThemedText style={styles.closeButtonText}>Close</ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#6750A4',
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontWeight: '500',
  },
});
