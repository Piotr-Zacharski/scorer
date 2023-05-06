import { ThemeProvider } from 'react-native-rapi-ui';
import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { Input } from '@rneui/base';
import { signOut } from 'firebase/auth';
import CustomLayout from '../components/CustomLayout';
import CustomButton from '../components/CustomButton';
import CustomDialog from '../components/CustomDialog';
import Forms from '../components/Forms';
import { addGame, auth } from '../firebase-config';
import { buttons } from '../utils/buttons';
import LoginScreen from './LoginScreen';

const HomeScreen = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showAddGameDialog, setShowAddGameDialog] = useState(false);
    const [showAddPlayerDialog, setShowAddPlayerDialog] = useState(false);
    const [showAddGameplayDialog, setShowAddGameplayDialog] = useState(false);
    const [gameName, setGameName] = useState('');

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
    };
    const signOutUser = async () => {
        try {
            await signOut(auth);

            setIsLoggedIn(false);
        } catch (error) {
            console.log(error.message);
        }
    };
    const toggleAddGameDialog = () => {
        setShowAddGameDialog(!showAddGameDialog);
    };
    const toggleAddPlayerDialog = () => {
        setShowAddPlayerDialog(!showAddPlayerDialog);
    };
    const toggleAddGameplayDialog = () => {
        setShowAddGameplayDialog(!showAddGameplayDialog);
    };

    return (
        <ThemeProvider theme="light">
            {isLoggedIn ? (
                <CustomLayout signOutUser={signOutUser}>
                    <View style={styles.container}>
                        <CustomButton
                            key={buttons[0].name}
                            text={buttons[0].name}
                            size="lg"
                            style={styles.button}
                            rightContent={buttons[0].icon}
                            status="danger"
                            type="TouchableOpacity"
                            onPress={() => setShowAddGameDialog(true)}
                        />
                        <CustomButton
                            key={buttons[1].name}
                            text={buttons[1].name}
                            size="lg"
                            style={styles.button}
                            rightContent={buttons[1].icon}
                            status="danger"
                            type="TouchableOpacity"
                            onPress={() => setShowAddPlayerDialog(true)}
                        />
                        <CustomButton
                            key={buttons[2].name}
                            text={buttons[2].name}
                            size="lg"
                            style={styles.button}
                            rightContent={buttons[2].icon}
                            status="danger"
                            type="TouchableOpacity"
                            onPress={() => setShowAddGameplayDialog(true)}
                        />
                    </View>

                    {showAddGameDialog ? (
                        <CustomDialog
                            isVisible={showAddGameDialog}
                            title="Dodaj grę"
                            onBackdropPress={toggleAddGameDialog}
                        >
                            <Input
                                name="gameName"
                                value={gameName}
                                onChangeText={(text) => setGameName(text)}
                                placeholder="Podaj tytuł gry"
                            />
                            <CustomButton
                                text="Add Game"
                                rightContent={buttons[0].icon}
                                onPress={() => {
                                    addGame(gameName)
                                        .then(() => {
                                            setGameName('');
                                            toggleAddGameDialog();
                                        })
                                        .catch((e) =>
                                            console.error(
                                                'Error adding game: ',
                                                e
                                            )
                                        );
                                }}
                            />
                        </CustomDialog>
                    ) : null}
                    {showAddPlayerDialog ? (
                        <CustomDialog
                            isVisible={showAddPlayerDialog}
                            title="Dodaj gracza"
                            onBackdropPress={toggleAddPlayerDialog}
                        >
                            <Input
                                placeholder="Podaj nazwę gracza"
                                onChangeText={(text) => console.log(text)}
                            />
                            <CustomButton
                                text="Add Player"
                                rightContent={buttons[1].icon}
                                onPress={() =>
                                    console.log('Add player button pressed')
                                }
                            />
                        </CustomDialog>
                    ) : null}
                    {showAddGameplayDialog ? (
                        <CustomDialog
                            style={styles.dialog}
                            isVisible={showAddGameplayDialog}
                            title="Dodaj rozgrywkę"
                            onBackdropPress={toggleAddGameplayDialog}
                        >
                            <Forms />
                        </CustomDialog>
                    ) : null}
                </CustomLayout>
            ) : (
                <LoginScreen onLoginSuccess={handleLoginSuccess} />
            )}
        </ThemeProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        gap: 20,
    },
    dialog: {
        gap: 20,
        padding: 10,
    },
});

export default HomeScreen;
