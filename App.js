import React,{useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const App = ()=> {
  // define values for state
  const [count,setCount] = useState(0);

  return(
    <View style = {styles.container}>
      <Text>You Clicked {count}</Text>
      <Button 
      title="Click" 
      onPress = {() => setCount(count + 1)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default App;