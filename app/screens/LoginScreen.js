import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import SafeScreen from '../components/SafeScreen';

function LoginScreen(props) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <SafeScreen style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/logo-red.png')}
            />
            <AppTextInput
                autoCapitalize='none'
                autoCorrect={false}
                icon='email'
                keyboardType='email-address'
                onChangeText={text => setEmail(text)}
                placeholder='Email'
                textContentType='emailAddress'
            />
            <AppTextInput
                autoCapitalize='none'
                autoCorrect={false}
                icon='lock'
                onChangeText={text => setPassword(text)}
                placeholder='password'
                secureTextEntry
                textContentType='password'
            />
            <AppButton title='Login' onPress={() => console.log(email, password)} />
        </SafeScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
    },
})

export default LoginScreen;