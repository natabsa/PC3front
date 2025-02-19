
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
          <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
            <ThemedText style={styles.closeIconText}>✕</ThemedText>
          </TouchableOpacity>
          {title && <ThemedText style={styles.title}>{title}</ThemedText>}
          {children}
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
  closeIcon: {
    position: 'absolute',
    top: 12,
    left: 12,
    padding: 8,
    zIndex: 1,
  },
  closeIconText: {
    fontSize: 18,
    color: '#666',
  },
});
