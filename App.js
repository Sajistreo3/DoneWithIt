// import { StatusBar } from 'expo-status-bar'
import TestScreen from './app/screens/testScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import { View, StyleSheet, Text } from 'react-native';

export default function App() {
  return (
    // <View style={styles.container} >
    //   <AppButton value='Login' onPress={() => console.log("Button Pressed")} />
    // </View>
    <ViewImageScreen />



    // <View style={{
    //   backgroundColor: '#f8f4f4',
    //   padding: 20,
    //   paddingTop: 100,
    // }}>
    //   <Card
    //       title="Red Jacket for sale"
    //       subTitle="$100"
    //       image={require('./app/assets/jacket.png')}
    //   />
      
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
  },
});
