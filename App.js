import { ThemeProvider } from 'react-native-rapi-ui';
import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import { Input } from '@rneui/base';
import CustomLayout from './components/CustomLayout';
import CustomButton, { buttons } from './components/CustomButton';
import SignIn from './components/SignIn';
import CustomDialog from './components/CustomDialog';
import Forms from './components/Forms';
import { addGame } from './firebase-config';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const [showAddGameDialog, setShowAddGameDialog] = useState(false);
    const [showAddPlayerDialog, setShowAddPlayerDialog] = useState(false);
    const [showAddGameplayDialog, setShowAddGameplayDialog] = useState(false);
    const [gameName, setGameName] = useState('');

    const handleSignInSuccess = () => {
        setIsAuthenticated(true);
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
            <CustomLayout>
                {isAuthenticated ? (
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
                ) : (
                    <SignIn onSignInSuccess={handleSignInSuccess} />
                )}
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
                            rightContent={buttons[0].icon}
                            onPress={() => {
                                addGame(gameName)
                                    .then(() => {
                                        setGameName('');
                                        toggleAddGameDialog();
                                    })
                                    .catch((e) =>
                                        console.error('Error adding game: ', e)
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
                        <Input placeholder="Podaj tytuł gry" />
                        <CustomButton rightContent={buttons[1].icon} />
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

export default App;
