import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import AppButton from '../components/AppButton';

function testScreen(props) {
    return (
        <View style={styles.container}>
           <AppButton value="Login"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});


export default testScreen;