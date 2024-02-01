import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';


export default function App() {

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={'./assets/Tofu.JPG'} />
      <Button title="Click Me" onPress={() => alert('Button Clicked!')} />
      <StatusBar style="auto" />
    </View>
  );
}

 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24897d',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  img: {
    width: 300,
    height: 300,
    borderRadius: 50 / 2,
    borderWidth: 4,
    borderColor: 'white',
    resizeMode: 'contain',
  },
});
