import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.titleText}>Silvinha Health App</Text>
      </View>
      <View style={styles.content}>
      <Text style={styles.subTitle}>calculadora de imc</Text>
      
      <View>
        <Text style={styles.label}>ALTURA</Text>
        <TextInput
        style={styles.input}
        placeholder='Ex. 1.70'
        keyboardType='numeric'
        />


      </View>
      <View style={{marginTop: 15}}>
        <Text style={styles.label}>PESO</Text>
        <TextInput
        style={styles.input}
        placeholder='Ex. 70.500'
        keyboardType='numeric'
        />


      </View>

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
  },
  label: {
    color: '#000',
    fontSize: 18,
  },
  input:{
    height: 45,
    width: '100%',
    fontSize: 18,
    borderColor: '#A020F0',
    borderWidth: 3,
    borderRadius: 18,
    marginVertical: 5
  }
});
