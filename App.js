import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

const picker = () => {
  let rand = Math.floor(Math.random() * 2);
  // console.log(rand)
  return rand
}

const guess = (button,props) => {
  const answer = picker()
  if(button.toLowerCase() === "left".toLowerCase()){
    if(answer === 0){
      props.win = true
    }
    // else{
    //   win = false
    // }
    
  }
  if(button.toLowerCase() === "right".toLowerCase()){
    if(answer === 1){
      win = true
    }
    // else{
    //   win = false
    // }
  }
}

const App = () => {
  const [win, guessed] = useState(false)
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text> This is something that is new</Text>
      <StatusBar style="auto" />
      <View style={styles.row}>
        <View style={styles.button}>
          <Button 
          onPress={() => {
            guess("left"); 
            setguessed = true
          }}
          title="Left" 
          color= "green"
          accessibilityLabel="The intended guess was LEFT"
          style="inline">
          </Button>
        </View>
        <View style={styles.button}>
          <Button
          // onPress={onPressGuessRight}
          title="Right" 
          color= "green"
          accessibilityLabel="The intended guess was RIGHT">
          </Button>
        </View>
      </View>
      <Text disabled={!guessed}>You Lose</Text>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    width: 100

  },
  button: {
    width: 75,
    height: 15,
    margin: '10px',
  },
});
