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
            const myGames = await allGames.get();
            setGames(
                myGames.docs.map((doc) => ({
                    name: doc.data().name,
                    value: doc.id,
                }))
            );
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
                        items={games}
                        value={gameValue?.name}
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
