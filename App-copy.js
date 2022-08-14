// import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
  Image,
  Alert,
  StatusBar,
  Platform,
  SafeAreaView,
  Button
} from 'react-native';

export default function App() {
const handlePress = () => console.log("Text Clicked");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <TouchableNativeFeedback onPress={() => console.log("Image Presses")}>
        <Button
          title='Click Me'
          onPress={() =>
            Alert.prompt('Title', 'Message', (text) => console.log(text))
          }
        />
        {/* <View style={{ width: 200, height: 70, backgroundColor: "dodgerblue"}}></View> */}
        {/* <Image
          blurRadius={0}
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300"
          }}
        /> */}
      </TouchableNativeFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColore: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
