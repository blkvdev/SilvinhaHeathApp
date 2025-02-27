import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.titleText}>Silvinha Health App</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ef2333c',
  },
  titleBox: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 100,
    backgroundColor: '#000',
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
  },
  titleText:
  {
    color: '#aff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
