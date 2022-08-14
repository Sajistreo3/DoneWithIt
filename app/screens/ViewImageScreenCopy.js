// import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Image,
  Alert,
  StatusBar,
  Dimensions,
  Platform,
  SafeAreaView,
  Button,
  ImageBackground,
} from 'react-native';



export default function App() {
  return (
    <SafeAreaView style={{
      backgroundColor: 'black',
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    }}
    >
      <View style={{
        backgroundColor: 'dodgerblue',
        position: 'absolute',
        width: 50,
        height: 50,
        top: 50,
        left: 35,
      }} />
      <View style={{
        height: 600,
        width: "100%",
      }}>
        <Image
          source={require('./assets/chair.jpg')} resizeMode="contain"
          style={{
            flex: 1,
            width: null,
          }}
        />
      </View>
      <View style={{
        backgroundColor: 'tomato',
        position: 'absolute',
        width: 50,
        height: 50,
        top: 50,
        right: 35,
      }} />
    </SafeAreaView>
  );
}

