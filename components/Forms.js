import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Picker, Section, SectionContent, Text } from 'react-native-rapi-ui';
import { allGames } from '../firebase-config';

const Forms = () => {
    const [gameValue, setGameValue] = useState(null);
    const [playerValue, setPlayerValue] = useState(null);
    const [games, setGames] = useState([]);

    useEffect(() => {
        const fetchGames = async () => {
            const snapshot = await allGames.once('value');
            const gameList = [];
            snapshot.forEach((childSnapshot) => {
                gameList.push({
                    label: childSnapshot.key,
                    value: childSnapshot.val(),
                });
            });
            setGames(gameList);
        };
        fetchGames();
    }, []);

    const players = [
        { label: 'Ania', value: 'Ania' },
        { label: 'Piotrek', value: 'Piotrek' },
    ];

    return (
        <Section style={{ marginHorizontal: 20, marginTop: 20 }}>
            <SectionContent style={styles.container}>
                <View>
                    <Picker
                        items={
                            games?.length > 0
                                ? games
                                : [{ label: 'Loading...', value: null }]
                        }
                        value={games}
                        placeholder="Wybierz grę"
                        onValueChange={(val) => setGameValue(val)}
                    />
                </View>
                <View>
                    <Picker
                        items={players}
                        value={playerValue}
                        placeholder="Wybierz gracza"
                        onValueChange={(val) => setPlayerValue(val)}
                    />
                </View>
                <View>
                    <Text>{gameValue}</Text>
                    <Text>{playerValue}</Text>
                </View>
            </SectionContent>
        </Section>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        gap: 20,
    },
});

export default Forms;
