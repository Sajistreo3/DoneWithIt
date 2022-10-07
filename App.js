import React, { useState } from 'react';
import TestScreen from './app/screens/testScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import MessagesScreen from './app/screens/MessagesScreen';
import SafeScreen from './app/components/SafeScreen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreen';


export default function App() {
  const [firstName, setFirstName] = useState('');


  return (

    // <MessagesScreen />
    // <AccountScreen />
    // <ListingScreen />

    <SafeScreen>
      <Text>{firstName}</Text>
      <TextInput 
        maxLength={5}
        keyboardType="numeric"
        onChangeText={text => setFirstName(text)}
        placeholder='First Name' 
        style={{
          borderBottomColor: '#ccc',
          borderBottomWidth: 1,
        }}
      />
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
  },
});
