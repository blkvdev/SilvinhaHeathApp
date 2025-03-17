import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons"

export default function App() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState ("Calcular");
  const [messageImc, setMessageImc] = useState("Preencha o peso e a altura");
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
      <TouchableOpacity style={styles.button}
      onPress={() => alert('ahhhhhhhhhh')}> 
        
        <Ionicons name={"calculator-sharp"} size={24} color="#fff" />
        <Text style={styles.text}>Calcular</Text>
      </TouchableOpacity>
      
      <View style={styles.imcContainer}>
        <Text style={styles.imcText}>{messageImc}</Text>
        <Text style={styles.imcResult}>{imc}</Text>
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
  },
  button: {
    width: '100%',
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A020F0',
    borderRadius: 100,
    marginTop: 18,
    marginBottom: 10
  },
  text:{
    color: '#ffff',
    fontSize: 20,
    marginLeft: 5
  },
  imcContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',

  },
  imcText:{
    fontSize: 18,
    color: "#A020F0",
    fontWeight: 'bold'
  },
  imcResult: {
    fontSize: 48,
    color: "#A020F0",
    fontWeight: 'bold'
  }
});
