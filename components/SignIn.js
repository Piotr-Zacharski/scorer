
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase-config";
import CustomButton from "./CustomButton";




const SignIn = ({ onSignInSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((credentials) => {
                console.log(credentials)
                onSignInSuccess();
            }).catch(err => {
            console.log(err.message)
        })
    }


    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                name="email"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
                name="password"
            />
            <CustomButton style={styles.btn} text="Login" size="lg" title="Login" onPress={handleSignup} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 150,
    },
    input: {
        width: '80%',
        height: 40,
        marginVertical: 10,
        paddingHorizontal: 10,
        margin: 40
    },
    btn: {
        margin: 50,
        border: 'white',
        width: 150,
        height: 50,
        backgroundColor: 'white'
    }
});

export default SignIn;