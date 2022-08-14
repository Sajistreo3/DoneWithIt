// import { StatusBar } from 'expo-status-bar'
import {
  Text,
  View,
  Image,
  ImageBackground,
} from 'react-native';

export default function App() {
  return (
    <>
      <View style={{
        backgroundColor: 'dodgerblue',
        flex: 10,
        flexDirection: "row",
        justifyContent: "center",
        // alignItems: "center",
      }}>
        <ImageBackground
          source={require('./app/assets/background.jpg')}
          resizeMode="cover"
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: 'center',
          }}
        >
          <View style={{
            width: 100,
            height: 100,
            top: 100,
          }}>
            <Image
              source={require('./app/assets/logo-red.png')} resizeMode="contain"
              style={{
                width: 100,
                height: 100,
              }}
            />
          </View>
          <View style={{
            width: 100,
            height: 100
          }} />
          <Text>Sell what you don't need</Text>
        </ImageBackground>
      </View>
      <View style={{
        backgroundColor: '#E9676A',
        flex: 1,
      }} />
      <View style={{
        backgroundColor: '#73CAC3',
        flex: 1,
      }} />
    </>
  );
}
