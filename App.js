import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Switch } from 'react-native';
import AppPicker from './app/components/AppPicker';
import PickerItem from './app/components/PickerItem';
import SafeScreen from './app/components/SafeScreen';
import LoginScreen from './app/screens/LoginScreen';



export default function App() {
  const categories = [
    { label: 'furniture', id: 1 },
    { label: 'toys', id: 2 },
    { label: 'cloths', id: 3 },
  ];
  


  return (
    <SafeScreen>
      {/* <LoginScreen /> */}
      <AppPicker icon='apps' placeholder='categories' items={categories}/>
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
