import React, { useState } from 'react';
import TestScreen from './app/screens/testScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import { View, StyleSheet, Text, TextInput, Switch } from 'react-native';
import MessagesScreen from './app/screens/MessagesScreen';
import SafeScreen from './app/components/SafeScreen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreen';
import AppTextInput from './app/components/AppTextInput';


export default function App() {
  const [isNew, setIsNew] = useState(false);

  return (

    // <MessagesScreen />
    // <AccountScreen />
    // <ListingScreen />

    <SafeScreen>
      {/* <Switch value={isNew} onValueChange={newValue => setIsNew(newValue)} /> */}
      {/* <TextInput 
        maxLength={5}
        secureTextEntry
        onChangeText={text => setFirstName(text)}
        placeholder='First Name' 
        style={{
          borderBottomColor: '#ccc',
          borderBottomWidth: 1,
        }}
      /> */}
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
