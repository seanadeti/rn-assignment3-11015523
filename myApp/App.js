import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.head}>Hello, Devs </Text>
        <Text>14 Task Today</Text>
        
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0e2d3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  head: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  heading: {
    paddingBottom: 700,
    paddingRight: 210,
  }
});
