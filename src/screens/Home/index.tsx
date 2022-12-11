import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Text key="1" style={styles.eventName}>Data</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>
      <StatusBar style="auto" />
    </View>
  );
}