import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../firebase-config';
import CustomButton from './CustomButton';

// eslint-disable-next-line react/prop-types
const SignIn = ({ onSignInSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        try {
            const credentials = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            console.log(credentials?.user.email.slice(0,2).toUpperCase())
            onSignInSuccess();
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                name="email"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Hasło"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                name="password"
                autoCapitalize="none"
            />
            <CustomButton
                style={styles.btn}
                text="Zarejestruj się"
                size="lg"
                onPress={handleSignup}
            />
            <Text style={styles.text}>Zarejestruj się aby zagrac</Text>

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
        width: 200,
        height: 50,
        backgroundColor: 'white',
    },
    text: {
        color: 'white',
    }
});

export default SignIn;
