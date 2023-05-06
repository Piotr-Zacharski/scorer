import React, { useState } from 'react';
import { Avatar } from 'react-native-paper';
import {
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { signInWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../firebase-config';

// eslint-disable-next-line react/prop-types
const LoginScreen = ({ onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleLogin = async () => {
        try {
            const userCredentials = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            const { user } = userCredentials;
            navigation.navigate('Home');
            await onLoginSuccess(user);
            console.log(user.email);
        } catch (err) {
            console.log(err.message);
        }
    };

    const handleNavigate = () => {
        navigation.navigate('Signin');
    };

    return (
        <KeyboardAvoidingView style={styles.container}>
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
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Zaloguj się</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonLogin}
                    onPress={handleNavigate}
                >
                    <Text style={styles.buttonLoginText}>Zarejestruj się</Text>
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

export default LoginScreen;
