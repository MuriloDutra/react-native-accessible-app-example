import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ExamplesScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Examples List</ThemedText>
      <ThemedText style={styles.subtitle}>
        This screen will contain examples of accessible components and not accessible components.
      </ThemedText>
      <ThemedText style={styles.subtitle}>
        Folder Structure
      </ThemedText>
      <ThemedText style={styles.subtitle}>
        Add most used components in react-native
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    opacity: 0.7,
  },
}); 