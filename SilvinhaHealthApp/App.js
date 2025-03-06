import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.titleText}>Silvinha Health App</Text>
      </View>
      <View style={styles.content}>
      <Text style={styles.subTitle}>calculadora de imc</Text>
      </View>
      

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleBox: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 100,
    backgroundColor: '#A020F0',
    borderBottomStartRadius: 40,
    borderBottomEndRadius: 40,
  },
  titleText:
  {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    flex: 1,
    padding: 40,
    width: '100%',
    backgroundColor: '#fff'
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 27,
    color: '#A020F0',
    fontWeight: 'bold',
    marginBottom:40,
  }
});
