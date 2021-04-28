import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [joke, setJoke] = useState('');

  const gettingJoke = async() => {
  const api__url = await
  fetch("https://official-joke-api.appspot.com/random_joke");
  const data = await api__url.json();
  let textJoke = "- " + data.setup + "\n" + "- " + data.punchline;
  setJoke(textJoke);
}
  

  return (
  <View style = {{ width: '100%', height: '100%'}}>
      <View style ={styles.header}>
      <Text style={styles.headerText}>Best Joke Generator</Text>
    </View>
    <View style={styles.container}>
      <Text style ={styles.joke}>{joke}</Text>
      <Button onPress = {gettingJoke} title = "Generate Joke" />
      <StatusBar style="auto" />
    </View>
  </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0FFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    height: 90,
    backgroundColor: '#1E90FF',
    },

  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign:'center',
    paddingTop: 35,
    paddingBottom: 20
  },

  joke: {
    fontSize: 20,
    textAlign: 'center',
    color: '#1E90FF',
    marginBottom: 10
  }

});
