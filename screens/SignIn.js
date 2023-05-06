import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { Avatar } from 'react-native-paper';
import { auth } from '../firebase-config';

// eslint-disable-next-line react/prop-types
const SignIn = ({ onSignInSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleSignup = async () => {
        try {
            const credentials = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            console.log(credentials?.user.email.slice(0, 2).toUpperCase());
            onSignInSuccess(credentials);
        } catch (err) {
            console.log(err.message);
        }
    };

    const handleNavigate = () => {
        navigation.navigate('Login');
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View>
                <Avatar.Image
                    size={100}
                    source={require('../assets/splash.png')}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Hasło"
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    autoCapitalize="none"
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleSignup}>
                    <Text style={styles.buttonText}>Zarejestruj się</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonLogin}
                    onPress={handleNavigate}
                >
                    <Text style={styles.buttonLoginText}>Zaloguj się</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        marginTop: 15,
        height: 50,
        borderColor: 'grey',
        borderWidth: 1,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        width: '100%',
        height: 40,
        backgroundColor: 'blue',
        borderRadius: 10,
        padding: 7,
        alignItems: 'center',
    },
    buttonLogin: {
        width: '100%',
        marginTop: 30,
        alignItems: 'center',
    },
    buttonLoginText: {
        color: 'white',
        fontSize: 12,
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 10,
        borderColor: 'blue',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700',
    },
    buttonOutlineText: {
        color: 'blue',
        fontSize: 16,
        fontWeight: '700',
    },
});

export default SignIn;
