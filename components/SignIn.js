import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';
import CustomButton from './CustomButton';

// eslint-disable-next-line react/prop-types
const SignIn = ({ onSignInSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((credentials) => {
                console.log(credentials);
                onSignInSuccess();
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Imię"
                value={displayName}
                onChangeText={setDisplayName}
                name="displayName"
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                name="email"
            />
            <TextInput
                style={styles.input}
                placeholder="Hasło"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                name="password"
            />
            <CustomButton
                style={styles.btn}
                text="Login"
                size="lg"
                title="Login"
                onPress={handleSignup}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 200,
    },
    input: {
        width: '80%',
        height: 40,
        marginVertical: 10,
        paddingHorizontal: 10,
        margin: 40,
    },
    btn: {
        margin: 50,
        border: 'white',
        width: 150,
        height: 50,
        backgroundColor: 'white',
    },
});

export default SignIn;
